import type { Metadata } from 'next';
import Link from 'next/link';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';
import { useTranslations, useLocale } from 'next-intl';
import { SINNERS } from '@/lib/data/limbus/sinners';
import { SINNERS_ZH } from '@/lib/data/limbus/sinners_zh';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isZh = locale === 'zh';

    return {
        title: isZh
            ? '边狱公司配队工具 & Tier List 2026 - AI智能推荐'
            : 'Limbus Company Tier List & AI Team Builder 2026',
        description: isZh
            ? '边狱公司AI配队助手，为你的镜像地牢挑战推荐最优阵容。罪人人格评级、E.G.O.推荐、镜像地牢流派攻略，一站搞定。'
            : 'Build the best Mirror Dungeon teams with our AI-powered team builder. Tier lists for all Sinners, E.G.O recommendations, and comprehensive strategy guides.',
        keywords: isZh
            ? ['边狱公司配队', '边狱公司tier list', '镜像地牢攻略', '边狱公司最强阵容', '边狱公司人格推荐', '边狱公司ego']
            : ['limbus company tier list', 'limbus company team builder', 'mirror dungeon guide', 'limbus company best team', 'limbus company tier list 2026', 'limbus company sinner guide'],
        alternates: {
            canonical: `/${locale}/limbus-company`,
            languages: {
                en: '/en/limbus-company',
                zh: '/zh/limbus-company',
            },
        },
    };
}

export default function LimbusCompanyPage() {
    const t = useTranslations('limbus');
    const locale = useLocale();
    const sinnersData = locale === 'zh' ? SINNERS_ZH : SINNERS;

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    {t('title')}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    {t('subtitle')}
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
                        {t('teamBuilder.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('teamBuilder.description')}
                    </p>
                    <span className="mt-3 inline-block text-pm-gold text-xs font-bold px-2 py-1 bg-pm-gold/20 rounded">
                        {t('teamBuilder.new')}
                    </span>
                </Link>

                <Link
                    href="/limbus-company/sinners"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">👥</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('sinners.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('sinners.description')}
                    </p>
                </Link>

                <Link
                    href="/limbus-company/egos"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">👁️</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('egos.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('egos.description')}
                    </p>
                </Link>

                <Link
                    href="/limbus-company/mirror-dungeon"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold hover:scale-105 transition-all group"
                >
                    <div className="text-4xl mb-3">🪞</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('mirrorDungeon.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('mirrorDungeon.description')}
                    </p>
                </Link>
            </section>

            {/* Sinners Overview */}
            <section className="mt-16">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
                    {t('sinners.theTwelveSinners')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {sinnersData.map((sinner) => (
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
                        🎯 {t('buildDreamTeam')}
                    </h2>
                    <p className="text-pm-gray-light mb-6 max-w-2xl mx-auto">
                        {t('buildTeamDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/limbus-company/team-builder"
                            className="bg-pm-gold text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                        >
                            🎯 {t('openTeamBuilder')}
                        </Link>
                        <Link
                            href="/limbus-company/mirror-dungeon"
                            className="bg-pm-gray-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-pm-gray-dark/80 transition-all"
                        >
                            🪞 {t('mirrorDungeonGuide')}
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
