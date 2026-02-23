'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { products } from '@/lib/products'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services/engineering', label: 'Engineering Services' },
        { href: '/services/projects', label: 'Project Services' },
        { href: '/contact', label: 'Contact' },
    ]

    const isActive = (href: string) => pathname === href

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-navy text-sm leading-tight">STEPVISION</div>
                            <div className="text-xs text-gold font-medium leading-tight">INTERNATIONAL TRADING</div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.slice(0, 1).map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-light-blue' : 'text-gray-700 hover:text-primary hover:bg-light-blue'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/about"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary bg-light-blue' : 'text-gray-700 hover:text-primary hover:bg-light-blue'}`}
                        >
                            About Us
                        </Link>

                        {/* Products Dropdown */}
                        <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${pathname.startsWith('/products') ? 'text-primary bg-light-blue' : 'text-gray-700 hover:text-primary hover:bg-light-blue'}`}>
                                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                                    >
                                        <div className="px-3 py-2 border-b border-gray-100 mb-1">
                                            <Link href="/products" className="text-xs font-semibold text-primary uppercase tracking-wider hover:underline">
                                                View All Products →
                                            </Link>
                                        </div>
                                        {products.map(product => (
                                            <Link
                                                key={product.slug}
                                                href={`/products/${product.slug}`}
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-primary hover:bg-light-blue transition-colors"
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.slice(2).map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href) ? 'text-primary bg-light-blue' : 'text-gray-700 hover:text-primary hover:bg-light-blue'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link href="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2 px-5">
                            Get a Quote
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.slice(0, 1).map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${isActive(link.href) ? 'text-primary bg-light-blue' : 'text-gray-700 hover:bg-light-blue'}`}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/about" onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-sm font-medium ${isActive('/about') ? 'text-primary bg-light-blue' : 'text-gray-700 hover:bg-light-blue'}`}>
                                About Us
                            </Link>
                            <div>
                                <button onClick={() => setProductsOpen(!productsOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-light-blue">
                                    Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {productsOpen && (
                                    <div className="pl-4 mt-1 space-y-1">
                                        <Link href="/products" onClick={() => setIsOpen(false)}
                                            className="block px-4 py-2 text-sm text-primary font-medium hover:bg-light-blue rounded-lg">
                                            All Products
                                        </Link>
                                        {products.map(product => (
                                            <Link key={product.slug} href={`/products/${product.slug}`} onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-blue rounded-lg">
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {navLinks.slice(2).map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${isActive(link.href) ? 'text-primary bg-light-blue' : 'text-gray-700 hover:bg-light-blue'}`}>
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center">
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
