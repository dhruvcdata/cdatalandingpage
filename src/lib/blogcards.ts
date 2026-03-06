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
    {
        id: 7,
        slug: 'scaling-data-engineering-consultancies',
        title: 'Scaling Data Engineering in Consultancies: Build, Partner, or Both?',
        subtitle:
            'Digital consultancies are racing to build data practices. Here\'s how to scale delivery without burning out your team or compromising quality.',
        excerpt:
            'How consultancies can scale data engineering delivery using a hybrid model of core teams and specialized partners.',
        tag: 'Business',
        author: 'Nitin Jain',
        date: 'Feb 26, 2026',
        image: '/scaling-data-consultancy.svg',
    },
    {
        id: 8,
        slug: 'regulatory-data-platform-canadian-fintechs',
        title: 'Building a Regulatory-Ready Data Platform for Canadian Fintechs',
        subtitle:
            'What OSFI, FINTRAC, and PIPEDA actually require from your data infrastructure — and how to build for compliance without slowing down product delivery.',
        excerpt:
            'A practical framework for building data platforms that satisfy Canadian financial regulators without becoming a bottleneck for product teams.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Feb 26, 2026',
        image: '/regulatory-data-platform-fintech.svg',
    },
    {
        id: 9,
        slug: 'dbt-airflow-at-scale',
        title: 'DBT + Airflow at Scale: What Breaks After 200 Models (and How to Fix It)',
        subtitle:
            'The patterns that work at 50 models collapse at 200+. Here is what production DBT + Airflow architectures actually look like at high-growth companies.',
        excerpt:
            'Production-tested patterns for scaling DBT and Airflow beyond 200 models — domain-scoped DAGs, test gates, incremental strategies, and warehouse isolation.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Feb 26, 2026',
        image: '/dbt-airflow-at-scale.svg',
    },
    {
        id: 10,
        slug: 'modern-data-lakehouse-iceberg-spark-glue',
        title: 'Building a Modern Data Lakehouse with Apache Iceberg, Spark, and AWS Glue',
        subtitle:
            'A practical guide to building a production data lakehouse — from raw ingestion to serving analytics — with architecture diagrams, code examples, and lessons from real deployments.',
        excerpt:
            'How to build a production lakehouse with Iceberg on S3, Spark for compute, and AWS Glue as the catalog — with code examples and deployment lessons.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 01, 2026',
        image: '/blog-diagrams/lakehouse-architecture.svg',
    },
    {
        id: 11,
        slug: 'real-time-vs-batch-data-pipelines',
        title: 'Real-Time vs Batch Pipelines: Architecture Patterns for Data Teams',
        subtitle:
            'When should you stream and when should you batch? A practical comparison with architecture diagrams, code examples, and a hybrid pattern that gives you both.',
        excerpt:
            'Streaming vs batch pipelines compared — with a hybrid Kafka-based pattern that gives data teams both real-time speed and batch accuracy.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 01, 2026',
        image: '/blog-diagrams/hybrid-pipeline-architecture.svg',
    },
    {
        id: 13,
        slug: 'esg-data-real-estate-certification',
        title: 'ESG in Real Estate: How Data Pipelines Power Green Building Certification and Compliance',
        subtitle:
            'Real estate portfolios face growing ESG mandates. Here is how modern data infrastructure turns sensor feeds, utility data, and tenant surveys into audit-ready certification evidence.',
        excerpt:
            'How data engineering teams build the pipelines behind LEED, GRESB, and ENERGY STAR certification for commercial real estate portfolios.',
        tag: 'Business',
        author: 'Nitin Jain',
        date: 'Mar 06, 2026',
        image: '/blog-diagrams/esg-data-sources.svg',
    },
    {
        id: 12,
        slug: 'data-pipeline-observability-silent-failures',
        title: 'Data Pipeline Observability: Catching Silent Failures Before Your Stakeholders Do',
        subtitle:
            'Your pipeline succeeded. Your dashboard is wrong. Here is how to build an observability layer that catches data quality issues before they reach production.',
        excerpt:
            'How to build quality gates and a three-layer observability stack that catches silent data pipeline failures before they reach stakeholders.',
        tag: 'Technology',
        author: 'Nitin Jain',
        date: 'Mar 01, 2026',
        image: '/blog-diagrams/observability-architecture.svg',
    },
]
