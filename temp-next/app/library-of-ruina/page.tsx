import type { Metadata } from 'next';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Library of Ruina Lore Explained + Deck Guide',
    description: 'Dive into the Library of Ruina, the second game in the Project Moon universe. Complete lore explanations, deck building guides, and AI-powered Q&A.',
    keywords: [
        'library of ruina lore',
        'library of ruina deck guide',
        'library of ruina explained',
        'library of ruina reception guide',
        'library of ruina best decks',
        'library of ruina story explained',
    ],
};

export default function LibraryOfRuinaPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    Library of Ruina
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    Collect the books of The City and uncover its deepest secrets
                </p>
            </section>

            {/* Quick Tools Navigation */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link
                    href="/library-of-ruina/lore-ai"
                    className="bg-pm-gold/20 border border-pm-gold/50 rounded-lg p-6 text-center hover:border-pm-gold hover:bg-pm-gold/30 transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Lore AI
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Ask questions about the story and lore
                    </p>
                    <span className="mt-4 inline-block text-pm-gold text-sm font-bold">
                        Coming Soon →
                    </span>
                </Link>

                <Link
                    href="/library-of-ruina/lore"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">📖</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Lore Database
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Complete world-building documentation
                    </p>
                </Link>

                <Link
                    href="/library-of-ruina/deck-builder"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🃏</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Deck Builder
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Build and share combat page decks
                    </p>
                </Link>
            </section>

            {/* Lore AI CTA */}
            <section className="mt-16 max-w-4xl mx-auto">
                <div className="bg-pm-gray-dark/30 border border-pm-gold/30 rounded-lg p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-serif font-bold text-white mb-4">
                                📚 Lore AI Assistant - Coming Soon
                            </h2>
                            <p className="text-pm-gray-light mb-6">
                                Have questions about the Library of Ruina&apos;s complex story?
                                Our AI-powered Lore Assistant will help you understand:
                            </p>
                            <ul className="text-pm-gray-light text-left space-y-2 mb-6">
                                <li>✓ Character backgrounds and relationships</li>
                                <li>✓ The meaning behind cryptic dialogue</li>
                                <li>✓ Connections to Lobotomy Corporation</li>
                                <li>✓ The City&apos;s factions and power structures</li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    disabled
                                    className="bg-pm-gray-dark text-pm-gray-light font-bold py-3 px-6 rounded-lg cursor-not-allowed opacity-60"
                                >
                                    ⏳ Under Development
                                </button>
                            </div>
                        </div>
                        <div className="w-48 h-48 bg-pm-gray-dark/50 rounded-lg flex items-center justify-center text-6xl">
                            🏛️
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Game */}
            <section className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
                    About Library of Ruina
                </h2>
                <div className="text-pm-gray-light leading-relaxed space-y-4">
                    <p>
                        Library of Ruina is the sequel to Lobotomy Corporation, continuing the story of
                        Angela and the mysterious Library that emerged after the events of the first game.
                        As the new director of the Library, you&apos;ll face guests from across The City in
                        dramatic card-based battles.
                    </p>
                    <p>
                        The game features deep deck-building mechanics, memorable characters from all corners
                        of The City, and a story that gradually unravels the complex lore of the Project Moon
                        universe.
                    </p>
                </div>
            </section>

            {/* Ad Placeholder */}
            <section className="mt-16 flex justify-center">
                <AdPlaceholder position="content-bottom" />
            </section>
        </div>
    );
}
