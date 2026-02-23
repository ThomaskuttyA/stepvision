'use client'

import { motion } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'
import { products } from '@/lib/products'

export default function ProductsPage() {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Page Hero */}
            <section className="relative py-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">What We Supply</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Products</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Browse our comprehensive range of industrial, commercial, and consumer products available for export from UAE to Africa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            We source and export across 8 major product categories. Click any category to explore the full range of products and subcategories available.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <ProductCard key={product.slug} {...product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Sourcing CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-4xl mb-4">🔍</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                            Can&apos;t find what you need?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We offer custom sourcing services. If you need a product not listed here, contact us and we&apos;ll find it for you from our network of UAE suppliers.
                        </p>
                        <a href="/contact" className="btn-primary text-base px-8 py-4">
                            Contact Us for Custom Sourcing
                        </a>
                    </motion.div>
                </div>
            </section>

            <CTABanner
                title="Ready to place an order?"
                subtitle="Get a competitive quote within 24 hours for any product category."
                buttonText="Get a Quote"
                buttonHref="/contact"
            />
        </div>
    )
}
