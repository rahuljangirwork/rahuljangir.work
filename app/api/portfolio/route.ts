// app/api/portfolio/route.ts
import type { NextRequest } from 'next/server';
import { supabase } from '@/app/lib/supabase'; // your client, adjust path if needed

export async function POST(req: NextRequest) {
    try {
        const { flag, filter } = await req.json();

        const validFlags = ['profile', 'wakatime', 'status'];
        if (!validFlags.includes(flag)) {
            return new Response(
                JSON.stringify({ error: 'Invalid flag parameter' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Parse or default filter data
        let filterJson = {};
        if (filter) {
            if (typeof filter === 'string') {
                try {
                    filterJson = JSON.parse(filter);
                } catch {
                    return new Response(
                        JSON.stringify({ error: 'Invalid filter JSON' }),
                        { status: 400, headers: { 'Content-Type': 'application/json' } }
                    );
                }
            } else if (typeof filter === 'object') {
                filterJson = filter;
            } else {
                return new Response(
                    JSON.stringify({ error: 'Filter must be a JSON object or string' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }
        }

        // Call Supabase RPC to get portfolio data
        const { data, error } = await supabase.rpc('get_portfolio_data', {
            p_flag: flag,
            p_filter: filterJson,
        });

        if (error) {
            console.error('Supabase RPC error:', error);
            return new Response(
                JSON.stringify({ error: 'Database error', details: error.message }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        return new Response(
            JSON.stringify({ data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        console.error('Unexpected error:', err);
        return new Response(
            JSON.stringify({ error: 'Unexpected server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
