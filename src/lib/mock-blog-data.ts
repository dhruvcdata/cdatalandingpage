export const BLOG_DATA = {
    slug: 'central-data-team-often-becomes-blockers',
    title: 'Central Data Team Often Becomes Blockers',
    subtitle:
        'Why centralized data teams slow down analytics and how Data Mesh helps modernize data architecture.',
    category: 'DATA ENGINEERING',
    date: 'February 7, 2023',
    readingTime: '3 min read',
    author: {
        name: 'Nitin Jain',
        role: 'Data Engineer',
        avatar: 'https://i.pravatar.cc/100?img=65',
    },

    // Hero image kept unchanged
    heroImage:
        'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',

    tags: ['Data Mesh', 'Data Architecture', 'Analytics', 'Data Engineering'],

    content: [
        {
            type: 'paragraph',
            value:
                'I have been working as a Data Engineer for many years and have helped migrate, transform, and modernize data teams for many companies. But at the end of the day, the data team often ends up becoming the blocker and slows down stakeholders. To understand how to solve this, I recommend reading the book Data Mesh by O’Reilly to learn how to modernize data architecture.',
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
            value:
                'So, how do we solve this problem?',
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
            title: 'Designing Modern Data Pipelines at Scale',
            slug: '/modern-data-pipelines-at-scale',
        },
    ],
}
