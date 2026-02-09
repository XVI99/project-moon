import { NextRequest, NextResponse } from 'next/server';
import { CHARACTERS, FACTIONS, EVENTS, type LoreCharacter, type LoreFaction } from '@/lib/data/ruina/lore';

export const runtime = 'edge';

interface LoreChatRequest {
    question: string;
    game: 'library-of-ruina' | 'lobotomy-corp';
}

// Simple keyword-based answer generation (to be enhanced with AI later)
function generateAnswer(question: string): string {
    const q = question.toLowerCase();

    // Angela
    if (q.includes('angela') || q.includes('director') || q.includes('librarian')) {
        const angela = CHARACTERS.find(c => c.id === 'angela');
        return `**Angela** - ${angela?.title}

${angela?.description}

Angela was originally an AI created by Ayin to manage Lobotomy Corporation. After the events of L Corp (known as the "Day of Silence"), she was able to transform into a human form through the energy collected from the Abnormalities.

She established the Library with a mysterious goal in mind - to collect the "books" of all who enter, essentially absorbing their experiences and memories.

Her relationship with Roland is complex - initially manipulative, but evolving as the story progresses.

**Key Quotes:**
${angela?.quotes.map(q => `• "${q}"`).join('\n')}`;
    }

    // Roland / Black Silence
    if (q.includes('roland') || q.includes('black silence')) {
        const roland = CHARACTERS.find(c => c.id === 'roland');
        return `**Roland** - ${roland?.title}

${roland?.description}

Roland was once one of the most powerful Fixers in The City, known as "The Black Silence" - a Color that struck fear into even the most powerful organizations.

His past is marked by tragedy. He was married to Angelica, a woman from L Corp, but she was killed during the "Day of Silence" incident. This loss, combined with other tragedies, led him to his current broken state.

Now he serves as Angela's assistant in the Library, though his true motivations remain unclear for much of the story.

**The Color System:**
Colors are titles given to the strongest Grade 1 Fixers. Roland's title "Black Silence" represents his fighting style and reputation.`;
    }

    // Distortions
    if (q.includes('distortion')) {
        return `**Distortions** - The Twisted Ones

In The City, those who experience extreme emotional turmoil, despair, or obsession can undergo a transformation called "Distortion."

**How it works:**
• When someone's negative emotions reach a breaking point, they may begin to "Distort"
• The Ensemble often appears to guide or observe these transformations
• Distorted individuals gain immense power but lose their humanity
• The transformation reflects their inner struggles and traumas

**Notable Distortions:**
• **Philip** (The Crying Child) - Distorted after being failed by The City's justice system
• **The Pinocchio** - Ensemble member
• **Mountain of Smiling Bodies** - A manifestation of communal despair

Distortions are different from Abnormalities (which are more cosmic/conceptual entities) - they are humans who have transformed.`;
    }

    // Colors
    if (q.includes('color') || q.includes('fixer')) {
        return `**The Color System** - Elite Fixers

In The City, Fixers are mercenaries who take on various jobs. They are graded from Grade 9 (lowest) to Grade 1 (highest).

**Colors:**
The absolute elite among Grade 1 Fixers receive special titles called "Colors" based on their fighting style or reputation:

• **The Black Silence** (Roland) - Known for ending conflicts with absolute finality
• **The Purple Tear** - Member of the Seven Association, known for precise swordsmanship
• **The Red Mist** (Kali/Gebura) - The most violent and powerful Color in history
• **The Blue Reverberation** (Argalia) - Leader of a group seeking to create a "perfect instrument"

Colors are legendary figures in The City - their mere presence can change the outcome of conflicts. The Head itself has made it illegal for multiple Colors to gather.`;
    }

    // Library
    if (q.includes('library') && !q.includes('library of ruina')) {
        return `**The Library** - Angela's Domain

The Library is a mysterious building that appeared in The City after the fall of Lobotomy Corporation.

**Purpose:**
• It invites "guests" - individuals and groups from The City
• Visitors must participate in "receptions" - battles against the librarians
• Those who lose become "books" - their experiences and memories are absorbed
• The ultimate goal is to create a "Perfect Book"

**Structure:**
The Library is organized into floors, each managed by a patron:
• Floor of History (Malkuth)
• Floor of Technological Sciences (Yesod)
• Floor of Literature (Hod)
• Floor of Art (Netzach)
• Floor of Natural Sciences (Tiphereth)
• Floor of Language (Gebura)
• Floor of Social Sciences (Chesed)
• Floor of Philosophy (Binah)
• Floor of Religion (Hokma)

These patrons are the former Sephirot from Lobotomy Corporation.`;
    }

    // Factions
    if (q.includes('faction') || q.includes('organization') || q.includes('association')) {
        const factionInfo = FACTIONS.slice(0, 4).map(f =>
            `**${f.name}** (${f.tier})\n${f.description}`
        ).join('\n\n');

        return `**Major Factions in The City:**

${factionInfo}

The City's power structure is complex, with various organizations vying for control or survival. The Head maintains order through fear, while smaller groups struggle to carve out their existence.`;
    }

    // Default response
    return `Thank you for your question about Library of Ruina!

Based on your query, here's what I can tell you:

The City is a vast, dystopian metropolis where power determines everything. Library of Ruina takes place after the events of Lobotomy Corporation, following Angela and her Library as they collect "books" from The City's inhabitants.

Key concepts to understand:
• **The Library** - A mysterious building that invites guests and turns losers into "books"
• **The City** - A megacity divided by power structures (Wings, Claws, Fingers)
• **Distortions** - Humans transformed by extreme emotion
• **Fixers** - Mercenaries who take contracts; ranked Grade 9 to Grade 1

Would you like me to elaborate on any specific character, faction, or story element?`;
}

export async function POST(request: NextRequest) {
    try {
        const body: LoreChatRequest = await request.json();
        const { question, game } = body;

        if (!question) {
            return NextResponse.json(
                { error: 'Question is required' },
                { status: 400 }
            );
        }

        // Generate answer based on keywords
        const answer = generateAnswer(question);

        return NextResponse.json({
            answer,
            game,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Lore chat error:', error);
        return NextResponse.json(
            { error: 'Failed to process question' },
            { status: 500 }
        );
    }
}
