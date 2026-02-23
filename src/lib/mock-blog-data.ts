export type BlogContentBlock =
    | { type: 'paragraph'; value: string }
    | { type: 'heading'; value: string }
    | { type: 'image'; value: string }

export type BlogData = {
    slug: string
    title: string
    subtitle: string
    category: string
    date: string
    readingTime: string
    author: {
        name: string
        role: string
        avatar: string
    }
    heroImage: string
    tags: string[]
    content: BlogContentBlock[]
    faq: { question: string; answer: string }[]
    relatedBlogs: { title: string; slug: string }[]
}

export const BLOG_DATA_MAP: Record<string, BlogData> = {
    'central-data-team-often-becomes-blockers': {
        slug: 'central-data-team-often-becomes-blockers',
        title: 'Central Data Team Often Becomes Blockers',
        subtitle:
            'Why centralized data teams slow down analytics and how Data Mesh helps modernize data architecture.',
        category: 'DATA ENGINEERING',
        date: 'February 7, 2023',
        readingTime: '3 min read',
        author: {
            name: 'Nitin Jain',
            role: 'Founder, CDataInsights',
            avatar: '/whitelogo.png',
        },
        heroImage:
            'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',
        tags: ['Data Mesh', 'Data Architecture', 'Analytics', 'Data Engineering'],
        content: [
            {
                type: 'paragraph',
                value:
                    'I have been working as a Data Engineer for many years and have helped migrate, transform, and modernize data teams for many companies. But at the end of the day, the data team often ends up becoming the blocker and slows down stakeholders. To understand how to solve this, I recommend reading the book Data Mesh by O\u2019Reilly to learn how to modernize data architecture.',
            },
            {
                type: 'paragraph',
                value:
                    'Data Engineering teams often do not understand the business well enough to implement the BI layer or perform analytics. As a result, engineers become dependent on analysts, and analysts become dependent on engineers to bring data. At the same time, data analytics teams want to perform analytics quickly instead of waiting for data engineering work, which creates dependencies and delays.',
            },
            {
                type: 'heading',
                value: 'Central Data Team Dependency',
            },
            {
                type: 'image',
                value:
                    'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.18.24%E2%80%AFAM.png',
            },
            {
                type: 'paragraph',
                value: 'So, how do we solve this problem?',
            },
            {
                type: 'paragraph',
                value:
                    'Using Data Mesh as a data architecture promotes decentralized data ownership and aligns technology and business through a product-centric approach. It addresses the challenges of traditional data architecture models, which often result in data silos, lack of data governance, and slow decision-making due to centralized data ownership.',
            },
            {
                type: 'paragraph',
                value:
                    'In a Data Mesh architecture, data ownership is decentralized, with each product team owning its own data. This enables faster decision-making, more efficient data management, improved data quality, and easier data access. The architecture is based on domain-driven design, event-driven architecture, and microservices, and it encourages collaboration between teams.',
            },
            {
                type: 'heading',
                value: 'Data Mesh Pillars',
            },
            {
                type: 'image',
                value:
                    'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.20.51%E2%80%AFAM.png',
            },
            {
                type: 'paragraph',
                value:
                    'Data Ownership: Decentralize the ownership of analytical data to business domains closest to the data.',
            },
            {
                type: 'paragraph',
                value:
                    'Data as a Product: Domain-oriented data is shared as a product directly with data users, following guidelines that make it shareable and reusable.',
            },
            {
                type: 'paragraph',
                value:
                    'Self-serve Data Platform: The data core team empowers domain cross-functional teams to share and consume data without dependency by providing a self-serve data platform.',
            },
            {
                type: 'paragraph',
                value:
                    'Federated Governance: This model works on federated decision-making and accountability, with a team composed of domain representatives, data platform teams, and subject matter experts.',
            },
            {
                type: 'heading',
                value: 'What Is Data Mesh?',
            },
            {
                type: 'image',
                value:
                    'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.20.57%E2%80%AFAM.png',
            },
            {
                type: 'paragraph',
                value:
                    'Data Mesh is a decentralized approach to sharing, accessing, and managing analytical data in complex and large-scale environments. It enables domain teams to perform cross-platform analytics without being dependent on data engineers.',
            },
            {
                type: 'paragraph',
                value:
                    'Domain teams ingest operational data and build analytical data models as data products for their own analysis. They may also publish these data products with data contracts to serve the needs of other domains.',
            },
            {
                type: 'paragraph',
                value:
                    'Domain teams agree on global policies such as interoperability, security, and documentation through federated governance. A domain-agnostic self-serve data platform enables teams to discover, understand, and use data products effectively. An enabling team guides domains on modeling analytical data, using the platform, and maintaining interoperable data products.',
            },
        ],
        faq: [
            {
                question: 'Why does a central data team become a blocker?',
                answer:
                    'Because centralized ownership creates dependencies between engineers and analysts, leading to delays, bottlenecks, and slower decision-making.',
            },
            {
                question: 'How does Data Mesh help?',
                answer:
                    'Data Mesh decentralizes data ownership, aligns data with business domains, and enables teams to build and consume data products independently.',
            },
        ],
        relatedBlogs: [
            {
                title: '1.5 PB to 400 GB: Redshift to Snowflake + Apache Iceberg',
                slug: '/Blogs/redshift-to-snowflake-iceberg',
            },
        ],
    },

    'redshift-to-snowflake-iceberg': {
        slug: 'redshift-to-snowflake-iceberg',
        title: '1.5 PB to 400 GB: Redshift to Snowflake + Apache Iceberg',
        subtitle:
            'How we migrated 1.5 petabytes from Redshift to Snowflake + Iceberg in 90 days, achieving a 73% storage reduction with zero data loss.',
        category: 'DATA ENGINEERING',
        date: 'February 18, 2026',
        readingTime: '4 min read',
        author: {
            name: 'Nitin Jain',
            role: 'Founder, CDataInsights',
            avatar: '/whitelogo.png',
        },
        heroImage:
            'https://blogs.cdatainsights.com/wp-content/uploads/2026/02/RedshiftToSnowflake.png',
        tags: ['Snowflake', 'Iceberg', 'Migration', 'Data Engineering', 'Redshift'],
        content: [
            {
                type: 'paragraph',
                value:
                    'A data engineering team successfully migrated 1.5 petabytes from Amazon Redshift to a modern Snowflake and Apache Iceberg stack in 90 days, achieving a 73% storage reduction to approximately 400 GB.',
            },
            {
                type: 'heading',
                value: 'Key Challenges Addressed',
            },
            {
                type: 'paragraph',
                value:
                    'The client faced three critical issues: high operational costs at massive scale, vendor lock-in with Redshift\u2019s proprietary format, and significant engineering overhead managing cluster infrastructure. The largest single table reached 169 TB, presenting a high-risk migration component.',
            },
            {
                type: 'heading',
                value: 'Architecture & Technologies',
            },
            {
                type: 'paragraph',
                value:
                    'The solution leveraged Snowflake for compute and Apache Iceberg as an open table format on S3, with Python extraction pipelines converting data to compressed Parquet format using Zstd compression.',
            },
            {
                type: 'paragraph',
                value:
                    'This combination provided open table format compatibility across multiple engines, efficient columnar storage with high compression ratios, separation of compute and storage for cost optimization, and schema evolution and time-travel capabilities via Iceberg.',
            },
            {
                type: 'heading',
                value: 'Migration Phases',
            },
            {
                type: 'heading',
                value: 'Phase 1: Data Audit (Weeks 1\u20132)',
            },
            {
                type: 'paragraph',
                value:
                    'Complete data audit identifying compression inefficiencies and redundant records. This initial assessment revealed significant opportunities for storage optimization through proper encoding and deduplication.',
            },
            {
                type: 'heading',
                value: 'Phase 2: Pipeline Development (Weeks 3\u201310)',
            },
            {
                type: 'paragraph',
                value:
                    'Automated pipeline development with parallelized ingestion and row-level validation for the 169 TB table. Key engineering decisions included parallel extraction splitting large tables into manageable chunks, incremental validation with row-level checksums to ensure data integrity, Zstd compression for optimal balance between compression ratio and speed, and Parquet format for columnar storage enabling efficient analytical queries.',
            },
            {
                type: 'heading',
                value: 'Phase 3: Cutover (Weeks 11\u201312)',
            },
            {
                type: 'paragraph',
                value:
                    'Parallel system operation with identical query validation before cutover. Both systems ran simultaneously, with automated comparison of query results to ensure consistency.',
            },
            {
                type: 'heading',
                value: 'Outcomes',
            },
            {
                type: 'paragraph',
                value:
                    'Storage reduced 73% through compression and data deduplication. Zero data loss and zero unplanned downtime. The platform is now vendor-neutral with Iceberg\u2019s open format, with improved query performance on analytical workloads and significantly reduced operational complexity.',
            },
            {
                type: 'heading',
                value: 'Key Takeaway',
            },
            {
                type: 'paragraph',
                value:
                    'The migration demonstrated that even at petabyte scale, a well-planned transition to modern open formats can deliver dramatic cost savings while simultaneously improving performance and eliminating vendor lock-in. The key was thorough upfront analysis, automated validation pipelines, and a phased approach that minimized risk at every step.',
            },
        ],
        faq: [
            {
                question: 'How long did the migration take?',
                answer:
                    'The entire migration from Redshift to Snowflake + Apache Iceberg was completed in 90 days, divided into three phases: data audit, pipeline development, and cutover.',
            },
            {
                question: 'How was data integrity ensured during migration?',
                answer:
                    'Row-level checksums and automated query comparison between both systems running in parallel ensured zero data loss throughout the migration.',
            },
        ],
        relatedBlogs: [
            {
                title: 'Central Data Team Often Becomes Blockers',
                slug: '/Blogs/central-data-team-often-becomes-blockers',
            },
        ],
    },
}
