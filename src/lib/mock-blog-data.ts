export const BLOG_DATA = {
    slug: 'central-data-team-often-becomes-blockers',
    title: 'Central Data Teams Often Become Blockers — And How to Fix It',
    subtitle:
        'Why traditional central data teams slow down analytics and how a decentralized approach like Data Mesh can unlock agility.',
    category: 'DATA ENGINEERING',
    date: 'February 7, 2023',
    readingTime: '3 min read',
    author: {
        name: 'Nitin Jain',
        role: 'Data Engineer & Practitioner',
        avatar: 'https://i.pravatar.cc/100?img=65',
    },

    // 🔹 Background / Hero image
    heroImage:
        'https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149020364.jpg',

    tags: ['Data Architecture', 'Data Mesh', 'Decentralization', 'Analytics'],

    content: [
        {
            type: 'paragraph',
            value:
                'I have worked as a data engineer for many years helping organizations migrate, transform, and modernize their data platforms. One recurring challenge I’ve observed is how central data teams often end up slowing down analytics and BI initiatives instead of enabling them.',
        },

        {
            type: 'heading',
            value: 'The Problem with Centralized Data Teams',
        },

        {
            type: 'paragraph',
            value:
                'Traditional centralized data teams often do not deeply understand the business context, which leads to dependencies between engineers and analysts.',
        },

        {
            type: 'image',
            value:
                'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.18.24%20AM.png',
        },

        {
            type: 'paragraph',
            value:
                'This dependency creates bottlenecks, slows down decision-making, and leads to frustration across functional teams.',
        },

        {
            type: 'heading',
            value: 'Why This Model Breaks at Scale',
        },

        {
            type: 'image',
            value:
                'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/1755564459896.jpeg',
        },

        {
            type: 'paragraph',
            value:
                'As organizations grow, the central data team becomes a service bottleneck instead of a platform enabler.',
        },

        {
            type: 'heading',
            value: 'A Solution: Data Mesh',
        },

        {
            type: 'paragraph',
            value:
                'Data Mesh proposes decentralizing data ownership and aligning it with business domains.',
        },

        {
            type: 'image',
            value:
                'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.20.51%20AM.png',
        },

        {
            type: 'paragraph',
            value:
                'Each domain owns its data as a product while a central platform team enables tooling, governance, and standards.',
        },

        {
            type: 'image',
            value:
                'https://pub-99e59aea1e714d52bb61ed3ecd6a79a9.r2.dev/Blogs/Screenshot%202026-01-12%20at%2011.20.57%20AM.png',
        },
    ],

    faq: [
        {
            question: 'Why do centralized data teams become blockers?',
            answer:
                'They accumulate too many dependencies, lack business context, and become overwhelmed by ad-hoc analytics requests.',
        },
        {
            question: 'What is Data Mesh?',
            answer:
                'Data Mesh is a decentralized data architecture that distributes data ownership to domain teams and treats data as a product.',
        },
    ],

    relatedBlogs: [
        {
            title: 'Designing Modern Data Pipelines at Scale',
            slug: '/modern-data-pipelines-at-scale',
        },
    ],
}
