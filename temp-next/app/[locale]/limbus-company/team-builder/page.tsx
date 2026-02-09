'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SINNERS, getAllIdentities, type Identity, type Sinner } from '@/lib/data/limbus/sinners';
import { type EGO } from '@/lib/data/limbus/egos';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

const TEAM_SIZE = 5;

interface AIRecommendation {
    team: Identity[];
    analysis: string;
    synergies: string[];
    suggestedEGOs: EGO[];
    score: number;
}

export default function TeamBuilderPage() {
    const [selectedIdentities, setSelectedIdentities] = useState<Identity[]>([]);
    const [ownedIdentities, setOwnedIdentities] = useState<Set<string>>(new Set());
    const [filterTier, setFilterTier] = useState<string>('all');
    const [filterSinner, setFilterSinner] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(false);
    const [aiRecommendation, setAiRecommendation] = useState<AIRecommendation | null>(null);

    const allIdentities = useMemo(() => getAllIdentities(), []);

    const filteredIdentities = useMemo(() => {
        return allIdentities.filter(identity => {
            if (filterTier !== 'all' && identity.tier !== filterTier) return false;
            if (filterSinner !== 'all' && identity.sinnerId !== filterSinner) return false;
            return true;
        });
    }, [allIdentities, filterTier, filterSinner]);

    const toggleOwned = (identityId: string) => {
        const newOwned = new Set(ownedIdentities);
        if (newOwned.has(identityId)) {
            newOwned.delete(identityId);
        } else {
            newOwned.add(identityId);
        }
        setOwnedIdentities(newOwned);
    };

    const addToTeam = (identity: Identity) => {
        if (selectedIdentities.length >= TEAM_SIZE) return;
        // Check if sinner already in team
        if (selectedIdentities.some(i => i.sinnerId === identity.sinnerId)) return;
        setSelectedIdentities([...selectedIdentities, identity]);
    };

    const removeFromTeam = (identityId: string) => {
        setSelectedIdentities(selectedIdentities.filter(i => i.id !== identityId));
    };

    const clearTeam = () => {
        setSelectedIdentities([]);
        setAiRecommendation(null);
    };

    const getAIRecommendation = async () => {
        if (ownedIdentities.size === 0) {
            alert('Please mark at least some identities as owned first!');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/ai/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ownedIdentities: Array.from(ownedIdentities),
                    scenario: 'general',
                }),
            });

            if (!response.ok) throw new Error('Failed to get recommendation');

            const data: AIRecommendation = await response.json();
            setAiRecommendation(data);
            setSelectedIdentities(data.team);
        } catch (error) {
            console.error('Error getting AI recommendation:', error);
            alert('Failed to get AI recommendation. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Simple team analysis
    const teamAnalysis = useMemo(() => {
        const attackTypes = { slash: 0, pierce: 0, blunt: 0 };
        const sinAffinities: Record<string, number> = {};

        selectedIdentities.forEach(identity => {
            attackTypes[identity.attackType]++;
            identity.sinAffinity.forEach(sin => {
                sinAffinities[sin] = (sinAffinities[sin] || 0) + 1;
            });
        });

        const dominantAttack = Object.entries(attackTypes).sort((a, b) => b[1] - a[1])[0];
        const dominantSin = Object.entries(sinAffinities).sort((a, b) => b[1] - a[1])[0];

        return { attackTypes, sinAffinities, dominantAttack, dominantSin };
    }, [selectedIdentities]);

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/limbus-company"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    ← Back to Limbus Company
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    🎯 AI Team Builder
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    Build your optimal Mirror Dungeon team. Mark identities you own and get AI recommendations.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Identity Selection */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 items-center bg-pm-gray-dark/30 p-4 rounded-lg">
                        <div>
                            <label className="text-sm text-pm-gray-light mr-2">Tier:</label>
                            <select
                                value={filterTier}
                                onChange={(e) => setFilterTier(e.target.value)}
                                className="bg-pm-black border border-pm-gray-dark rounded px-3 py-1 text-white"
                            >
                                <option value="all">All</option>
                                <option value="S">S Tier</option>
                                <option value="A">A Tier</option>
                                <option value="B">B Tier</option>
                                <option value="C">C Tier</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm text-pm-gray-light mr-2">Sinner:</label>
                            <select
                                value={filterSinner}
                                onChange={(e) => setFilterSinner(e.target.value)}
                                className="bg-pm-black border border-pm-gray-dark rounded px-3 py-1 text-white"
                            >
                                <option value="all">All Sinners</option>
                                {SINNERS.map(sinner => (
                                    <option key={sinner.id} value={sinner.id}>{sinner.name}</option>
                                ))}
                            </select>
                        </div>
                        <span className="text-sm text-pm-gray-light ml-auto">
                            {filteredIdentities.length} identities | {ownedIdentities.size} owned
                        </span>
                    </div>

                    {/* Identity Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {filteredIdentities.map((identity) => {
                            const isOwned = ownedIdentities.has(identity.id);
                            const isInTeam = selectedIdentities.some(i => i.id === identity.id);
                            const sinnerInTeam = selectedIdentities.some(i => i.sinnerId === identity.sinnerId);

                            return (
                                <div
                                    key={identity.id}
                                    className={`
                    relative p-3 rounded-lg border transition-all cursor-pointer
                    ${isInTeam
                                            ? 'bg-pm-gold/20 border-pm-gold'
                                            : isOwned
                                                ? 'bg-pm-gray-dark/50 border-pm-gray-dark hover:border-pm-red'
                                                : 'bg-pm-gray-dark/20 border-pm-gray-dark/50 opacity-50'
                                        }
                  `}
                                    onClick={() => {
                                        if (!isOwned) {
                                            toggleOwned(identity.id);
                                        } else if (!isInTeam && !sinnerInTeam) {
                                            addToTeam(identity);
                                        }
                                    }}
                                >
                                    {/* Tier Badge */}
                                    <span className={`
                    absolute top-1 right-1 text-xs font-bold px-1.5 py-0.5 rounded
                    ${identity.tier === 'S' ? 'bg-pm-gold text-black' :
                                            identity.tier === 'A' ? 'bg-purple-600 text-white' :
                                                identity.tier === 'B' ? 'bg-blue-600 text-white' :
                                                    'bg-pm-gray-dark text-pm-gray-light'}
                  `}>
                                        {identity.tier}
                                    </span>

                                    {/* Rarity Stars */}
                                    <div className="text-pm-gold text-xs mb-1">
                                        {'★'.repeat(identity.rarity)}{'☆'.repeat(3 - identity.rarity)}
                                    </div>

                                    {/* Name */}
                                    <h4 className="text-sm font-medium text-white line-clamp-2 min-h-[2.5rem]">
                                        {identity.name}
                                    </h4>

                                    {/* Attack Type */}
                                    <div className="mt-2 flex items-center gap-2 text-xs text-pm-gray-light">
                                        <span className={`
                      px-1.5 py-0.5 rounded
                      ${identity.attackType === 'slash' ? 'bg-red-900/50 text-red-300' :
                                                identity.attackType === 'pierce' ? 'bg-yellow-900/50 text-yellow-300' :
                                                    'bg-blue-900/50 text-blue-300'}
                    `}>
                                            {identity.attackType}
                                        </span>
                                    </div>

                                    {/* Owned checkbox */}
                                    <label
                                        className="absolute bottom-1 left-1 flex items-center gap-1 text-xs"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isOwned}
                                            onChange={() => toggleOwned(identity.id)}
                                            className="rounded border-pm-gray-dark"
                                        />
                                        <span className="text-pm-gray-light">Owned</span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right: Team Panel */}
                <div className="space-y-6">
                    {/* AI Recommendation Button */}
                    <button
                        onClick={getAIRecommendation}
                        disabled={isLoading || ownedIdentities.size === 0}
                        className="w-full bg-gradient-to-r from-pm-red to-pm-gold text-white font-bold py-3 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <span className="animate-spin">⏳</span>
                                Analyzing...
                            </>
                        ) : (
                            <>
                                🤖 Get AI Recommendation
                            </>
                        )}
                    </button>

                    {/* AI Recommendation Result */}
                    {aiRecommendation && (
                        <div className="bg-gradient-to-br from-pm-red/10 to-pm-gold/10 border border-pm-gold/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-serif font-bold text-white">
                                    🤖 AI Analysis
                                </h3>
                                <span className="text-xs bg-pm-gold text-black px-2 py-1 rounded font-bold">
                                    Score: {aiRecommendation.score}/100
                                </span>
                            </div>
                            <p className="text-sm text-pm-gray-light mb-3">
                                {aiRecommendation.analysis}
                            </p>
                            {aiRecommendation.synergies.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                    {aiRecommendation.synergies.map((synergy, i) => (
                                        <span key={i} className="text-xs bg-pm-gray-dark text-pm-gold px-2 py-1 rounded">
                                            ✨ {synergy}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Current Team */}
                    <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-serif font-bold text-white">
                                Your Team ({selectedIdentities.length}/{TEAM_SIZE})
                            </h3>
                            {selectedIdentities.length > 0 && (
                                <button
                                    onClick={clearTeam}
                                    className="text-sm text-pm-red hover:text-red-400"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        <div className="space-y-2">
                            {selectedIdentities.map((identity, index) => (
                                <div
                                    key={identity.id}
                                    className="flex items-center gap-3 bg-pm-black/50 p-2 rounded"
                                >
                                    <span className="text-pm-gold font-bold">{index + 1}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white truncate">{identity.name}</p>
                                        <p className="text-xs text-pm-gray-light">{identity.attackType}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromTeam(identity.id)}
                                        className="text-pm-red hover:text-red-400"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            {/* Empty slots */}
                            {Array.from({ length: TEAM_SIZE - selectedIdentities.length }).map((_, i) => (
                                <div
                                    key={`empty-${i}`}
                                    className="flex items-center gap-3 border border-dashed border-pm-gray-dark p-2 rounded"
                                >
                                    <span className="text-pm-gray-dark font-bold">{selectedIdentities.length + i + 1}</span>
                                    <p className="text-sm text-pm-gray-light">Select an identity</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Analysis */}
                    {selectedIdentities.length > 0 && (
                        <div className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4">
                            <h3 className="text-lg font-serif font-bold text-white mb-4">
                                Team Analysis
                            </h3>

                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-pm-gray-light mb-1">Attack Distribution:</p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-red-900/30 text-red-300 rounded">
                                            Slash: {teamAnalysis.attackTypes.slash}
                                        </span>
                                        <span className="px-2 py-1 bg-yellow-900/30 text-yellow-300 rounded">
                                            Pierce: {teamAnalysis.attackTypes.pierce}
                                        </span>
                                        <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded">
                                            Blunt: {teamAnalysis.attackTypes.blunt}
                                        </span>
                                    </div>
                                </div>

                                {teamAnalysis.dominantSin && (
                                    <div>
                                        <p className="text-pm-gray-light mb-1">Dominant Sin:</p>
                                        <span className="text-pm-gold font-medium capitalize">
                                            {teamAnalysis.dominantSin[0]} ({teamAnalysis.dominantSin[1]})
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Share Button Placeholder */}
                    <button
                        disabled={selectedIdentities.length === 0}
                        className="w-full bg-pm-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        📱 Share Team (Coming Soon)
                    </button>

                    {/* Ad Placeholder */}
                    <AdPlaceholder position="sidebar" />
                </div>
            </div>
        </div>
    );
}

