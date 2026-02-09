import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SINNERS, getSinnerById } from '@/lib/data/limbus/sinners';
import { getEGOsBySinner, GRADE_COLORS } from '@/lib/data/limbus/egos';

// Use edge runtime for Cloudflare Pages compatibility
export const runtime = 'edge';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const sinner = getSinnerById(id);
    if (!sinner) return { title: 'Sinner Not Found' };

    return {
        title: `${sinner.name} - Identities & E.G.O. Guide | Limbus Company`,
        description: `Complete guide for ${sinner.name} in Limbus Company. All identities, E.G.O., tier rankings, and recommended builds.`,
    };
}

export default async function SinnerDetailPage({ params }: Props) {
    const { id } = await params;
    const sinner = getSinnerById(id);

    if (!sinner) {
        notFound();
    }

    const egos = getEGOsBySinner(sinner.id);

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

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
                <Link href="/limbus-company" className="text-pm-gray-light hover:text-pm-gold">
                    Limbus Company
                </Link>
                <span className="mx-2 text-pm-gray-dark">/</span>
                <Link href="/limbus-company/sinners" className="text-pm-gray-light hover:text-pm-gold">
                    Sinners
                </Link>
                <span className="mx-2 text-pm-gray-dark">/</span>
                <span className="text-white">{sinner.name}</span>
            </nav>

            {/* Hero Section */}
            <header className="text-center mb-12">
                <span className="text-6xl font-serif font-bold text-pm-gold/30">
                    {String(sinner.number).padStart(2, '0')}
                </span>
                <div className="w-32 h-32 mx-auto my-4 bg-pm-gray-dark rounded-full flex items-center justify-center text-6xl">
                    👤
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    {sinner.name}
                </h1>
                <p className="mt-3 text-pm-gray-light italic text-lg max-w-xl mx-auto">
                    &ldquo;{sinner.quote}&rdquo;
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Identities Section */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                        <span>🎭</span> Identities ({sinner.identities.length})
                    </h2>
                    <div className="space-y-4">
                        {sinner.identities.map((identity) => (
                            <div
                                key={identity.id}
                                className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-red transition-all"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${tierColors[identity.tier]}`}>
                                                {identity.tier}
                                            </span>
                                            <span className="text-pm-gold text-sm">
                                                {'★'.repeat(identity.rarity)}{'☆'.repeat(3 - identity.rarity)}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white">
                                            {identity.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className={`text-xs px-2 py-1 rounded ${attackTypeColors[identity.attackType]}`}>
                                        ⚔️ {identity.attackType}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded bg-pm-gray-dark text-pm-gray-light">
                                        {identity.affiliation}
                                    </span>
                                    {identity.sinAffinity.map((sin) => (
                                        <span
                                            key={sin}
                                            className="text-xs px-2 py-1 rounded bg-pm-crimson/30 text-pm-red capitalize"
                                        >
                                            {sin}
                                        </span>
                                    ))}
                                </div>

                                {identity.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {identity.tags.map((tag) => (
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

                {/* E.G.O. Section */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                        <span>👁️</span> E.G.O. ({egos.length})
                    </h2>
                    {egos.length > 0 ? (
                        <div className="space-y-4">
                            {egos.map((ego) => (
                                <div
                                    key={ego.id}
                                    className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 hover:border-pm-gold transition-all"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${GRADE_COLORS[ego.grade]} text-white`}>
                                                    {ego.grade}
                                                </span>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${tierColors[ego.tier]}`}>
                                                    {ego.tier}-Tier
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white">
                                                {ego.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-pm-gray-light mb-3">
                                        From: <span className="text-pm-gold">{ego.abnormality}</span>
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <span className={`text-xs px-2 py-1 rounded ${attackTypeColors[ego.attackType]}`}>
                                            ⚔️ {ego.attackType}
                                        </span>
                                        {Object.entries(ego.sinCost).map(([sin, cost]) => (
                                            <span
                                                key={sin}
                                                className="text-xs px-2 py-1 rounded bg-pm-crimson/30 text-pm-red capitalize"
                                            >
                                                {sin}: {cost}
                                            </span>
                                        ))}
                                    </div>

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
                    ) : (
                        <div className="bg-pm-gray-dark/20 border border-dashed border-pm-gray-dark rounded-lg p-8 text-center">
                            <p className="text-pm-gray-light">No E.G.O. data available yet.</p>
                            <p className="text-sm text-pm-gray-dark mt-2">Data will be added soon.</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Team Builder CTA */}
            <section className="mt-12 bg-gradient-to-r from-pm-red/20 to-pm-gold/20 border border-pm-red/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                    Build a team with {sinner.name}
                </h3>
                <p className="text-pm-gray-light mb-4">
                    Try our AI-powered team builder to find the best compositions
                </p>
                <Link
                    href="/limbus-company/team-builder"
                    className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                >
                    🎯 Open Team Builder
                </Link>
            </section>
        </div>
    );
}
