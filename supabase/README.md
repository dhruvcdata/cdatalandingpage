# Lead persistence (Supabase)

Captured leads from `/api/subscribe`, `/api/lead-capture`, and `/api/contact-form`
are persisted to a Supabase Postgres table via the PostgREST HTTP API — plain
`fetch`, zero npm dependencies.

**Fail-open:** until the two env vars below are set, the site behaves exactly as
before — emails still send, the insert is skipped with a `console.warn`, and no
request ever fails because of Supabase.

## 5-minute setup

1. **Create a free Supabase project** at [supabase.com](https://supabase.com)
   (Free tier is plenty).
2. **Run the schema**: in the Supabase dashboard, open **SQL Editor → New query**,
   paste the contents of [`schema.sql`](./schema.sql), and click **Run**.
   It is idempotent — safe to re-run.
3. **Copy credentials** from **Project Settings → API**:
   - *Project URL* (e.g. `https://abcd1234.supabase.co`)
   - *service_role* key (under "Project API keys" — **not** the anon key)
4. **Set env vars** in Vercel (**Project → Settings → Environment Variables**)
   and in your local `.env`:

   ```
   SUPABASE_URL=https://<your-project-ref>.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=<service_role key>
   ```

5. **Redeploy** (Vercel only picks up env vars on a new deployment). Done.

The service_role key bypasses RLS and must stay server-side only. The table has
RLS enabled with no public policies, so the anon key can read/write nothing.

## What gets stored

| route               | kind        | source                  | extras                              |
| ------------------- | ----------- | ----------------------- | ----------------------------------- |
| `/api/subscribe`    | `subscribe` | `worldcup` or `blog`    | —                                   |
| `/api/lead-capture` | `lead`      | from request body       | name; company + resource in metadata |
| `/api/contact-form` | `contact`   | `contact`               | name, message; subject/phone in metadata |

Repeat signups upsert on `(email, source, kind)` instead of erroring.

## Example queries (SQL Editor)

All World Cup leads, newest first:

```sql
select email, kind, created_at
from leads
where source = 'worldcup'
order by created_at desc;
```

Leads per day, last 30 days:

```sql
select created_at::date as day, count(*) as leads
from leads
where created_at > now() - interval '30 days'
group by 1
order by 1 desc;
```
