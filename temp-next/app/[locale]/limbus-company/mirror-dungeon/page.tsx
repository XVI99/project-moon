import type { Metadata } from 'next';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Mirror Dungeon Guide - Limbus Company | Project Moon Hub',
    description: 'Complete Mirror Dungeon guide for normal and hard mode. Floor strategies, E.G.O. gift priorities, and team recommendations.',
    keywords: [
        'limbus company mirror dungeon',
        'mirror dungeon guide',
        'mirror dungeon hard mode',
        'limbus company roguelike',
        'ego gift priority',
    ],
};

const floors = [
    {
        name: 'Floor 1 - The Beginning',
        difficulty: 'Easy',
        tips: ['Build your sin resources', 'Pick up cheap E.G.O. gifts', 'Focus on consistent damage'],
        recommendedGifts: ['Burn synergy', 'Bleed synergy', 'Raw damage increase'],
    },
    {
        name: 'Floor 2 - The Escalation',
        difficulty: 'Medium',
        tips: ['Start specializing your build', 'Avoid spreading resources too thin', 'Consider team composition'],
        recommendedGifts: ['Status effect amplifiers', 'Sin generation', 'Defense boosts'],
    },
    {
        name: 'Floor 3 - The Challenge',
        difficulty: 'Hard',
        tips: ['Commit to your build path', 'Synergy is key', 'Save E.G.O. for crucial moments'],
        recommendedGifts: ['Legendary synergy items', 'Team-wide buffs', 'Boss-specific counters'],
    },
    {
        name: 'Floor 4 - The Climax',
        difficulty: 'Very Hard',
        tips: ['Use all resources', 'Execute your strategy perfectly', 'Know boss patterns'],
        recommendedGifts: ['Ultimate synergy completers', 'Survival items', 'Burst damage'],
    },
];

const egogiftPriority = [
    { name: 'Burn Build', tier: 'S', description: 'Stack burn damage for explosive DPS. Works with Ryōshū, Heathcliff.' },
    { name: 'Bleed Build', tier: 'S', description: 'Consistent damage over time. Perfect for Don Quixote, Rodion.' },
    { name: 'Rupture Build', tier: 'A', description: 'High burst potential. Synergizes with Faust, Outis.' },
    { name: 'Tremor Build', tier: 'A', description: 'Crowd control focused. Works well with Yi Sang.' },
    { name: 'Poise Build', tier: 'B', description: 'Critical hit focused. Good with Ishmael, Hong Lu.' },
    { name: 'Charge Build', tier: 'B', description: 'High risk, high reward. Specialized for Don Quixote.' },
];

export default function MirrorDungeonPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <Link
                    href="/limbus-company"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    ← Back to Limbus Company
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    🪞 Mirror Dungeon Guide
                </h1>
                <p className="mt-4 text-pm-gray-light max-w-2xl mx-auto">
                    Master the roguelike mode with our comprehensive guide to builds, floors, and E.G.O. gift priorities.
                </p>
            </div>

            {/* Mode Selection */}
            <div className="flex justify-center gap-4 mb-12">
                <div className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center flex-1 max-w-xs">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">Normal Mode</h3>
                    <p className="text-sm text-pm-gray-light mb-4">Good for farming and practice</p>
                    <span className="text-pm-gold font-bold">4 Floors</span>
                </div>
                <div className="bg-gradient-to-br from-pm-red/30 to-pm-gold/20 border border-pm-red/50 rounded-lg p-6 text-center flex-1 max-w-xs">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">Hard Mode</h3>
                    <p className="text-sm text-pm-gray-light mb-4">Higher rewards, tougher fights</p>
                    <span className="text-pm-red font-bold">5 Floors + Bonus</span>
                </div>
            </div>

            {/* Floor Guide */}
            <section className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">📍 Floor-by-Floor Guide</h2>
                <div className="space-y-4">
                    {floors.map((floor, index) => (
                        <div
                            key={index}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6"
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h3 className="text-xl font-bold text-white">{floor.name}</h3>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${floor.difficulty === 'Easy' ? 'bg-green-600' :
                                        floor.difficulty === 'Medium' ? 'bg-yellow-600' :
                                            floor.difficulty === 'Hard' ? 'bg-orange-600' :
                                                'bg-red-600'
                                    } text-white`}>
                                    {floor.difficulty}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-bold text-pm-gold mb-2">💡 Tips</h4>
                                    <ul className="text-sm text-pm-gray-light space-y-1">
                                        {floor.tips.map((tip, i) => (
                                            <li key={i}>• {tip}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-pm-gold mb-2">🎁 Recommended Gifts</h4>
                                    <ul className="text-sm text-pm-gray-light space-y-1">
                                        {floor.recommendedGifts.map((gift, i) => (
                                            <li key={i}>• {gift}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* E.G.O. Gift Priority */}
            <section className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">🎁 Build Tier List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {egogiftPriority.map((build, index) => (
                        <div
                            key={index}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${build.tier === 'S' ? 'bg-pm-gold text-black' :
                                        build.tier === 'A' ? 'bg-purple-600 text-white' :
                                            'bg-blue-600 text-white'
                                    }`}>
                                    {build.tier}
                                </span>
                                <h3 className="font-bold text-white">{build.name}</h3>
                            </div>
                            <p className="text-sm text-pm-gray-light">{build.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quick Tips */}
            <section className="mb-16 bg-gradient-to-r from-pm-red/10 to-pm-gold/10 border border-pm-gray-dark rounded-lg p-6">
                <h2 className="text-2xl font-serif font-bold text-white mb-4">⚡ Quick Tips for Success</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-pm-gray-light">
                    <div>
                        <h4 className="font-bold text-pm-gold mb-2">Early Game</h4>
                        <ul className="space-y-1">
                            <li>• Don&apos;t skip free encounters - you need sin resources</li>
                            <li>• Cheap E.G.O. gifts are often better than expensive ones</li>
                            <li>• Focus on one damage type if possible</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-pm-gold mb-2">Late Game</h4>
                        <ul className="space-y-1">
                            <li>• Save E.G.O. uses for mini-bosses and bosses</li>
                            <li>• Synergy completion is more important than raw stats</li>
                            <li>• Know when to skip encounters and preserve health</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team Builder CTA */}
            <section className="text-center">
                <div className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                        Build Your Mirror Dungeon Team
                    </h3>
                    <p className="text-pm-gray-light mb-6 max-w-xl mx-auto">
                        Use our AI-powered team builder to create the optimal team for your next run.
                    </p>
                    <Link
                        href="/limbus-company/team-builder"
                        className="inline-block bg-pm-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all"
                    >
                        🎯 Open Team Builder
                    </Link>
                </div>
            </section>

            {/* Ad */}
            <div className="mt-12 flex justify-center">
                <AdPlaceholder position="content-bottom" />
            </div>
        </div>
    );
}
