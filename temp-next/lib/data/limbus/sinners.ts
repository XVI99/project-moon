// Limbus Company Sinners Database
// This data will be expanded with wiki scraper later

export interface Identity {
    id: string;
    name: string;
    sinnerId: string;
    rarity: 1 | 2 | 3;
    affiliation: string;
    attackType: 'slash' | 'pierce' | 'blunt';
    defenseType: 'slash' | 'pierce' | 'blunt';
    sinAffinity: string[];
    tier: 'S' | 'A' | 'B' | 'C' | 'D';
    tags: string[];
}

export interface Sinner {
    id: string;
    name: string;
    number: number;
    quote: string;
    baseIdentity: string;
    identities: Identity[];
}

export const SINNERS: Sinner[] = [
    {
        id: 'yi-sang',
        name: 'Yi Sang',
        number: 1,
        quote: 'The wings that were once broken can no longer fly.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'yi-sang-lcb',
                name: 'LCB Sinner Yi Sang',
                sinnerId: 'yi-sang',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'slash',
                defenseType: 'slash',
                sinAffinity: ['gloom'],
                tier: 'C',
                tags: ['starter', 'gloom'],
            },
            {
                id: 'yi-sang-blade-lineage',
                name: 'Blade Lineage Salsu Yi Sang',
                sinnerId: 'yi-sang',
                rarity: 3,
                affiliation: 'Blade Lineage',
                attackType: 'slash',
                defenseType: 'slash',
                sinAffinity: ['gloom', 'lust'],
                tier: 'S',
                tags: ['blade', 'counter', 'gloom', 'dps'],
            },
            {
                id: 'yi-sang-efflux',
                name: 'Effloresced E.G.O::Spicebush Yi Sang',
                sinnerId: 'yi-sang',
                rarity: 3,
                affiliation: 'E.G.O',
                attackType: 'slash',
                defenseType: 'pierce',
                sinAffinity: ['gloom', 'wrath'],
                tier: 'A',
                tags: ['ego', 'aoe', 'gloom'],
            },
        ],
    },
    {
        id: 'faust',
        name: 'Faust',
        number: 2,
        quote: 'Knowledge is power, but power corrupts.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'faust-lcb',
                name: 'LCB Sinner Faust',
                sinnerId: 'faust',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'pierce',
                defenseType: 'pierce',
                sinAffinity: ['pride'],
                tier: 'C',
                tags: ['starter', 'pride'],
            },
            {
                id: 'faust-seven',
                name: 'Seven Association South Section 6 Faust',
                sinnerId: 'faust',
                rarity: 3,
                affiliation: 'Seven Association',
                attackType: 'pierce',
                defenseType: 'pierce',
                sinAffinity: ['pride', 'gluttony'],
                tier: 'S',
                tags: ['seven', 'rupture', 'support'],
            },
        ],
    },
    {
        id: 'don-quixote',
        name: 'Don Quixote',
        number: 3,
        quote: 'I am a knight! A true knight fights for justice!',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'don-lcb',
                name: 'LCB Sinner Don Quixote',
                sinnerId: 'don-quixote',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'pierce',
                defenseType: 'pierce',
                sinAffinity: ['lust'],
                tier: 'C',
                tags: ['starter', 'lust'],
            },
            {
                id: 'don-wcrp',
                name: 'W Corp. L3 Cleanup Agent Don Quixote',
                sinnerId: 'don-quixote',
                rarity: 3,
                affiliation: 'W Corp.',
                attackType: 'pierce',
                defenseType: 'pierce',
                sinAffinity: ['lust', 'pride'],
                tier: 'S',
                tags: ['charge', 'dps', 'self-damage'],
            },
        ],
    },
    {
        id: 'ryoshu',
        name: 'Ryōshū',
        number: 4,
        quote: 'Art is explosion... and so is battle.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'ryoshu-lcb',
                name: 'LCB Sinner Ryōshū',
                sinnerId: 'ryoshu',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'slash',
                defenseType: 'slash',
                sinAffinity: ['wrath'],
                tier: 'C',
                tags: ['starter', 'wrath'],
            },
        ],
    },
    {
        id: 'meursault',
        name: 'Meursault',
        number: 5,
        quote: 'I simply exist. Nothing more.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'meursault-lcb',
                name: 'LCB Sinner Meursault',
                sinnerId: 'meursault',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'blunt',
                defenseType: 'blunt',
                sinAffinity: ['sloth'],
                tier: 'C',
                tags: ['starter', 'sloth', 'tank'],
            },
        ],
    },
    {
        id: 'hong-lu',
        name: 'Hong Lu',
        number: 6,
        quote: 'Haha, this is getting interesting!',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'hong-lu-lcb',
                name: 'LCB Sinner Hong Lu',
                sinnerId: 'hong-lu',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'blunt',
                defenseType: 'slash',
                sinAffinity: ['gluttony'],
                tier: 'C',
                tags: ['starter', 'gluttony'],
            },
        ],
    },
    {
        id: 'heathcliff',
        name: 'Heathcliff',
        number: 7,
        quote: 'Revenge... it burns within me.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'heathcliff-lcb',
                name: 'LCB Sinner Heathcliff',
                sinnerId: 'heathcliff',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'blunt',
                defenseType: 'blunt',
                sinAffinity: ['wrath'],
                tier: 'C',
                tags: ['starter', 'wrath'],
            },
        ],
    },
    {
        id: 'ishmael',
        name: 'Ishmael',
        number: 8,
        quote: 'The sea calls to me... or is it vengeance?',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'ishmael-lcb',
                name: 'LCB Sinner Ishmael',
                sinnerId: 'ishmael',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'slash',
                defenseType: 'slash',
                sinAffinity: ['envy'],
                tier: 'C',
                tags: ['starter', 'envy'],
            },
        ],
    },
    {
        id: 'rodion',
        name: 'Rodion',
        number: 9,
        quote: 'I have to make amends... somehow.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'rodion-lcb',
                name: 'LCB Sinner Rodion',
                sinnerId: 'rodion',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'blunt',
                defenseType: 'blunt',
                sinAffinity: ['wrath'],
                tier: 'C',
                tags: ['starter', 'wrath'],
            },
        ],
    },
    {
        id: 'sinclair',
        name: 'Sinclair',
        number: 10,
        quote: 'I... I just want to help.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'sinclair-lcb',
                name: 'LCB Sinner Sinclair',
                sinnerId: 'sinclair',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'slash',
                defenseType: 'slash',
                sinAffinity: ['envy'],
                tier: 'C',
                tags: ['starter', 'envy'],
            },
        ],
    },
    {
        id: 'outis',
        name: 'Outis',
        number: 11,
        quote: 'Orders are orders. I follow them.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'outis-lcb',
                name: 'LCB Sinner Outis',
                sinnerId: 'outis',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'pierce',
                defenseType: 'pierce',
                sinAffinity: ['pride'],
                tier: 'C',
                tags: ['starter', 'pride'],
            },
        ],
    },
    {
        id: 'gregor',
        name: 'Gregor',
        number: 12,
        quote: 'Family... I must protect my family.',
        baseIdentity: 'LCB Sinner',
        identities: [
            {
                id: 'gregor-lcb',
                name: 'LCB Sinner Gregor',
                sinnerId: 'gregor',
                rarity: 1,
                affiliation: 'Limbus Company',
                attackType: 'blunt',
                defenseType: 'blunt',
                sinAffinity: ['gloom'],
                tier: 'C',
                tags: ['starter', 'gloom', 'tank'],
            },
        ],
    },
];

// Utility functions
export function getSinnerById(id: string): Sinner | undefined {
    return SINNERS.find(s => s.id === id);
}

export function getAllIdentities(): Identity[] {
    return SINNERS.flatMap(s => s.identities);
}

export function getIdentitiesBySinner(sinnerId: string): Identity[] {
    const sinner = getSinnerById(sinnerId);
    return sinner?.identities ?? [];
}

export function getIdentitiesByTier(tier: Identity['tier']): Identity[] {
    return getAllIdentities().filter(i => i.tier === tier);
}

export function getIdentitiesByAffinity(affinity: string): Identity[] {
    return getAllIdentities().filter(i => i.sinAffinity.includes(affinity));
}
