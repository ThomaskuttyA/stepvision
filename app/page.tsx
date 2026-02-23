'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Truck, FileCheck, Package, Globe, Award, Clock } from 'lucide-react'
import ProductItemCard from '@/components/ProductItemCard'
import CTABanner from '@/components/CTABanner'
import { products } from '@/lib/products'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

const heroImages = [
    '/images/covers/heavy-equipment-machinery.jpg',
    '/images/covers/building-materials-hardware.jpg',
    '/images/covers/marine-equipment.jpg',
    '/images/covers/automotive-spare-parts.jpg',
    '/images/covers/electrical-electronics.jpg',
    '/images/covers/hotel-industry-supplies.jpg',
    '/images/covers/it-office-products.jpg',
    '/images/covers/stationery-general-supplies.jpg'
]

export default function HomePage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [activeCategory, setActiveCategory] = useState(products[0].slug)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            src={heroImages[currentImage]}
                            alt="Global Trade Background"
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-primary/60 z-10" />
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <Globe className="w-4 h-4 text-gold" />
                            <span className="text-white/90 text-sm font-medium">UAE-Based Export Specialists</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                            Your Trusted Gateway for{' '}
                            <span className="text-gold">Global Trade</span>
                            <br />from UAE to Africa
                        </h1>
                        <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
                            We supply industrial, commercial, and consumer products across 8 major categories — from building materials and heavy machinery to electronics and hospitality supplies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/products" className="btn-gold text-base px-8 py-4 shadow-xl">
                                Explore Our Products <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="btn-outline text-base px-8 py-4">
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
                    >
                        {[
                            { value: '100+', label: 'Product Categories' },
                            { value: '20+', label: 'African Markets' },
                            { value: '100%', label: 'Export Compliant' },
                            { value: '24h', label: 'Quote Response' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                                <div className="text-2xl font-bold text-gold">{stat.value}</div>
                                <div className="text-white/70 text-xs mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/60 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Trust Bar */}
            <section className="bg-primary py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        {[
                            { icon: <Globe className="w-6 h-6" />, title: 'UAE-Based Export Specialists', desc: 'Operating from UAE Free Zone with full export capabilities' },
                            { icon: <Truck className="w-6 h-6" />, title: 'Reliable Supply Chain to Africa', desc: 'Established logistics network across 20+ African countries' },
                            { icon: <Package className="w-6 h-6" />, title: 'Wide Range of Industrial Products', desc: 'Over 8 major categories covering all your sourcing needs' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-center gap-4 md:justify-center"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{item.title}</div>
                                    <div className="text-white/70 text-xs mt-0.5">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Stepvision</span>
                        <h2 className="section-title mt-2">Why Choose Us</h2>
                        <p className="section-subtitle mx-auto">
                            We combine deep market knowledge with reliable logistics to make your sourcing seamless.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Award className="w-8 h-8 text-primary" />,
                                title: 'Certified Products',
                                desc: 'All products meet international quality standards and certifications required for export.'
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-primary" />,
                                title: 'Competitive Pricing',
                                desc: 'Direct sourcing from manufacturers ensures you get the best prices in the market.'
                            },
                            {
                                icon: <FileCheck className="w-8 h-8 text-primary" />,
                                title: 'Export Documentation',
                                desc: 'We handle all export paperwork, customs clearance, and compliance documentation.'
                            },
                            {
                                icon: <Truck className="w-8 h-8 text-primary" />,
                                title: 'Freight Management',
                                desc: 'End-to-end freight coordination from UAE to your destination across Africa.'
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-light-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Products Grid with Tabs */}
            <section className="py-24 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">What We Supply</span>
                        <h2 className="text-4xl font-bold text-navy mt-2">Our Product Categories</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Explore our comprehensive range of quality products. Select a category below to see our diverse supply capabilities across Africa.
                        </p>
                    </motion.div>

                    {/* Modern Category Tabs */}
                    <div className="mb-16 flex justify-center">
                        <div className="inline-flex p-1 bg-gray-100 rounded-2xl overflow-x-auto no-scrollbar max-w-full">
                            <div className="flex gap-1 min-w-max">
                                {products.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => setActiveCategory(cat.slug)}
                                        className={`relative flex items-center gap-2 px-5 py-2 rounded-xl transition-all duration-300 text-sm font-bold whitespace-nowrap z-10 ${activeCategory === cat.slug
                                                ? 'text-white'
                                                : 'text-navy/60 hover:text-navy hover:bg-gray-100'
                                            }`}
                                    >
                                        <span className="text-lg">{cat.icon}</span>
                                        {cat.name}
                                        {activeCategory === cat.slug && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-navy rounded-xl -z-10 shadow-sm"
                                                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Category Content */}
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-16"
                            >
                                {products
                                    .filter((c) => c.slug === activeCategory)
                                    .map((category) => (
                                        <div key={category.slug} className="space-y-12">
                                            {category.subcategories.map((sub) => {
                                                const itemsWithImages = sub.items.filter((item) => item.image)
                                                if (itemsWithImages.length === 0) return null

                                                return (
                                                    <div key={sub.name} className="space-y-6">
                                                        <div className="flex items-center gap-4">
                                                            <div className="h-px bg-gray-200 flex-grow" />
                                                            <h4 className="text-xl font-bold text-navy/70 uppercase tracking-widest px-4">
                                                                {sub.name}
                                                            </h4>
                                                            <div className="h-px bg-gray-200 flex-grow" />
                                                        </div>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                                            {itemsWithImages.map((item, idx) => (
                                                                <ProductItemCard
                                                                    key={item.name}
                                                                    name={item.name}
                                                                    image={item.image}
                                                                    index={idx}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-light-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Simple Process</span>
                        <h2 className="section-title mt-2">How It Works</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-primary/20" />
                        {[
                            { step: '01', icon: <Package className="w-6 h-6" />, title: 'Browse & Inquire', desc: 'Browse our product categories and submit an inquiry with your requirements.' },
                            { step: '02', icon: <FileCheck className="w-6 h-6" />, title: 'Get a Quote', desc: 'Receive a detailed quotation within 24 hours with pricing and availability.' },
                            { step: '03', icon: <Shield className="w-6 h-6" />, title: 'Confirm & Pay', desc: 'Confirm your order and complete payment through secure channels.' },
                            { step: '04', icon: <Truck className="w-6 h-6" />, title: 'Delivery to Africa', desc: 'We handle export documentation and freight to your destination.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="text-center relative"
                            >
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                    {item.icon}
                                </div>
                                <div className="text-xs font-bold text-gold mb-1">{item.step}</div>
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <CTABanner
                title="Ready to source from UAE? Let's talk."
                subtitle="Get competitive pricing, reliable supply chain, and expert export documentation for your business."
                buttonText="Contact Us Today"
                buttonHref="/contact"
            />
        </div>
    )
}
