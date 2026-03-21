'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardProps {
    slug: string
    name: string
    icon: string
    description: string
    coverImage?: string
    index?: number
    subcategoriesCount?: number
}

export default function ProductCard({ slug, name, icon, description, coverImage, index = 0, subcategoriesCount }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Link
                href={`/products/${slug}`}
                className="group relative h-[400px] overflow-hidden rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
                {/* Background Image Container */}
                <div className="absolute inset-0">
                    {coverImage ? (
                        <motion.img
                            src={coverImage}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-navy/80" />
                    )}
                    {/* Bottom-heavy dark gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section Overlay */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
                    <div className="space-y-4">
                        <h3 className="font-bold text-white text-2xl md:text-3xl tracking-tight leading-tight">
                            {name.replace(/^\d+\)\s*/, '')}
                        </h3>
                        <p className="text-white/80 text-sm md:text-base line-clamp-2 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    
                    {/* Bottom Stats & Action Bar */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                        <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
                            {subcategoriesCount || 0} Subcategories
                        </span>
                        <div className="flex items-center gap-2 group/btn">
                            <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">Explore</span>
                            <ArrowUpRight className="w-5 h-5 text-gold group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
