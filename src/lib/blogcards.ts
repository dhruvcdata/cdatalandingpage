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
    {
        id: 3,
        slug: 'snowflake-cost-optimization',
        title: 'The Enterprise Guide to Snowflake Cost Optimization: Proven Strategies to Cut Spend by 40–60%',
        subtitle:
            'How enterprise teams can dramatically reduce Snowflake costs through warehouse right-sizing, auto-suspend policies, resource monitors, and governance frameworks.',
        excerpt:
            'Proven strategies to reduce Snowflake spend by 40–60% through warehouse right-sizing, auto-suspend policies, and cost governance.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Feb 25, 2026',
        image:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
    },
    {
        id: 4,
        slug: 'redshift-to-snowflake-migration',
        title: 'The Complete Redshift to Snowflake Migration Playbook: A Phased Approach for Enterprise Teams',
        subtitle:
            'A battle-tested 5-phase framework for migrating from Amazon Redshift to Snowflake, covering schema conversion, data migration, validation, and cutover.',
        excerpt:
            'A 5-phase enterprise playbook for Redshift to Snowflake migration covering assessment, schema conversion, data migration, validation, and cutover.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 04, 2026',
        image:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
    },
    {
        id: 5,
        slug: 'apache-iceberg-snowflake',
        title: 'Apache Iceberg on Snowflake: A Decision Framework for Enterprise Data Teams',
        subtitle:
            'When to use managed vs external Iceberg tables, how Iceberg compares to Delta Lake, and a practical decision matrix for enterprise adoption.',
        excerpt:
            'A decision framework for Apache Iceberg on Snowflake: managed vs external tables, Iceberg vs Delta Lake, and multi-engine interoperability.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 11, 2026',
        image:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
    },
    {
        id: 6,
        slug: 'snowflake-enterprise-architecture',
        title: 'Snowflake Architecture for the Enterprise: Designing a Scalable, Cost-Efficient Data Platform',
        subtitle:
            'A comprehensive guide to designing enterprise Snowflake architectures with multi-warehouse strategies, bronze/silver/gold data layers, and security best practices.',
        excerpt:
            'How to design a scalable Snowflake architecture with multi-warehouse strategy, medallion data layers, data mesh principles, and enterprise security.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 18, 2026',
        image:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
    },
]
