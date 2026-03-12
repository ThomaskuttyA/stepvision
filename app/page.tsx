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
//dheh

const heroSlides = [
    {
        image: '/images/covers/global-trade.png',
        title: <>Your <span className="text-gold">Trusted Gateway</span> for Global Trade from <span className="text-gold">UAE to Africa</span></>,
        titleAlt: 'Your Trusted Gateway for Global Trade from UAE to Africa',
        description: 'Comprehensive supply chain solutions for industrial, commercial, and consumer products.'
    },
    {
        image: '/images/covers/combined-categories.png',
        title: <>Leading Supplier of <span className="text-gold">Building, Heavy Equipment</span>, Automotive & <span className="text-gold">Marine Products</span></>,
        titleAlt: 'Leading Supplier of Building, Heavy Equipment, Automotive & Marine Products',
        description: 'Your one-stop destination for high-quality industrial and engineering solutions.'
    },
    {
        image: '/images/covers/hotel-industry-supplies.jpg',
        title: <>One-stop solution for <span className="text-gold">Hotel supplies</span> and <span className="text-gold">Engineering Products</span></>,
        titleAlt: 'One-stop solution for Hotel supplies and Engineering Products',
        description: 'Premium quality equipment and supplies for hospitality and technical sectors.'
    },
    {
        image: '/images/covers/it-office-products.jpg',
        title: <>Modern <span className="text-gold">IT, Office</span> & <span className="text-gold">General Supplies</span></>,
        titleAlt: 'Modern IT, Office & General Supplies',
        description: 'Smart solutions and daily essentials for every business sector.'
    },
    {
        image: '/images/covers/global-trade.png',
        title: <>International <span className="text-gold">Logistics</span> from <span className="text-gold">UAE to Africa</span></>,
        titleAlt: 'International Logistics from UAE to Africa',
        description: 'Reliable and efficient shipping solutions connecting markets across continents.'
    },
    {
        image: '/images/covers/yacht-repair.png',
        title: <>Specialized <span className="text-gold">Yacht Repair</span> & <span className="text-gold">Marine Manufacturing</span></>,
        titleAlt: 'Specialized Yacht Repair & Marine Manufacturing',
        description: 'Expert maritime services and premium equipment for the yachting industry.'
    }
]

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [activeCategory, setActiveCategory] = useState(products[0].slug)

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
                            alt={heroSlides[currentSlide].titleAlt}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/50 z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl">
                                {heroSlides[currentSlide].title}
                            </h1>
                            <p className="text-white/90 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl">
                                {heroSlides[currentSlide].description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/products" className="btn-gold text-base px-10 py-4 shadow-2xl hover:scale-105 transition-transform rounded-xl">
                                    View Products <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/20 transition-all rounded-xl">
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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                        {[
                            { icon: <Clock className="w-6 h-6" />, title: '24/7 Customer Support', desc: 'Round-the-clock assistance' },
                            { icon: <Globe className="w-6 h-6" />, title: 'Global Shipping', desc: 'Reliable worldwide delivery' },
                            { icon: <Award className="w-6 h-6" />, title: 'Expert Consultation', desc: 'Professional technical advice' },
                            { icon: <Shield className="w-6 h-6" />, title: 'Quality Assured', desc: 'Certified premium products' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-center gap-4 justify-center"
                            >
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-sm leading-tight">{item.title}</div>
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
                        <div className="inline-flex p-1.5 bg-white/50 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm overflow-x-auto no-scrollbar max-w-full">
                            <div className="flex gap-1 min-w-max">
                                {products.map((cat) => (
                                    <motion.button
                                        key={cat.slug}
                                        onClick={() => setActiveCategory(cat.slug)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative flex items-center justify-center px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-semibold whitespace-nowrap z-10 ${activeCategory === cat.slug
                                            ? 'text-white'
                                            : 'text-navy/60 hover:text-navy hover:bg-gray-100/50'
                                            }`}
                                    >
                                        {cat.name}
                                        {activeCategory === cat.slug && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-navy rounded-xl -z-10 shadow-md"
                                                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                            />
                                        )}
                                    </motion.button>
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
