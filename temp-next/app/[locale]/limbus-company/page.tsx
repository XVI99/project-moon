import type { Metadata } from 'next';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Limbus Company Tier List & AI Team Builder 2026',
    description: 'Build the best Mirror Dungeon teams with our AI-powered team builder. Tier lists, Sinner guides, E.G.O recommendations - all in one place.',
    keywords: [
        'limbus company tier list',
        'limbus company team builder',
        'mirror dungeon guide',
        'limbus company best team',
        'limbus company tier list 2026',
        'limbus company sinner guide',
        'limbus company ego tier list',
    ],
};

// Sinners data - will be expanded with full data from Wiki scraper
const sinners = [
    { id: 'yi-sang', name: 'Yi Sang', affiliation: 'Molar Office' },
    { id: 'faust', name: 'Faust', affiliation: 'Molar Office' },
    { id: 'don-quixote', name: 'Don Quixote', affiliation: 'La Manchaland' },
    { id: 'ryoshu', name: 'Ryōshū', affiliation: 'Atelieryōshū' },
    { id: 'meursault', name: 'Meursault', affiliation: 'Unknown' },
    { id: 'hong-lu', name: 'Hong Lu', affiliation: 'Hong Family' },
    { id: 'heathcliff', name: 'Heathcliff', affiliation: 'Unknown' },
    { id: 'ishmael', name: 'Ishmael', affiliation: 'Unknown' },
    { id: 'rodion', name: 'Rodion', affiliation: 'Unknown' },
    { id: 'sinclair', name: 'Sinclair', affiliation: 'Unknown' },
    { id: 'outis', name: 'Outis', affiliation: 'Unknown' },
    { id: 'gregor', name: 'Gregor', affiliation: 'Unknown' },
];

export default function LimbusCompanyPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    Limbus Company
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    Lead the Sinners on a journey through The City in search of Golden Boughs
                </p>
            </section>

            {/* Quick Tools Navigation */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <Link
                    href="/limbus-company/team-builder"
                    className="bg-gradient-to-br from-pm-red/30 to-pm-gold/20 border border-pm-red/50 rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        AI Team Builder
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Build optimal teams with AI
                    </p>
                    <span className="mt-3 inline-block text-pm-gold text-xs font-bold px-2 py-1 bg-pm-gold/20 rounded">
                        NEW ✨
                    </span>
                </Link>

                <Link
                    href="/limbus-company/sinners"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">👥</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Sinner Database
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        All 12 Sinners & Identities
                    </p>
                </Link>

                <Link
                    href="/limbus-company/egos"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">👁️</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        E.G.O. Collection
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        All E.G.O. & Tier Rankings
                    </p>
                </Link>

                <Link
                    href="/limbus-company/mirror-dungeon"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">🪞</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Mirror Dungeon
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Guides & Build Strategies
                    </p>
                </Link>
            </section>

            {/* Sinners Overview */}
            <section className="mt-16">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
                    The Twelve Sinners
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {sinners.map((sinner) => (
                        <Link
                            key={sinner.id}
                            href={`/limbus-company/sinners/${sinner.id}`}
                            className="bg-pm-gray-dark/30 border border-pm-gray-dark rounded-lg p-4 text-center hover:border-pm-red transition-all group"
                        >
                            {/* Placeholder for sinner portrait */}
                            <div className="w-16 h-16 mx-auto mb-3 bg-pm-gray-dark rounded-full flex items-center justify-center text-2xl group-hover:animate-pulse-slow">
                                👤
                            </div>
                            <h4 className="font-bold text-white text-sm group-hover:text-pm-red transition-colors">
                                {sinner.name}
                            </h4>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Team Builder CTA */}
            <section className="mt-16 max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-pm-red/20 to-pm-gold/20 border border-pm-red/30 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-serif font-bold text-white mb-4">
                        🎯 Build Your Dream Team Now
                    </h2>
                    <p className="text-pm-gray-light mb-6 max-w-2xl mx-auto">
                        Our AI-powered team builder helps you create optimal Mirror Dungeon teams
                        based on your available identities and E.G.O. Get personalized recommendations
                        for any challenge!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/limbus-company/team-builder"
                            className="bg-pm-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                        >
                            🎯 Open Team Builder
                        </Link>
                        <Link
                            href="/limbus-company/mirror-dungeon"
                            className="bg-pm-gray-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-pm-gray-dark/80 transition-all"
                        >
                            🪞 Mirror Dungeon Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sidebar Ad Placeholder */}
            <section className="mt-16 flex justify-center">
                <AdPlaceholder position="content-bottom" />
            </section>
        </div>
    );
}
