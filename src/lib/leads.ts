// Server-only module: persists captured leads to Supabase via the
// PostgREST HTTP API using the service_role key. Do NOT import from
// client components.
//
// Fail-open by design: if SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are
// missing, or the request fails for any reason, we log a warning and
// return { persisted: false }. This must NEVER throw or block the
// email flow.

export interface Lead {
    email: string
    source?: string
    kind?: string
    name?: string
    message?: string
    metadata?: Record<string, unknown>
}

export interface SaveLeadResult {
    persisted: boolean
}

export async function saveLead(lead: Lead): Promise<SaveLeadResult> {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !key) {
        console.warn(
            'saveLead: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set; lead not persisted.'
        )
        return { persisted: false }
    }

    try {
        // on_conflict must name the unique-constraint columns explicitly:
        // without it PostgREST resolves merge-duplicates on the primary key
        // (id, never sent), so repeat signups would 409 instead of upserting.
        const res = await fetch(`${url}/rest/v1/leads?on_conflict=email,source,kind`, {
            method: 'POST',
            headers: {
                apikey: key,
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
                // merge-duplicates upserts on the (email, source, kind)
                // unique constraint instead of erroring on repeat signups.
                Prefer: 'resolution=merge-duplicates,return=minimal',
            },
            body: JSON.stringify({
                // Normalize so case/whitespace variants hit the same
                // unique-constraint row.
                email: lead.email.trim().toLowerCase(),
                source: lead.source ?? 'blog',
                kind: lead.kind ?? 'subscribe',
                name: lead.name ?? null,
                message: lead.message ?? null,
                metadata: lead.metadata ?? null,
            }),
        })

        if (!res.ok) {
            const detail = await res.text().catch(() => '')
            console.warn(
                `saveLead: Supabase responded ${res.status}; lead not persisted. ${detail}`
            )
            return { persisted: false }
        }

        return { persisted: true }
    } catch (error) {
        console.warn('saveLead: failed to reach Supabase; lead not persisted.', error)
        return { persisted: false }
    }
}
