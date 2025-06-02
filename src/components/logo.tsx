import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            className={cn(
                'h-10 w-auto object-contain sm:h-8 lg:h-12',
                className
            )}
            src='/whitelogo.png'
            alt="Company Logo"
        />
    )
}