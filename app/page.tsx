'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Truck, FileCheck, Package, Globe, Award, Clock } from 'lucide-react'
import { products } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}
//dheh

const heroSlides = [
    {
        image: '/images/covers/global-trade.jpeg',
        title: 'Your Trusted Gateway For Global Trade From UAE To Africa',
        description: 'We Supply Industrial , Commercial and consumer products from buiding materials and heavy machinery to electronic and hospitality supplies.'
    },
    {
        image: '/images/covers/combined-categories.png',
        title: 'Complete Engineering Infrastructure supply solutions',
        description: 'From Building Materials to heavy machineries -We power Construction, Marine, Industrial and Infrastructure projects'
    },
    {
        image: '/images/covers/hotel.png',
        title: 'Premium Hotel Industry Supplies',
        description: 'Everything You Need To Run A World-Class Hospitality Business.'
    },
    {
        image: '/images/covers/industrial-solutions.png',
        title: 'Genuine Automotive spare parts',
        description: 'Comprehensive range of high-quality components for all vehicle .'
    },
    {
        image: '/images/covers/yacht-repair.png',
        title: 'Advanced Marine & Offshore Equipment',
        description: 'Reliable Maritime Solutions for International shipping & offshore operations.'
    },
    {
        image: '/images/covers/ship.png',
        title: 'Seamless Export & Logistics Management ',
        description: 'Direct shipments from India & China '
    }
]

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Slider */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentSlide}
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-start"
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] max-w-4xl tracking-tight">
                                {heroSlides[currentSlide].title}
                            </h1>
                            <p className="text-white/90 text-xl sm:text-2xl mb-12 leading-relaxed max-w-2xl font-light">
                                {heroSlides[currentSlide].description}
                            </p>
                            <div className="flex flex-wrap gap-5">
                                <Link href="/products" className="bg-gold text-white text-lg px-12 py-5 shadow-2xl hover:bg-white hover:text-gold transition-all duration-300 rounded-xl font-bold flex items-center gap-3 group">
                                    View Products <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/contact" className="px-12 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white hover:text-navy transition-all duration-500 rounded-xl">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slider Controls */}
                <div className="absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all pointer-events-auto group"
                        aria-label="Previous slide"
                    >
                        <ArrowRight className="w-6 h-6 text-white rotate-180 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all pointer-events-auto group"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 bg-gold' : 'w-3 bg-white/30 hover:bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Trust Bar */}
            <section className="bg-primary py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        {[
                            { icon: <Globe className="w-6 h-6" />, title: 'UAE-Based Export Specialists', desc: 'Operating from UAE Free Zone with full export capabilities' },
                            { icon: <Truck className="w-6 h-6" />, title: 'Reliable Supply Chain to Africa', desc: 'Established logistics network across 20+ African countries' },
                            { icon: <Package className="w-6 h-6" />, title: 'Wide Range of Industrial Products', desc: 'Covering all your sourcing needs with premium quality' },
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
                                <div className="text-left">
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

            {/* Products Grid */}
            <section className="py-24 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">What We Supply</span>
                        <h2 className="text-4xl font-bold text-navy mt-2">Our Product Categories</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Explore our comprehensive range of quality products. Select a category below to see our diverse supply capabilities across Africa.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((cat, i) => (
                            <ProductCard
                                key={cat.slug}
                                slug={cat.slug}
                                name={cat.name}
                                icon={cat.icon}
                                coverImage={cat.coverImage}
                                description={cat.description}
                                subcategoriesCount={cat.subcategories.length}
                                index={i}
                            />
                        ))}
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
