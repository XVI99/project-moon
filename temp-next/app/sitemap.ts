import { MetadataRoute } from 'next';

const BASE_URL = 'https://projectmoonhub.site';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'zh'];
    const routes = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/lobotomy-corp', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/library-of-ruina', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/limbus-company', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/limbus-company/sinners', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/limbus-company/egos', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/limbus-company/team-builder', priority: 0.85, changeFrequency: 'weekly' as const },
        { path: '/limbus-company/mirror-dungeon', priority: 0.8, changeFrequency: 'weekly' as const },
        { path: '/lobotomy-corp/abnormalities', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/lobotomy-corp/sephirahs', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/lobotomy-corp/tools', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/library-of-ruina/lore', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/library-of-ruina/lore-ai', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    return routes.flatMap((route) =>
        locales.map((locale) => ({
            url: `${BASE_URL}/${locale}${route.path === '/' ? '' : route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: {
                languages: Object.fromEntries(
                    locales.map((l) => [l, `${BASE_URL}/${l}${route.path === '/' ? '' : route.path}`])
                ),
            },
        }))
    );
}
