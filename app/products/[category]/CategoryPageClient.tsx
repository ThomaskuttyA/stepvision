'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/lib/products'
import ProductItemCard from '@/components/ProductItemCard'
import CTABanner from '@/components/CTABanner'

interface CategoryPageClientProps {
    product: Product
}

export default function CategoryPageClient({ product }: CategoryPageClientProps) {
    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="pt-16 lg:pt-20">
            {/* Page Hero */}
            <section className="relative py-32 bg-navy overflow-hidden">
                {product.coverImage ? (
                    <>
                        <img
                            src={product.coverImage}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    </>
                )}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Products
                    </Link>
                    <div className="max-w-3xl">
                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                        >
                            {product.name}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/80 text-lg md:text-xl leading-relaxed border-l-4 border-gold pl-6"
                        >
                            {product.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Subcategories Sections */}
            <section className="pt-24 pb-12 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {product.subcategories.map((sub, i) => (
                            <div key={sub.name} className="relative">
                                {/* Subcategory Header */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold text-2xl font-black shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-2 block">Category Section</span>
                                            <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tight">{sub.name}</h2>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-gray-400 text-sm font-medium italic">
                                            {sub.items.length} Products Available
                                        </p>
                                    </div>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                                    {sub.items.map((item, idx) => (
                                        <ProductItemCard
                                            key={item.name}
                                            name={item.name}
                                            image={item.image}
                                            description={item.description}
                                            index={idx}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Inquiry CTA */}
            <CTABanner 
                title={`Interested in ${product.name.replace(/^\d+\)\s*/, '')}?`}
                subtitle="Send us your requirements and we'll provide a competitive quote within 24 hours. We handle all export documentation and freight to your destination."
                buttonText="Get a Quote"
                buttonHref="/contact"
                variant="navy"
            />

            {/* Other Categories */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-navy mb-6">Explore Other Categories</h2>
                    <Link href="/products" className="btn-primary">
                        View All Products
                    </Link>
                </div>
            </section>
        </div>
    )
}
