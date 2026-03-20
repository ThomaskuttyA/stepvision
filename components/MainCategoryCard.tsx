'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface MainCategoryCardProps {
    name: string
    slug: string
    icon: string
    coverImage: string
    isActive: boolean
    onClick: () => void
}

export default function MainCategoryCard({ name, slug, icon, coverImage, isActive, onClick }: MainCategoryCardProps) {
    return (
        <motion.div
            layout
            onClick={onClick}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.97 }}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl aspect-[4/3] border-2 transition-all duration-500 ${isActive
                    ? 'border-gold shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)]'
                    : 'border-white/10 hover:border-gold/50 shadow-xl'
                }`}
        >
            {/* Background Image with Enhanced Zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
                    />
                ) : (
                    <div className="w-full h-full bg-navy" />
                )}
                
                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gold/10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            </motion.div>

            {/* Premium Content Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 transform transition-all duration-500 group-hover:bg-white/15">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 ${isActive
                                    ? 'bg-gold text-navy rotate-12 scale-110'
                                    : 'bg-white/20 text-white group-hover:bg-gold group-hover:text-navy group-hover:-rotate-12'
                                }`}>
                                {icon}
                            </div>
                            <div>
                                <h3 className={`font-black text-white text-xl tracking-tight leading-tight transition-colors ${isActive ? 'text-gold' : 'group-hover:text-gold'
                                    }`}>
                                    {name}
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Explore Range</span>
                                    <div className={`h-[1px] bg-gold transition-all duration-500 origin-left ${isActive ? 'w-12' : 'w-0 group-hover:w-12'}`} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Interactive Arrow */}
                        <div className={`transition-all duration-500 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`}>
                            <ArrowUpRight className="w-6 h-6 text-gold" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Border Glow */}
            {isActive && (
                <motion.div
                    layoutId="active-glow-premium"
                    className="absolute inset-0 border-[3px] border-gold rounded-3xl z-20 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    )
}
