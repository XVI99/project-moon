import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // List of supported locales
    locales: ['en', 'zh'],

    // Default locale
    defaultLocale: 'en',

    // Use prefix for all locales (including default)
    localePrefix: 'as-needed',
});

// Create navigation helpers that are locale-aware
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
