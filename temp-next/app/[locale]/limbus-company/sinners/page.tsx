import type { Metadata } from 'next';
import Link from 'next/link';
import { SINNERS } from '@/lib/data/limbus/sinners';
import { getEGOsBySinner } from '@/lib/data/limbus/egos';

export const metadata: Metadata = {
    title: 'All Sinners - Limbus Company Database | Project Moon Hub',
    description: 'Complete guide to all 12 Sinners in Limbus Company. View identities, E.G.O., tier rankings, and optimal team compositions.',
    keywords: [
        'limbus company sinners',
        'limbus company characters',
        'limbus company tier list',
        'yi sang guide',
        'faust guide',
        'don quixote guide',
    ],
};

export default function SinnersPage() {
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
                    The Twelve Sinners
                </h1>
                <p className="mt-4 text-pm-gray-light max-w-2xl mx-auto">
                    Meet the twelve Sinners of Limbus Company, each with unique identities and E.G.O.
                </p>
            </div>

            {/* Sinners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SINNERS.map((sinner) => {
                    const egos = getEGOsBySinner(sinner.id);
                    const sRankIdentities = sinner.identities.filter(i => i.tier === 'S').length;

                    return (
                        <Link
                            key={sinner.id}
                            href={`/limbus-company/sinners/${sinner.id}`}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-6 hover:border-pm-red hover:bg-pm-gray-dark/50 transition-all group"
                        >
                            {/* Sinner Number */}
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-5xl font-serif font-bold text-pm-gold/20 group-hover:text-pm-gold/40 transition-colors">
                                    {String(sinner.number).padStart(2, '0')}
                                </span>
                                {sRankIdentities > 0 && (
                                    <span className="bg-pm-gold text-black text-xs font-bold px-2 py-1 rounded">
                                        {sRankIdentities} S-Tier
                                    </span>
                                )}
                            </div>

                            {/* Portrait Placeholder */}
                            <div className="w-20 h-20 mx-auto mb-4 bg-pm-gray-dark rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                                👤
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-serif font-bold text-white text-center group-hover:text-pm-red transition-colors">
                                {sinner.name}
                            </h3>
                            <p className="text-sm text-pm-gray-light text-center italic mt-1 line-clamp-2">
                                &ldquo;{sinner.quote}&rdquo;
                            </p>

                            {/* Stats */}
                            <div className="mt-4 flex justify-center gap-4 text-xs text-pm-gray-light">
                                <span>{sinner.identities.length} Identities</span>
                                <span>•</span>
                                <span>{egos.length} E.G.O.</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
