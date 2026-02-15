import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from '@vercel/analytics/react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const runtime = 'edge';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isZh = locale === 'zh';

    return {
        metadataBase: new URL('https://projectmoonhub.site'),
        title: {
            default: isZh
                ? "Project Moon Hub - 脑叶公司·废墟图书馆·边狱公司攻略站"
                : "Project Moon Hub - Lobotomy Corp, Library of Ruina & Limbus Company Guide",
            template: "%s | Project Moon Hub",
        },
        description: isZh
            ? "Project Moon 全系列游戏攻略站。脑叶公司异想体数据库、废墟图书馆剧情解析、边狱公司AI配队工具与镜像地牢流派推荐。都市传说、角色攻略一站汇聚。"
            : "The ultimate Project Moon fan hub featuring Limbus Company AI team builder & tier list, Library of Ruina lore database, and Lobotomy Corporation abnormality guides. Explore The City now.",
        keywords: [
            "Project Moon",
            "Limbus Company",
            "Library of Ruina",
            "Lobotomy Corporation",
            isZh ? "边狱公司" : "The City",
            isZh ? "配队" : "tier list",
            isZh ? "攻略" : "team builder",
            isZh ? "指南" : "guide",
            isZh ? "镜像地牢" : "mirror dungeon",
            isZh ? "异想体" : "abnormality",
        ],
        authors: [{ name: "Project Moon Hub" }],
        creator: "Project Moon Hub",
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: '/en',
                zh: '/zh',
            },
        },
        openGraph: {
            type: "website",
            locale: locale === 'zh' ? 'zh_CN' : 'en_US',
            url: `https://projectmoonhub.site/${locale}`,
            siteName: "Project Moon Hub",
            title: isZh
                ? "Project Moon Hub - 脑叶公司·废墟图书馆·边狱公司攻略站"
                : "Project Moon Hub - Lobotomy Corp, Library of Ruina & Limbus Company Guide",
            description: isZh
                ? "脑叶公司异想体数据库、废墟图书馆剧情AI、边狱公司AI配队工具，Project Moon 粉丝终极攻略中心"
                : "Limbus Company AI team builder, Library of Ruina lore AI, Lobotomy Corp abnormality database - the ultimate Project Moon fan hub.",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Project Moon Hub - The City Awaits",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: isZh ? "Project Moon Hub - 攻略·配队·剧情" : "Project Moon Hub - Guides, Team Builder & Lore",
            description: isZh
                ? "脑叶公司·废墟图书馆·边狱公司 全系列攻略站"
                : "Your ultimate companion for Lobotomy Corp, Library of Ruina & Limbus Company",
            images: ["/og-image.png"],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: "d72a3c1ea66b7c98",
        },
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as 'en' | 'zh')) {
        notFound();
    }

    // Get messages for the current locale
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className="bg-pm-black text-pm-gray-light antialiased min-h-screen flex flex-col">
                <WebsiteJsonLd locale={locale} />
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
                <Analytics />
                <GoogleAnalytics />
            </body>
        </html>
    );
}
