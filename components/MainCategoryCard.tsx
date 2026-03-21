'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface MainCategoryCardProps {
    name: string
    slug: string
    coverImage: string
    isActive: boolean
    onClick: () => void
    subcategoriesCount?: number
}

export default function MainCategoryCard({ name, slug, coverImage, isActive, onClick, subcategoriesCount }: MainCategoryCardProps) {
    return (
        <motion.div
            layout
            onClick={onClick}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.97 }}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 shadow-lg ${isActive
                    ? 'ring-4 ring-gold ring-offset-4 ring-offset-navy shadow-gold/20'
                    : 'hover:shadow-2xl'
                }`}
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                {coverImage ? (
                    <motion.img
                        src={coverImage}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-navy" />
                )}
                
                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-90 group-hover:opacity-100'}`} />
                <div className={`absolute inset-0 bg-gold/5 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
                <div className="space-y-4">
                    <h3 className="font-bold text-white text-xl md:text-2xl tracking-tight leading-tight">
                        {name.replace(/^\d+\)\s*/, '')}
                    </h3>
                </div>
                
                {/* Bottom Bar */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">
                        {subcategoriesCount || 0} Subcategories
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Explore</span>
                        <ArrowUpRight className="w-5 h-5 text-gold" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
