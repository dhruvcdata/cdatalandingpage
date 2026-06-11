-- Leads table for cdatainsights.com
--
-- How to run: open your Supabase project -> SQL Editor -> New query,
-- paste this whole file, and click Run. Safe to re-run (idempotent).
--
-- RLS is enabled with NO public policies: the anon key can do nothing.
-- The app writes via the service_role key (server-side only), which
-- bypasses RLS.

create table if not exists leads (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    source text not null default 'blog',
    kind text not null default 'subscribe',
    name text,
    message text,
    metadata jsonb,
    created_at timestamptz not null default now(),
    unique (email, source, kind)
);

alter table leads enable row level security;
-- Intentionally no policies: public (anon) access is fully blocked.
