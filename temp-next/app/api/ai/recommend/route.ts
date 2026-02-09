import { NextRequest, NextResponse } from 'next/server';
import { getAllIdentities, type Identity } from '@/lib/data/limbus/sinners';
import { EGOS, type EGO } from '@/lib/data/limbus/egos';

export const runtime = 'edge';

interface TeamRecommendationRequest {
    ownedIdentities: string[];
    scenario: 'general' | 'mirror-hard' | 'boss';
    preferences?: {
        preferredAttackType?: 'slash' | 'pierce' | 'blunt' | 'balanced';
        preferredSin?: string;
    };
}

interface TeamRecommendation {
    team: Identity[];
    analysis: string;
    synergies: string[];
    suggestedEGOs: EGO[];
    score: number;
}

// Simple rule-based recommendation (will be enhanced with AI later)
function generateRecommendation(request: TeamRecommendationRequest): TeamRecommendation {
    const allIdentities = getAllIdentities();
    const owned = allIdentities.filter(i => request.ownedIdentities.includes(i.id));

    if (owned.length === 0) {
        return {
            team: [],
            analysis: 'No owned identities selected. Please mark which identities you own.',
            synergies: [],
            suggestedEGOs: [],
            score: 0,
        };
    }

    // Sort by tier (S > A > B > C > D)
    const tierOrder = { S: 0, A: 1, B: 2, C: 3, D: 4 };
    const sortedByTier = [...owned].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    // Select top 5, ensuring unique sinners
    const team: Identity[] = [];
    const usedSinners = new Set<string>();

    for (const identity of sortedByTier) {
        if (team.length >= 5) break;
        if (usedSinners.has(identity.sinnerId)) continue;

        team.push(identity);
        usedSinners.add(identity.sinnerId);
    }

    // Analyze team composition
    const attackTypes = { slash: 0, pierce: 0, blunt: 0 };
    const sinCounts: Record<string, number> = {};

    team.forEach(identity => {
        attackTypes[identity.attackType]++;
        identity.sinAffinity.forEach(sin => {
            sinCounts[sin] = (sinCounts[sin] || 0) + 1;
        });
    });

    // Find synergies
    const synergies: string[] = [];

    const dominantAttack = Object.entries(attackTypes).sort((a, b) => b[1] - a[1])[0];
    if (dominantAttack[1] >= 3) {
        synergies.push(`Strong ${dominantAttack[0]} focus (${dominantAttack[1]}/5)`);
    }

    const dominantSin = Object.entries(sinCounts).sort((a, b) => b[1] - a[1])[0];
    if (dominantSin && dominantSin[1] >= 3) {
        synergies.push(`${dominantSin[0].charAt(0).toUpperCase() + dominantSin[0].slice(1)} resonance (${dominantSin[1]} members)`);
    }

    // Check for S-tier count
    const sTierCount = team.filter(i => i.tier === 'S').length;
    if (sTierCount >= 3) {
        synergies.push(`Meta team with ${sTierCount} S-tier identities`);
    }

    // Suggest EGOs based on team composition
    const teamSinnerIds = team.map(i => i.sinnerId);
    const suggestedEGOs = EGOS
        .filter(ego => teamSinnerIds.includes(ego.sinnerId))
        .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier])
        .slice(0, 5);

    // Calculate score
    const tierScores = { S: 20, A: 15, B: 10, C: 5, D: 0 };
    const baseScore = team.reduce((sum, i) => sum + tierScores[i.tier], 0);
    const synergyBonus = synergies.length * 5;
    const score = Math.min(100, baseScore + synergyBonus);

    // Generate analysis
    let analysis = '';
    if (score >= 80) {
        analysis = 'Excellent team composition! This team has strong synergies and high-tier identities.';
    } else if (score >= 60) {
        analysis = 'Good team with solid fundamentals. Consider upgrading some lower-tier identities.';
    } else if (score >= 40) {
        analysis = 'Decent team for progression. Focus on acquiring higher-tier identities.';
    } else {
        analysis = 'Early game team. Keep grinding for better identities!';
    }

    if (request.scenario === 'mirror-hard') {
        analysis += ' For Hard Mirror Dungeon, prioritize survivability and consistent damage.';
    } else if (request.scenario === 'boss') {
        analysis += ' For boss fights, consider burst damage and status effects.';
    }

    return {
        team,
        analysis,
        synergies,
        suggestedEGOs,
        score,
    };
}

export async function POST(request: NextRequest) {
    try {
        const body: TeamRecommendationRequest = await request.json();

        // Validate request
        if (!body.ownedIdentities || !Array.isArray(body.ownedIdentities)) {
            return NextResponse.json(
                { error: 'ownedIdentities array is required' },
                { status: 400 }
            );
        }

        const recommendation = generateRecommendation(body);

        return NextResponse.json(recommendation);
    } catch (error) {
        console.error('Recommendation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate recommendation' },
            { status: 500 }
        );
    }
}
