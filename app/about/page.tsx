'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Users, Globe, CheckCircle } from 'lucide-react'
import CTABanner from '@/components/CTABanner'
import { products } from '@/lib/products'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function AboutPage() {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Page Hero */}
            <section className="relative py-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">About Stepvision</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            A UAE-based export and general trading company connecting global suppliers with African markets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp}>
                            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">Bridging UAE & Africa Through Trade</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Stepvision International Trading FZ LLC is a UAE Free Zone company specializing in the export and supply of industrial, commercial, and consumer products to African markets. We serve as the trusted bridge between quality UAE-based suppliers and businesses across Africa.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                With deep expertise in export documentation, freight management, and supply chain logistics, we make international sourcing simple, reliable, and cost-effective for our clients. Whether you need a single shipment or an ongoing supply arrangement, we deliver with professionalism.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '8+', label: 'Product Categories' },
                                    { value: '20+', label: 'African Markets' },
                                    { value: '100%', label: 'Export Compliant' },
                                    { value: '24h', label: 'Quote Response' },
                                ].map(stat => (
                                    <div key={stat.label} className="bg-light-blue rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                        <div className="text-gray-600 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="https://placehold.co/600x500/EEF4FB/1A4C8B?text=UAE+to+Africa+Trade" alt="UAE to Africa Trade" className="rounded-2xl shadow-xl w-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div {...fadeUp}>
                        <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-white/90 text-xl leading-relaxed italic">
                            "To be the most trusted and reliable export partner for businesses in Africa, providing quality products from UAE with seamless logistics, competitive pricing, and exceptional service."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Export */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Range</span>
                        <h2 className="section-title mt-2">What We Export</h2>
                        <p className="section-subtitle mx-auto">Eight major product categories covering all your sourcing needs.</p>
                    </motion.div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                                <Link href={`/products/${product.slug}`}
                                    className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-primary/20 block">
                                    <div className="text-3xl mb-3">{product.icon}</div>
                                    <div className="font-semibold text-navy text-sm group-hover:text-primary transition-colors">{product.name}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
                        <h2 className="section-title mt-2">Why Work With Us</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Globe className="w-7 h-7 text-primary" />, title: 'UAE Free Zone Base', desc: 'Operating from UAE Free Zone gives us tax advantages and streamlined export processes.' },
                            { icon: <CheckCircle className="w-7 h-7 text-primary" />, title: 'Quality Assurance', desc: 'Every product is sourced from verified suppliers meeting international quality standards.' },
                            { icon: <Users className="w-7 h-7 text-primary" />, title: 'Dedicated Support', desc: 'Personal account managers ensure your orders are handled with care from start to finish.' },
                            { icon: <Eye className="w-7 h-7 text-primary" />, title: 'Full Transparency', desc: 'Real-time updates on your order status, shipment tracking, and documentation.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-14 h-14 bg-light-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Ready to start sourcing from UAE?"
                subtitle="Contact our team today and get a competitive quote within 24 hours."
                buttonText="Get in Touch"
                buttonHref="/contact"
            />
        </div>
    )
}
