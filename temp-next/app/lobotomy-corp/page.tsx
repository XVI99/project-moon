import type { Metadata } from 'next';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata: Metadata = {
    title: 'Lobotomy Corporation Guide & Abnormality Wiki',
    description: 'Explore the world of Lobotomy Corporation. Complete abnormality guides, work schedules, and survival strategies for managing The City\'s most dangerous creatures.',
    keywords: [
        'lobotomy corporation guide',
        'lobotomy corporation abnormalities',
        'lobotomy corporation wiki',
        'lobotomy corporation tips',
        'lobotomy corporation work guide',
        'lobotomy corporation strategy',
    ],
};

export default function LobotomyCorpPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    Lobotomy Corporation
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    Manage the unmanageable in the world&apos;s most dangerous workplace
                </p>
            </section>

            {/* Quick Tools Navigation */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link
                    href="/lobotomy-corp/abnormalities"
                    className="bg-pm-red/20 border border-pm-red/50 rounded-lg p-6 text-center hover:border-pm-red hover:bg-pm-red/30 transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">👁️</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-red transition-colors">
                        Abnormality Database
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Complete guides for all abnormalities
                    </p>
                </Link>

                <Link
                    href="/lobotomy-corp/sephirahs"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🔮</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Sephirah Guides
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Department management strategies
                    </p>
                </Link>

                <Link
                    href="/lobotomy-corp/tools"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">⚙️</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        Work Scheduler
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        Plan your work rotations
                    </p>
                    <span className="mt-4 inline-block text-pm-gold text-sm font-bold">
                        Coming Soon →
                    </span>
                </Link>
            </section>

            {/* The First Chapter Section */}
            <section className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
                    The First Chapter
                </h2>
                <div className="text-pm-gray-light leading-relaxed space-y-4">
                    <p>
                        Lobotomy Corporation is the first installment in the Project Moon universe,
                        introducing players to the dark and twisted world of The City. As the manager
                        of a wing of the Lobotomy Corporation, your job is to contain and extract
                        energy from mysterious entities known as Abnormalities.
                    </p>
                    <p>
                        This monster management simulation challenges you to balance resource extraction
                        with employee safety - a nearly impossible task when your workforce faces
                        eldritch horrors daily. Every decision has consequences, and failure often
                        means losing employees to gruesome fates.
                    </p>
                </div>
            </section>

            {/* Abnormality Risk Levels */}
            <section className="mt-16">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
                    Abnormality Risk Levels
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                    {[
                        { level: 'ZAYIN', color: 'bg-green-600', description: 'Low Risk' },
                        { level: 'TETH', color: 'bg-blue-500', description: 'Moderate' },
                        { level: 'HE', color: 'bg-yellow-500', description: 'High Risk' },
                        { level: 'WAW', color: 'bg-orange-500', description: 'Very High' },
                        { level: 'ALEPH', color: 'bg-red-600', description: 'Extreme' },
                    ].map((risk) => (
                        <div
                            key={risk.level}
                            className="text-center p-4 bg-pm-gray-dark/50 rounded-lg border border-pm-gray-dark hover:border-pm-red transition-all"
                        >
                            <div className={`w-12 h-12 mx-auto mb-2 ${risk.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                                {risk.level[0]}
                            </div>
                            <h4 className="font-bold text-white">{risk.level}</h4>
                            <p className="text-sm text-pm-gray-light">{risk.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Premium Content Teaser */}
            <section className="mt-16 max-w-4xl mx-auto">
                <div className="bg-pm-gray-dark/30 border border-pm-red/30 rounded-lg p-8 text-center relative overflow-hidden">
                    {/* Locked content overlay */}
                    <div className="absolute inset-0 bg-pm-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 border-2 border-pm-red/50 rounded-full flex items-center justify-center animate-pulse">
                                <span className="text-pm-red text-2xl font-serif font-bold">?</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-white mb-2">
                                Premium Content
                            </h3>
                            <p className="text-pm-gray-light mb-4">
                                Detailed strategy guides available for Prime members
                            </p>
                            <Link
                                href="/subscribe"
                                className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                            >
                                Unlock Now
                            </Link>
                        </div>
                    </div>

                    {/* Blurred background content */}
                    <div className="blur-sm">
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            Advanced Abnormality Strategies
                        </h3>
                        <p className="text-pm-gray-light">
                            Complete walkthroughs for handling the most dangerous abnormalities...
                        </p>
                    </div>
                </div>
            </section>

            {/* Ad Placeholder */}
            <section className="mt-16 flex justify-center">
                <AdPlaceholder position="content-bottom" />
            </section>
        </div>
    );
}
