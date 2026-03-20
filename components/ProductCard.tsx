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
}

export default function ProductCard({ slug, name, icon, description, coverImage, index = 0 }: ProductCardProps) {
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
                className="group relative block h-[380px] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-gold/50"
            >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0 bg-navy">
                    {coverImage ? (
                        <motion.img
                            src={coverImage}
                            alt={name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-navy/80" />
                    )}
                    
                    {/* Dynamic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay with Glassmorphism */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 transform transition-all duration-500 group-hover:bg-white/15 group-hover:-translate-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl mb-5 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                    <span className="transform transition-transform duration-500">{icon}</span>
                                </div>
                                <h3 className="font-bold text-white text-lg tracking-tight leading-tight group-hover:text-gold transition-colors">
                                    {name}
                                </h3>
                                <p className="text-white/60 text-xs mt-2 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {description}
                                </p>
                            </div>
                            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm self-start group-hover:bg-gold group-hover:text-navy transition-all duration-500 flex-shrink-0">
                                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-navy" />
                            </div>
                        </div>
                        
                        {/* Explore Label */}
                        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Explore Range</span>
                            <div className="h-[1px] bg-gold flex-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
