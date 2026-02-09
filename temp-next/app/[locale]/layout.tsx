import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from '@vercel/analytics/react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
        title: {
            default: isZh
                ? "Project Moon Hub - 都市的入口"
                : "Project Moon Hub - Your Gateway to The City",
            template: "%s | Project Moon Hub",
        },
        description: isZh
            ? "深入探索脑叶公司、废墟图书馆和边狱公司的复杂世界。在这个终极粉丝中心探索都市的传说、角色和残酷现实。"
            : "Dive into the intricate worlds of Lobotomy Corporation, Library of Ruina, and Limbus Company. Explore the lore, characters, and grim realities of The City at the ultimate fan hub.",
        keywords: [
            "Project Moon",
            "Limbus Company",
            "Library of Ruina",
            "Lobotomy Corporation",
            isZh ? "边狱公司" : "The City",
            isZh ? "配队" : "tier list",
            isZh ? "攻略" : "team builder",
            isZh ? "指南" : "guide",
        ],
        authors: [{ name: "Project Moon Hub" }],
        creator: "Project Moon Hub",
        openGraph: {
            type: "website",
            locale: locale === 'zh' ? 'zh_CN' : 'en_US',
            url: "https://projectmoonhub.site",
            siteName: "Project Moon Hub",
            title: isZh ? "Project Moon Hub - 都市的入口" : "Project Moon Hub - Your Gateway to The City",
            description: isZh ? "脑叶公司、废墟图书馆和边狱公司终极粉丝中心" : "The ultimate fan hub for Lobotomy Corporation, Library of Ruina, and Limbus Company.",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Project Moon Hub",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Project Moon Hub",
            description: isZh ? "Project Moon 游戏终极粉丝中心" : "The ultimate fan hub for Project Moon games",
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
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}
