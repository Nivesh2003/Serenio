import { Snail } from "lucide-react";
import Link from "next/link";
export default function Header() {
return (
    <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
        <div className="absolute inset-0 border-b border-primary">
            <header className="relative max-w-8xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/*logo*/}
                    <Link href='/' className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <Snail className="h-7 w-7 text-primary animate-pulse-gente"/>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
                            Serenio
                        </span>
                    </div>
                    </Link>
                    {/*nav*/}
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center space-x-1"></nav>
                    </div>
                </div>
            </header>
        </div>
    </div>
)
}