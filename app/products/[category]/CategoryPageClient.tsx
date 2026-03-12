'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronRight, Send } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'
import { Product } from '@/lib/products'

interface CategoryPageClientProps {
    product: Product
}

export default function CategoryPageClient({ product }: CategoryPageClientProps) {
    console.log('CategoryPageClient rendering for:', product?.name);
    if (!product) {
        console.error('Product is missing in CategoryPageClient');
        return <div>Error: Product not found</div>;
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
                        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40" />
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    </>
                )}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to All Products
                    </Link>
                    <div className="mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.name}</h1>
                        <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{product.description}</p>
                    </div>
                </div>
            </section>

            {/* Subcategories */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">Product Range</h2>
                        <p className="text-gray-600">Browse our full range of {product.name.toLowerCase()} available for export.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {product.subcategories.map((sub, i) => (
                            <div
                                key={sub.name}
                                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="font-bold text-navy text-lg mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-gold rounded-full" />
                                    {sub.name}
                                </h3>
                                <ul className="space-y-3">
                                    {sub.items.map(item => (
                                        <li key={item.name} className="flex items-start gap-3">
                                            {item.image ? (
                                                <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                                                    <ChevronRight className="w-4 h-4 text-primary opacity-50" />
                                                </div>
                                            )}
                                            <div className="pt-1">
                                                <p className="text-gray-700 font-medium text-sm leading-tight">{item.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{item.description || "Available for export"}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Inquiry CTA + Form */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="bg-primary p-10 text-white flex flex-col justify-center">
                                <Send className="w-10 h-10 text-gold mb-4" />
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Interested in {product.name}?
                                </h2>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    Send us your requirements and we&apos;ll provide a competitive quote within 24 hours. We handle all export documentation and freight to your destination.
                                </p>
                                <ul className="space-y-2">
                                    {['Competitive pricing', 'Export documentation handled', 'Freight to Africa', '24h quote response'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-white/90 text-sm">
                                            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 lg:p-10">
                                <h3 className="text-xl font-bold text-navy mb-6">Send an Inquiry</h3>
                                <InquiryForm defaultCategory={product.slug} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
