'use client'

import Link from 'next/link'
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { products } from '@/lib/products'

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm leading-tight">STEPVISION</div>
                                <div className="text-xs text-gold font-medium leading-tight">INTERNATIONAL TRADING</div>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Your trusted gateway for global trade from UAE to Africa. Supplying industrial, commercial, and consumer products.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://wa.me/971568978100" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:bg-green-500 transition-all text-white shadow-lg shadow-green-600/20 hover:scale-110">
                                <WhatsAppIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About Us' },
                                { href: '/products', label: 'All Products' },
                                { href: '/services/engineering', label: 'Engineering Services' },
                                { href: '/services/projects', label: 'Project Services' },
                                { href: '/contact', label: 'Contact Us' },
                            ].map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-1 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    {/* <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Products</h3>
                        <ul className="space-y-2">
                            {products.map(product => (
                                <li key={product.slug}>
                                    <Link href={`/products/${product.slug}`} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-1 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {product.name}
                                    </Link>
                                </li>
                            // ))}
                        </ul>
                    </div> */}

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">Stepvision International Trading FZ LLC<br /></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                                <a href="tel:+971568978100" className="text-gray-400 hover:text-gold transition-colors text-sm">+971 56 897 8100</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                                <a href="mailto:sales@stepvisioninternational.com" className="text-gray-400 hover:text-gold transition-colors text-sm break-all">
                                    sales@stepvisioninternational.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link href="/contact" className="btn-gold text-sm py-2.5 px-5">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Stepvision International Trading FZ LLC. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">UAE-Based Export Specialists | Supplying Africa</p>
                </div>
            </div>
        </footer>
    )
}
