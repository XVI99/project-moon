'use client';

import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { QRCodeSVG } from 'qrcode.react';
import type { Identity } from '@/lib/data/limbus/sinners';
import { DAMAGE_COLORS, RISK_COLORS, type RiskLevel } from '@/lib/data/lobcorp/abnormalities'; // Reusing colors for consistency if needed, though Limbus uses different ones often.

// Define Limbus specific colors if not already available
const TIER_COLORS = {
    S: 'bg-pm-gold text-black border-pm-gold',
    A: 'bg-purple-600 text-white border-purple-500',
    B: 'bg-blue-600 text-white border-blue-500',
    C: 'bg-gray-600 text-white border-gray-500',
};

const ATTACK_COLORS = {
    slash: 'text-red-400',
    pierce: 'text-yellow-400',
    blunt: 'text-blue-400',
};

interface TeamShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    team: Identity[];
    score?: number;
    analysis?: string;
}

export function TeamShareModal({ isOpen, onClose, team, score, analysis }: TeamShareModalProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    if (!isOpen) return null;

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsGenerating(true);
        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 });
            const link = document.createElement('a');
            link.download = `project-moon-hub-team-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to generate image', err);
        } finally {
            setIsGenerating(false);
        }
    };

    // Calculate simple stats for the card
    const stats = team.reduce((acc, id) => {
        acc.attack[id.attackType] = (acc.attack[id.attackType] || 0) + 1;
        id.sinAffinity.forEach(sin => {
            acc.sin[sin] = (acc.sin[sin] || 0) + 1;
        });
        return acc;
    }, { attack: {} as Record<string, number>, sin: {} as Record<string, number> });

    const topSin = Object.entries(stats.sin).sort((a, b) => b[1] - a[1])[0];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl bg-pm-gray-dark border border-pm-gold/30 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-pm-gray-light hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left: Preview / Download Actions */}
                <div className="p-6 flex flex-col gap-6 md:w-1/3 border-r border-pm-gray-dark/50">
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-2">Share Your Team</h3>
                        <p className="text-sm text-pm-gray-light">
                            Download this card to share your team composition with friends or on social media.
                        </p>
                    </div>

                    <div className="mt-auto space-y-3">
                        <button
                            onClick={handleDownload}
                            disabled={isGenerating}
                            className="w-full bg-pm-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2"
                        >
                            {isGenerating ? 'Generating...' : (
                                <>
                                    <span>⬇️</span> Download Image
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-pm-gray-light/50">
                            Image generated locally in your browser
                        </p>
                    </div>
                </div>

                {/* Right: The Actual Card (Rendered) */}
                <div className="p-6 md:w-2/3 bg-black flex items-center justify-center overflow-auto">
                    <div
                        ref={cardRef}
                        className="w-[600px] bg-gradient-to-br from-gray-900 to-black border border-pm-gray-dark p-6 rounded-lg text-white relative overflow-hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pm-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        {/* Header */}
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-pm-gold">Project Moon Hub</h2>
                                <p className="text-sm text-pm-gray-light">Limbus Company Team Builder</p>
                            </div>
                            {score !== undefined && (
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-pm-red">{score}</div>
                                    <div className="text-xs text-pm-gray-light uppercase tracking-wider">Team Score</div>
                                </div>
                            )}
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-5 gap-3 mb-6 relative z-10">
                            {team.map((identity, idx) => (
                                <div key={idx} className="bg-gray-800/50 border border-gray-700 p-2 rounded flex flex-col items-center text-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold mb-2">
                                        {'★'.repeat(identity.rarity)}
                                    </div>
                                    <div className="text-xs font-bold truncate w-full mb-1 text-gray-300">
                                        {identity.name.split(' ')[0]} {/* Sinner Name (usually) */}
                                    </div>
                                    <div className="text-[10px] leading-tight text-gray-500 line-clamp-2 h-6">
                                        {identity.name.split(' ').slice(1).join(' ')} {/* Identity Title */}
                                    </div>
                                    <div className={`mt-2 text-[10px] px-1.5 py-0.5 rounded font-bold ${TIER_COLORS[identity.tier as keyof typeof TIER_COLORS]}`}>
                                        Tier {identity.tier}
                                    </div>
                                </div>
                            ))}
                            {/* Fill empty slots */}
                            {Array.from({ length: 5 - team.length }).map((_, i) => (
                                <div key={`empty-${i}`} className="bg-gray-900/30 border border-dashed border-gray-800 rounded flex items-center justify-center opacity-50">
                                    <span className="text-2xl text-gray-800">+</span>
                                </div>
                            ))}
                        </div>

                        {/* Analysis / Stats */}
                        <div className="flex gap-4 mb-6 relative z-10">
                            {/* Analysis Text */}
                            <div className="flex-1 bg-gray-800/30 rounded p-3 text-xs text-gray-300 italic border-l-2 border-pm-gold">
                                "{analysis || 'A balanced team ready for the Mirror Dungeon.'}"
                            </div>

                            {/* Mini Stats */}
                            <div className="flex flex-col gap-1 text-xs text-gray-400 min-w-[100px]">
                                <div className="flex justify-between">
                                    <span>Dominant:</span>
                                    <span className={ATTACK_COLORS[Object.entries(stats.attack).sort((a, b) => b[1] - a[1])[0]?.[0] as keyof typeof ATTACK_COLORS] || 'text-white'}>
                                        {(Object.entries(stats.attack).sort((a, b) => b[1] - a[1])[0]?.[0] || '-').toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sin:</span>
                                    <span className="text-pm-gold capitalize">
                                        {topSin ? topSin[0] : '-'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Footer with QR */}
                        <div className="flex items-end justify-between border-t border-gray-800 pt-4 relative z-10">
                            <div>
                                <div className="text-xs text-gray-500 mb-1">Create your own team at:</div>
                                <div className="text-sm font-bold text-pm-gold">projectmoonhub.site</div>
                            </div>
                            <div className="bg-white p-1 rounded">
                                <QRCodeSVG value="https://projectmoonhub.site/limbus-company/team-builder" size={64} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
