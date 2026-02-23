export type BlogCard = {
    id: number
    slug: string
    title: string
    subtitle: string
    excerpt: string
    tag: 'Technology' | 'Business' | 'Innovation'
    author: string
    date: string
    image: string // Cloudflare CDN URL
}

export const Blogs: BlogCard[] = [
    {
        id: 1,
        slug: 'central-data-team-often-becomes-blockers',
        title: 'Central Data Teams Often Become Blockers — And How to Fix It',
        subtitle:
            'Why traditional central data teams slow down analytics and how a decentralized approach like Data Mesh can unlock agility.',
        excerpt:
            'Central data teams often slow down analytics by creating dependencies and bottlenecks instead of enabling teams.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Feb 07, 2023',
        image:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
    },
    {
        id: 2,
        slug: 'redshift-to-snowflake-iceberg',
        title: '1.5 PB to 400 GB: Redshift to Snowflake + Apache Iceberg',
        subtitle:
            'How we migrated 1.5 petabytes from Redshift to Snowflake + Iceberg in 90 days, achieving a 73% storage reduction with zero data loss.',
        excerpt:
            'A data engineering team migrated 1.5 PB from Redshift to Snowflake + Iceberg in 90 days with 73% storage savings and zero data loss.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Feb 18, 2026',
        image:
            'https://blogs.cdatainsights.com/wp-content/uploads/2026/02/RedshiftToSnowflake.png',
    },
]
