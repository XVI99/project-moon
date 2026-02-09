import type { Metadata } from 'next';
import Link from 'next/link';
import { EGOS, GRADE_COLORS, GRADE_ORDER } from '@/lib/data/limbus/egos';

export const metadata: Metadata = {
    title: 'E.G.O. Collection - Limbus Company | Project Moon Hub',
    description: 'Complete E.G.O. tier list and guide for Limbus Company. All grades from ZAYIN to ALEPH with recommendations.',
    keywords: [
        'limbus company ego',
        'limbus company ego tier list',
        'ego guide limbus',
        'aleph ego limbus',
        'waw ego limbus',
    ],
};

export default function EGOsPage() {
    const tierColors: Record<string, string> = {
        S: 'bg-pm-gold text-black',
        A: 'bg-purple-600 text-white',
        B: 'bg-blue-600 text-white',
        C: 'bg-pm-gray-dark text-pm-gray-light',
        D: 'bg-gray-700 text-gray-400',
    };

    const attackTypeColors: Record<string, string> = {
        slash: 'text-red-400 bg-red-900/30',
        pierce: 'text-yellow-400 bg-yellow-900/30',
        blunt: 'text-blue-400 bg-blue-900/30',
    };

    // Group EGOs by grade
    const egosByGrade = GRADE_ORDER.reduce((acc, grade) => {
        acc[grade] = EGOS.filter(e => e.grade === grade);
        return acc;
    }, {} as Record<string, typeof EGOS>);

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
                    👁️ E.G.O. Collection
                </h1>
                <p className="mt-4 text-pm-gray-light max-w-2xl mx-auto">
                    Manifest your inner Abnormality. E.G.O. are special skills derived from Abnormality encounters.
                </p>
            </div>

            {/* Grade Legend */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {GRADE_ORDER.map((grade) => (
                    <div
                        key={grade}
                        className={`${GRADE_COLORS[grade]} px-4 py-2 rounded-lg text-white font-bold`}
                    >
                        {grade} ({egosByGrade[grade]?.length || 0})
                    </div>
                ))}
            </div>

            {/* E.G.O. by Grade */}
            <div className="space-y-12">
                {GRADE_ORDER.map((grade) => {
                    const gradeEgos = egosByGrade[grade];
                    if (!gradeEgos || gradeEgos.length === 0) return null;

                    return (
                        <section key={grade}>
                            <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                                <span className={`${GRADE_COLORS[grade]} px-3 py-1 rounded text-white`}>
                                    {grade}
                                </span>
                                <span>Grade E.G.O.</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {gradeEgos.map((ego) => (
                                    <div
                                        key={ego.id}
                                        className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-2">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${tierColors[ego.tier]}`}>
                                                {ego.tier}-Tier
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded ${attackTypeColors[ego.attackType]}`}>
                                                {ego.attackType}
                                            </span>
                                        </div>

                                        {/* Name & Sinner */}
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {ego.name}
                                        </h3>
                                        <Link
                                            href={`/limbus-company/sinners/${ego.sinnerId}`}
                                            className="text-sm text-pm-gold hover:text-yellow-400"
                                        >
                                            {ego.sinnerName}
                                        </Link>

                                        {/* Abnormality */}
                                        <p className="text-xs text-pm-gray-light mt-2">
                                            From: <span className="text-pm-red">{ego.abnormality}</span>
                                        </p>

                                        {/* Sin Cost */}
                                        <div className="flex flex-wrap gap-1 mt-3">
                                            {Object.entries(ego.sinCost).map(([sin, cost]) => (
                                                <span
                                                    key={sin}
                                                    className="text-xs px-2 py-0.5 rounded bg-pm-crimson/30 text-pm-red capitalize"
                                                >
                                                    {sin}: {cost}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        {ego.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-2">
                                                {ego.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs text-pm-gray-light"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* CTA */}
            <section className="mt-16 bg-gradient-to-r from-pm-red/20 to-pm-gold/20 border border-pm-red/30 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                    Need help choosing E.G.O.?
                </h3>
                <p className="text-pm-gray-light mb-6 max-w-xl mx-auto">
                    Our AI team builder will recommend the best E.G.O. for your team composition.
                </p>
                <Link
                    href="/limbus-company/team-builder"
                    className="inline-block bg-pm-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all"
                >
                    🎯 Try AI Team Builder
                </Link>
            </section>
        </div>
    );
}
