'use client'
import { Menu, Snail, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { SignInButton } from "./auth/Sign-in";
import { useState } from "react";
import { Button } from "./ui/button";
export default function Header() {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About Serenio', href: '/about' },
        { label: 'Features', href: '/features' }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false); //For the navbar toggle on small screens

return (
    <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
        <div className="absolute inset-0">
            <header className="relative max-w-8xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/*logo*/}
                    <Link href='/' className="flex items-center space-x-2 transition-opacity hover:opacity-80 ">
                    <Snail className="h-7 w-7 text-primary animate-pulse"/>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text hover:text-foreground">
                            Serenio
                        </span>
                    </div>
                    </Link>
                    {/*nav*/}
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                return(
                                    <Link 
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative-group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                                    </Link>
                                )
                            })}
                        </nav>
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <SignInButton />
                            <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? (<X className="h-5 w-5"/>):(<Menu className="h-5 w-5"/>)}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <div className="md:hidden border-t border-primary/10">
                    <nav className="flex flex-col space-y-1 py-4">
                        {navItems.map((item) => (
                            <Link 
                            key={item.href}
                            href={item.href}
                            className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-green-500 hover:bg-primary/5 rounded-md transition-colors"
                            onClick={()=>setIsMenuOpen(false)} //Close menu on link click
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    </div>
)
}