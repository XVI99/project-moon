import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ABNORMALITIES, RISK_COLORS, DAMAGE_COLORS, sortByRisk, type RiskLevel } from '@/lib/data/lobcorp/abnormalities';
import { ABNORMALITIES_ZH } from '@/lib/data/lobcorp/abnormalities_zh';

export default function AbnormalitiesPage() {
    const t = useTranslations('lobotomy.abnormalities');
    const commonT = useTranslations('lobotomy');
    const locale = useLocale();
    const abnormalitiesData = locale === 'zh' ? ABNORMALITIES_ZH : ABNORMALITIES;

    // Sort logic using the localized data
    // We need to reimplement sortByRisk because it expects the specific array type, 
    // but the structure is identical so we can just reuse the function or logic.
    // However, sortByRisk imports from english file. Let's look at its impl.
    // It uses getRiskLevelOrder. That function is generic on RiskLevel string.
    // The data objects are compatible.
    const sortedAbnormalities = sortByRisk(abnormalitiesData);

    // Group by risk level
    const abnormalitiesByRisk = abnormalitiesData.reduce((acc, abnormality) => {
        if (!acc[abnormality.riskLevel]) acc[abnormality.riskLevel] = [];
        acc[abnormality.riskLevel].push(abnormality);
        return acc;
    }, {} as Record<RiskLevel, typeof ABNORMALITIES>);

    const riskOrder: RiskLevel[] = ['ALEPH', 'WAW', 'HE', 'TETH', 'ZAYIN'];

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <Link
                    href="/lobotomy-corp"
                    className="text-pm-gray-light hover:text-pm-gold text-sm mb-4 inline-block"
                >
                    {commonT('back')}
                </Link>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">
                    👁️ {t('title')}
                </h1>
                <p className="mt-2 text-pm-gray-light max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-5 gap-2 max-w-2xl mx-auto mb-10">
                {riskOrder.map((risk) => {
                    const colors = RISK_COLORS[risk];
                    const count = abnormalitiesByRisk[risk]?.length || 0;
                    return (
                        <a
                            key={risk}
                            href={`#${risk.toLowerCase()}`}
                            className={`text-center p-3 rounded-lg border ${colors.border} bg-pm-gray-dark/30 hover:bg-pm-gray-dark/50 transition-all`}
                        >
                            <div className={`${colors.bg} w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white font-bold text-sm mb-1`}>
                                {count}
                            </div>
                            <span className={`text-xs ${colors.text} font-bold`}>{risk}</span>
                        </a>
                    );
                })}
            </div>

            {/* Warning */}
            <div className="max-w-4xl mx-auto mb-10 bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                <p className="text-red-400 text-sm text-center">
                    {t('classified')}
                </p>
            </div>

            {/* Abnormality Sections by Risk */}
            {riskOrder.map((risk) => {
                const abnormalities = abnormalitiesByRisk[risk];
                if (!abnormalities || abnormalities.length === 0) return null;

                const colors = RISK_COLORS[risk];

                return (
                    <section key={risk} id={risk.toLowerCase()} className="mb-12">
                        <h2 className={`text-2xl font-serif font-bold ${colors.text} mb-6 flex items-center gap-2`}>
                            <span className={`${colors.bg} w-8 h-8 rounded-full flex items-center justify-center text-white text-sm`}>
                                {risk[0]}
                            </span>
                            {t('riskLevel', { risk })} ({abnormalities.length})
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {abnormalities.map((abnormality) => {
                                const damageColors = DAMAGE_COLORS[abnormality.damageType];

                                return (
                                    <div
                                        key={abnormality.id}
                                        className={`bg-pm-gray-dark/30 border ${colors.border}/50 rounded-lg p-4 hover:border-opacity-100 transition-all`}
                                    >
                                        {/* Header */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="text-4xl">{abnormality.portrait}</div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`${colors.bg} text-white text-xs px-2 py-0.5 rounded font-bold`}>
                                                        {abnormality.riskLevel}
                                                    </span>
                                                    <span className="text-xs text-pm-gray-light">{abnormality.code}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white">{abnormality.name}</h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-pm-gray-light mb-3 italic">
                                            &ldquo;{abnormality.description}&rdquo;
                                        </p>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                                            <div className="bg-pm-black/30 rounded p-2">
                                                <span className="text-pm-gray-light">{t('maxPe')}</span>
                                                <span className="text-pm-gold float-right font-bold">{abnormality.maxEnergy}</span>
                                            </div>
                                            <div className={`${damageColors.bg} rounded p-2`}>
                                                <span className={damageColors.text}>{t('damage')}</span>
                                                <span className={`${damageColors.text} float-right font-bold`}>{abnormality.damageType}</span>
                                            </div>
                                        </div>

                                        {/* Work Preferences */}
                                        <div className="mb-3">
                                            <p className="text-xs text-pm-gray-light mb-1">{t('workPref')}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {Object.entries(abnormality.workPreference).map(([work, quality]) => (
                                                    <span
                                                        key={work}
                                                        className={`text-xs px-2 py-0.5 rounded ${quality === 'Best' ? 'bg-green-600/30 text-green-400' :
                                                            quality === 'Good' ? 'bg-blue-600/30 text-blue-400' :
                                                                quality === 'Normal' ? 'bg-gray-600/30 text-gray-400' :
                                                                    'bg-red-600/30 text-red-400'
                                                            }`}
                                                    >
                                                        {work}: {quality}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Special Notes */}
                                        {abnormality.specialNotes.length > 0 && (
                                            <div className="border-t border-pm-gray-dark pt-2">
                                                <p className="text-xs text-pm-red mb-1">{t('special')}</p>
                                                <ul className="text-xs text-pm-gray-light space-y-0.5">
                                                    {abnormality.specialNotes.slice(0, 2).map((note, i) => (
                                                        <li key={i}>• {note}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );
            })}

            {/* Add More CTA */}
            <section className="text-center mt-12 py-8 border-t border-pm-gray-dark">
                <p className="text-pm-gray-light mb-4">
                    {t('sample')}
                </p>
                <Link
                    href="/signup"
                    className="inline-block bg-pm-gold text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                >
                    {t('signUp')}
                </Link>
            </section>
        </div>
    );
}
