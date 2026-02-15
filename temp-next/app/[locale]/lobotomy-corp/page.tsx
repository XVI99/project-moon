import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isZh = locale === 'zh';

    return {
        title: isZh
            ? '脑叶公司攻略 - 异想体数据库 & Sephirah指南'
            : 'Lobotomy Corporation Guide - Abnormality Wiki & Strategy',
        description: isZh
            ? '脑叶公司完整攻略。异想体收容指南、工作调度策略、Sephirah核心抑制攻略，助你在都市最危险的工作场所生存下来。'
            : 'Complete Lobotomy Corporation guide with abnormality database, work scheduling strategies, and Sephirah core suppression walkthroughs. Survive The City\'s most dangerous workplace.',
        keywords: isZh
            ? ['脑叶公司攻略', '脑叶公司异想体', '脑叶公司wiki', '脑叶公司核心抑制', '脑叶公司工作指南']
            : ['lobotomy corporation guide', 'lobotomy corporation abnormalities', 'lobotomy corporation wiki', 'lobotomy corporation tips', 'lobotomy corporation strategy'],
        alternates: {
            canonical: `/${locale}/lobotomy-corp`,
            languages: {
                en: '/en/lobotomy-corp',
                zh: '/zh/lobotomy-corp',
            },
        },
    };
}

export default function LobotomyCorpPage() {
    const t = useTranslations('lobotomy');

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            {/* Hero */}
            <section className="text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white uppercase tracking-wider">
                    {t('hero.title')}
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pm-gray-light">
                    {t('hero.subtitle')}
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
                        {t('tools.abnormalities.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.abnormalities.desc')}
                    </p>
                </Link>

                <Link
                    href="/lobotomy-corp/sephirahs"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">🔮</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('tools.sephirahs.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.sephirahs.desc')}
                    </p>
                </Link>

                <Link
                    href="/lobotomy-corp/tools"
                    className="bg-pm-gray-dark/50 border border-pm-gray-dark rounded-lg p-6 text-center hover:border-pm-gold transition-all card-hover group"
                >
                    <div className="text-4xl mb-3">⚙️</div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-pm-gold transition-colors">
                        {t('tools.scheduler.title')}
                    </h3>
                    <p className="mt-2 text-sm text-pm-gray-light">
                        {t('tools.scheduler.desc')}
                    </p>
                    <span className="mt-4 inline-block text-pm-gold text-sm font-bold">
                        {t('tools.scheduler.cta')}
                    </span>
                </Link>
            </section>

            {/* The First Chapter Section */}
            <section className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-6">
                    {t('intro.title')}
                </h2>
                <div className="text-pm-gray-light leading-relaxed space-y-4">
                    <p>
                        {t('intro.p1')}
                    </p>
                    <p>
                        {t('intro.p2')}
                    </p>
                </div>
            </section>

            {/* Abnormality Risk Levels */}
            <section className="mt-16">
                <h2 className="text-3xl font-serif font-bold text-center text-white mb-8">
                    {t('riskLevels.title')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                    {[
                        { level: 'ZAYIN', color: 'bg-green-600', description: t('riskLevels.low') },
                        { level: 'TETH', color: 'bg-blue-500', description: t('riskLevels.moderate') },
                        { level: 'HE', color: 'bg-yellow-500', description: t('riskLevels.high') },
                        { level: 'WAW', color: 'bg-orange-500', description: t('riskLevels.veryHigh') },
                        { level: 'ALEPH', color: 'bg-red-600', description: t('riskLevels.extreme') },
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
                                {t('premium.title')}
                            </h3>
                            <p className="text-pm-gray-light mb-4">
                                {t('premium.desc')}
                            </p>
                            <Link
                                href="/subscribe"
                                className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                            >
                                {t('premium.button')}
                            </Link>
                        </div>
                    </div>

                    {/* Blurred background content */}
                    <div className="blur-sm">
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            {t('premium.blurredTitle')}
                        </h3>
                        <p className="text-pm-gray-light">
                            {t('premium.blurredDesc')}
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
