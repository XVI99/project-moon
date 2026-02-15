'use client';

type JsonLdProps = {
    locale: string;
};

export function WebsiteJsonLd({ locale }: JsonLdProps) {
    const isZh = locale === 'zh';

    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Project Moon Hub',
        alternateName: isZh ? 'Project Moon 攻略站' : 'Project Moon Fan Hub',
        url: 'https://projectmoonhub.site',
        description: isZh
            ? 'Project Moon 全系列游戏攻略站。脑叶公司异想体数据库、废墟图书馆剧情解析、边狱公司AI配队工具与镜像地牢流派推荐。'
            : 'The ultimate Project Moon fan hub featuring Limbus Company AI team builder, Library of Ruina lore database, and Lobotomy Corporation guides.',
        inLanguage: [
            { '@type': 'Language', name: 'English', alternateName: 'en' },
            { '@type': 'Language', name: 'Chinese', alternateName: 'zh' },
        ],
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `https://projectmoonhub.site/${locale}/limbus-company/sinners?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    const gameListData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: isZh ? 'Project Moon 游戏系列' : 'Project Moon Game Series',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@type': 'VideoGame',
                    name: 'Lobotomy Corporation',
                    alternateName: '脑叶公司',
                    url: 'https://store.steampowered.com/app/568220/Lobotomy_Corporation__Monster_Management_Simulation/',
                    genre: ['Management Simulation', 'Horror'],
                    gamePlatform: 'PC',
                    publisher: { '@type': 'Organization', name: 'Project Moon' },
                },
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@type': 'VideoGame',
                    name: 'Library of Ruina',
                    alternateName: '废墟图书馆',
                    url: 'https://store.steampowered.com/app/1256670/Library_Of_Ruina/',
                    genre: ['Card Game', 'RPG'],
                    gamePlatform: 'PC',
                    publisher: { '@type': 'Organization', name: 'Project Moon' },
                },
            },
            {
                '@type': 'ListItem',
                position: 3,
                item: {
                    '@type': 'VideoGame',
                    name: 'Limbus Company',
                    alternateName: '边狱公司',
                    url: 'https://store.steampowered.com/app/1973530/Limbus_Company/',
                    genre: ['RPG', 'Turn-based'],
                    gamePlatform: ['PC', 'Mobile'],
                    publisher: { '@type': 'Organization', name: 'Project Moon' },
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gameListData) }}
            />
        </>
    );
}
