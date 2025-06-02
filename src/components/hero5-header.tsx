'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    // { name: 'Blog', href: '/Blogs' },
    {
        name: 'Resources',
        href: '',
        subMenu: [
            // { title: 'Case Studies', href: '/case-studies', description: 'See how we drive success with real-world solutions.' },
            { title: 'Career', href: '/career', description: 'Grow your career with us.' },
            { title: 'Privacy Policies', href: '/privacy-policies', description: 'Learn how we protect your data.' },
            { title: 'Terms and Conditions', href: '/terms-and-conditions', description: 'Our service policies and guidelines.' },
            { title: 'Security', href: '/security-compliance-certifications', description: 'Our security and compliance standards.' },
        ],
    },
    {
        name: 'Services',
        href: '/services',
        subMenu: [
            { title: 'Data Engineering', href: '/services/data-engineering', description: 'Streamlined data pipelines and robust architecture.' },
            { title: 'Data Platform', href: '/services/data-platform', description: 'Scalable and centralized data solutions.' },
            { title: 'AI/ML with GenAI', href: '/services/ai-ml', description: 'Tailored AI solutions for your business.' },
            { title: 'Data Migration', href: '/services/data-migration', description: 'Data-driven marketing strategies.' },
            { title: 'Data and AI Strategy', href: '/services/data-and-ai-strategy', description: 'Expert guidance for Salesforce optimization.' },
            { title: 'Data Visualization / Reporting', href: '/services/data-visualization', description: 'Captivating visualizations and intuitive reporting.' },
        ],
    },
    {
        name: 'Industries',
        href: '/industries',
        subMenu: [
            { title: 'Real Estate', href: '/industries/real-estate', description: 'Data solutions for the real estate industry.' },
            { title: 'Health & Wellness', href: '/industries/health-wellness', description: 'Analytics for fitness, patient care, and operations.' },
            { title: 'Retail & Consumer Goods', href: '/industries/retail-consumer-goods', description: 'Customer analytics, supply chain, and pricing solutions.' },
            { title: 'Finance & Public Services', href: '/industries/finance-public-services', description: 'Fraud detection, smart city solutions, and compliance analytics.' },
            { title: 'Hospitality & SMBs', href: '/industries/hospitality-smbs', description: 'Data solutions for hospitality and small businesses.' },
        ],
    },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubMenuEnter = (name: string | null) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setOpenSubMenu(name)
    }

    const handleSubMenuLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenSubMenu(null)
        }, 300) // 300ms delay before closing the submenu
    }

    // Helper function to split menu items into columns
    const getMenuColumns = (items: any[], columns = 3) => {
        const result = []
        const itemsPerColumn = Math.ceil(items.length / columns)

        for (let i = 0; i < columns; i++) {
            const startIndex = i * itemsPerColumn
            const columnItems = items.slice(startIndex, startIndex + itemsPerColumn)
            if (columnItems.length > 0) {
                result.push(columnItems)
            }
        }

        return result
    }

    const handleMobileMenuClick = (e: React.MouseEvent, itemName: string) => {
        e.preventDefault()
        setOpenSubMenu(openSubMenu === itemName ? null : itemName)
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index} className="relative">
                                        {item.subMenu ? (
                                            <div className="relative">
                                                {/* Clickable parent menu item */}
                                                <Link
                                                    href={item.href}
                                                    onMouseEnter={() => handleSubMenuEnter(item.name)}
                                                    onMouseLeave={handleSubMenuLeave}
                                                    className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                                                    <span>{item.name}</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className={cn(
                                                            'transition-transform duration-200',
                                                            openSubMenu === item.name ? 'rotate-180' : 'rotate-0'
                                                        )}>
                                                        <path d="m6 9 6 6 6-6" />
                                                    </svg>
                                                </Link>

                                                {/* Wider submenu with multiple columns */}
                                                {openSubMenu === item.name && (
                                                    <div
                                                        onMouseEnter={() => handleSubMenuEnter(item.name)}
                                                        onMouseLeave={handleSubMenuLeave}
                                                        className="absolute left-1/2 top-full mt-2 w-full -translate-x-1/2 pt-4"
                                                        style={{ maxWidth: '80vw', minWidth: '700px' }}>
                                                        {/* Actual dropdown content */}
                                                        <div className="rounded-lg border bg-background p-6 shadow-lg">
                                                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                                                {getMenuColumns(item.subMenu).map((column, colIndex) => (
                                                                    <div key={colIndex} className="space-y-3">
                                                                        {column.map((subItem, subIndex) => (
                                                                            <Link
                                                                                key={subIndex}
                                                                                href={subItem.href}
                                                                                className="text-muted-foreground hover:text-accent-foreground block rounded p-2 transition-colors duration-150 hover:bg-muted">
                                                                                <span className="block text-white font-medium">{subItem.title}</span>
                                                                                <span className="block text-sm text-muted-foreground">{subItem.description}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="mt-4 border-t pt-4">
                                                                <Link
                                                                    href={item.href}
                                                                    className="text-sm font-medium text-blue-400 hover:underline"
                                                                >
                                                                    View all {item.name} →
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile menu and buttons */}
                        <div
                            className={cn(
                                "bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                                menuState ? "block" : "hidden lg:flex"
                            )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            {item.subMenu ? (
                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <Link
                                                            href={item.href}
                                                            className="text-muted-foreground hover:text-accent-foreground duration-150"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <button
                                                            onClick={(e) => handleMobileMenuClick(e, item.name)}
                                                            className="ml-2 p-1"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className={cn(
                                                                    'transition-transform duration-200',
                                                                    openSubMenu === item.name ? 'rotate-180' : 'rotate-0'
                                                                )}>
                                                                <path d="m6 9 6 6 6-6" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {openSubMenu === item.name && (
                                                        <div className="mt-2 pl-4">
                                                            <div className="grid grid-cols-1 gap-3">
                                                                {item.subMenu.map((subItem, subIndex) => (
                                                                    <Link
                                                                        key={subIndex}
                                                                        href={subItem.href}
                                                                        className="text-muted-foreground hover:text-accent-foreground block rounded p-2 duration-150">
                                                                        <span className="block font-medium">{subItem.title}</span>
                                                                        <span className="block text-sm text-muted-foreground">{subItem.description}</span>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="/Contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:flex' : 'hidden')}>
                                    <Link href="/Contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}