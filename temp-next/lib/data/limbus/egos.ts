// Limbus Company E.G.O. Database
// This data will be expanded with wiki scraper later

export interface EGO {
    id: string;
    name: string;
    sinnerId: string;
    sinnerName: string;
    grade: 'ZAYIN' | 'TETH' | 'HE' | 'WAW' | 'ALEPH';
    attackType: 'slash' | 'pierce' | 'blunt';
    sinCost: Record<string, number>;
    abnormality: string;
    tier: 'S' | 'A' | 'B' | 'C' | 'D';
    tags: string[];
}

export const EGOS: EGO[] = [
    // Yi Sang E.G.O.
    {
        id: 'yi-sang-crow-feather',
        name: '4th Match Flame',
        sinnerId: 'yi-sang',
        sinnerName: 'Yi Sang',
        grade: 'HE',
        attackType: 'slash',
        sinCost: { gloom: 3, sloth: 2 },
        abnormality: 'The Little Match Girl',
        tier: 'A',
        tags: ['burn', 'aoe'],
    },
    {
        id: 'yi-sang-sunshower',
        name: 'Sunshower',
        sinnerId: 'yi-sang',
        sinnerName: 'Yi Sang',
        grade: 'WAW',
        attackType: 'slash',
        sinCost: { gloom: 4, lust: 3, sloth: 2 },
        abnormality: 'Sunshower',
        tier: 'S',
        tags: ['gloom', 'tremor', 'utility'],
    },
    // Faust E.G.O.
    {
        id: 'faust-representation',
        name: 'Representation Emitter',
        sinnerId: 'faust',
        sinnerName: 'Faust',
        grade: 'TETH',
        attackType: 'pierce',
        sinCost: { pride: 2 },
        abnormality: 'Nothing There',
        tier: 'B',
        tags: ['rupture', 'support'],
    },
    {
        id: 'faust-fluid-sac',
        name: 'Fluid Sac',
        sinnerId: 'faust',
        sinnerName: 'Faust',
        grade: 'HE',
        attackType: 'blunt',
        sinCost: { gluttony: 3, sloth: 2 },
        abnormality: 'Melting Love',
        tier: 'A',
        tags: ['heal', 'utility'],
    },
    // Don Quixote E.G.O.
    {
        id: 'don-hurricane',
        name: 'La Sangre de Sancho',
        sinnerId: 'don-quixote',
        sinnerName: 'Don Quixote',
        grade: 'HE',
        attackType: 'pierce',
        sinCost: { lust: 3, wrath: 2 },
        abnormality: 'Bloodbath',
        tier: 'S',
        tags: ['bleed', 'dps'],
    },
    {
        id: 'don-lantern',
        name: 'Holiday',
        sinnerId: 'don-quixote',
        sinnerName: 'Don Quixote',
        grade: 'WAW',
        attackType: 'blunt',
        sinCost: { pride: 4, gloom: 3 },
        abnormality: 'Big and Will be Bad Wolf',
        tier: 'A',
        tags: ['aoe', 'charge'],
    },
    // Ryōshū E.G.O.
    {
        id: 'ryoshu-forest',
        name: 'Forest for the Flames',
        sinnerId: 'ryoshu',
        sinnerName: 'Ryōshū',
        grade: 'HE',
        attackType: 'slash',
        sinCost: { wrath: 3, gloom: 2 },
        abnormality: 'Scorched Girl',
        tier: 'S',
        tags: ['burn', 'dps'],
    },
    // Meursault E.G.O.
    {
        id: 'meursault-penitence',
        name: 'Penitence',
        sinnerId: 'meursault',
        sinnerName: 'Meursault',
        grade: 'HE',
        attackType: 'blunt',
        sinCost: { sloth: 3, gloom: 2 },
        abnormality: 'Punishing Bird',
        tier: 'A',
        tags: ['tank', 'counter'],
    },
    // Hong Lu E.G.O.
    {
        id: 'hong-lu-dimension',
        name: 'Dimension Shredder',
        sinnerId: 'hong-lu',
        sinnerName: 'Hong Lu',
        grade: 'HE',
        attackType: 'slash',
        sinCost: { gluttony: 3, pride: 2 },
        abnormality: 'Dimensional Refraction Variant',
        tier: 'A',
        tags: ['slash', 'dps'],
    },
    // Heathcliff E.G.O.
    {
        id: 'heathcliff-bodysack',
        name: 'Bodysack',
        sinnerId: 'heathcliff',
        sinnerName: 'Heathcliff',
        grade: 'TETH',
        attackType: 'blunt',
        sinCost: { wrath: 2, envy: 1 },
        abnormality: 'Schadenfreude',
        tier: 'B',
        tags: ['tank'],
    },
    // Ishmael E.G.O.
    {
        id: 'ishmael-blind-obsession',
        name: 'Blind Obsession',
        sinnerId: 'ishmael',
        sinnerName: 'Ishmael',
        grade: 'HE',
        attackType: 'pierce',
        sinCost: { envy: 3, wrath: 2 },
        abnormality: 'Schadenfreude',
        tier: 'A',
        tags: ['poise', 'dps'],
    },
    // Rodion E.G.O.
    {
        id: 'rodion-pursuance',
        name: 'Pursuance',
        sinnerId: 'rodion',
        sinnerName: 'Rodion',
        grade: 'HE',
        attackType: 'blunt',
        sinCost: { wrath: 3, lust: 2 },
        abnormality: 'Red Shoes',
        tier: 'A',
        tags: ['bleed', 'aoe'],
    },
    // Sinclair E.G.O.
    {
        id: 'sinclair-sunhaker',
        name: 'Sunshaker',
        sinnerId: 'sinclair',
        sinnerName: 'Sinclair',
        grade: 'HE',
        attackType: 'slash',
        sinCost: { envy: 3, sloth: 2 },
        abnormality: 'Funeral of the Dead Butterflies',
        tier: 'B',
        tags: ['tremor'],
    },
    // Outis E.G.O.
    {
        id: 'outis-magic-bullet',
        name: 'Magic Bullet',
        sinnerId: 'outis',
        sinnerName: 'Outis',
        grade: 'HE',
        attackType: 'pierce',
        sinCost: { pride: 3, gluttony: 2 },
        abnormality: "Der Freischütz",
        tier: 'A',
        tags: ['rupture', 'pierce'],
    },
    // Gregor E.G.O.
    {
        id: 'gregor-legerdemain',
        name: 'Legerdemain',
        sinnerId: 'gregor',
        sinnerName: 'Gregor',
        grade: 'TETH',
        attackType: 'blunt',
        sinCost: { gloom: 2, sloth: 1 },
        abnormality: 'Laetitia',
        tier: 'B',
        tags: ['tank', 'support'],
    },
];

// Utility functions
export function getEGOById(id: string): EGO | undefined {
    return EGOS.find(e => e.id === id);
}

export function getEGOsBySinner(sinnerId: string): EGO[] {
    return EGOS.filter(e => e.sinnerId === sinnerId);
}

export function getEGOsByGrade(grade: EGO['grade']): EGO[] {
    return EGOS.filter(e => e.grade === grade);
}

export function getEGOsByTier(tier: EGO['tier']): EGO[] {
    return EGOS.filter(e => e.tier === tier);
}

export const GRADE_COLORS: Record<EGO['grade'], string> = {
    ZAYIN: 'bg-teal-600',
    TETH: 'bg-yellow-600',
    HE: 'bg-orange-600',
    WAW: 'bg-purple-600',
    ALEPH: 'bg-red-600',
};

export const GRADE_ORDER: EGO['grade'][] = ['ALEPH', 'WAW', 'HE', 'TETH', 'ZAYIN'];
