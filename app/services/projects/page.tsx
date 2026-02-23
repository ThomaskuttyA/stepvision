'use client'

import { motion } from 'framer-motion'
import { Building, Zap, Droplets, Wifi, Factory, Ship, CheckCircle, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function ProjectServicesPage() {
    const offerings = [
        { icon: <Building className="w-7 h-7 text-primary" />, title: 'Infrastructure Projects', desc: 'Supply of materials for roads, bridges, ports, and public infrastructure development.' },
        { icon: <Zap className="w-7 h-7 text-primary" />, title: 'Power & Energy Projects', desc: 'Equipment and materials for power plants, solar farms, and electrical distribution projects.' },
        { icon: <Droplets className="w-7 h-7 text-primary" />, title: 'Water & Sanitation', desc: 'Pipes, pumps, treatment equipment, and materials for water infrastructure projects.' },
        { icon: <Wifi className="w-7 h-7 text-primary" />, title: 'Telecoms & IT Projects', desc: 'Networking equipment, cables, and IT infrastructure for telecoms deployments.' },
        { icon: <Factory className="w-7 h-7 text-primary" />, title: 'Industrial Facilities', desc: 'Complete supply solutions for factories, warehouses, and industrial facility construction.' },
        { icon: <Ship className="w-7 h-7 text-primary" />, title: 'Marine & Port Projects', desc: 'Marine equipment, dock materials, and port infrastructure supplies.' },
    ]

    const projectTypes = [
        'Government Infrastructure', 'Private Sector Development', 'NGO & Aid Projects',
        'Mining Operations', 'Agricultural Development', 'Hospitality & Tourism',
        'Healthcare Facilities', 'Educational Institutions'
    ]

    const timeline = [
        { phase: 'Phase 1', title: 'Project Brief', desc: 'Submit your project brief with scope, timeline, and material requirements.' },
        { phase: 'Phase 2', title: 'Needs Analysis', desc: 'Our team analyzes requirements and develops a comprehensive supply plan.' },
        { phase: 'Phase 3', title: 'Supplier Network', desc: 'We leverage our UAE supplier network to source the best materials at competitive prices.' },
        { phase: 'Phase 4', title: 'Procurement', desc: 'Materials are procured, quality-checked, and prepared for export.' },
        { phase: 'Phase 5', title: 'Logistics', desc: 'Full freight management, export documentation, and delivery to project site.' },
        { phase: 'Phase 6', title: 'Ongoing Support', desc: 'Continued supply support throughout the project lifecycle.' },
    ]

    const whyStepvision = [
        'Single point of contact for all project materials',
        'Competitive pricing through direct manufacturer relationships',
        'Full export documentation and customs clearance',
        'Flexible payment terms for project clients',
        'Dedicated project manager for large orders',
        'Proven track record in African markets',
    ]

    return (
        <div className="pt-16 lg:pt-20">
            {/* Hero */}
            <section className="relative py-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Project Services</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            End-to-end material supply solutions for large-scale projects across Africa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="section-title">What We Offer</h2>
                        <p className="section-subtitle mx-auto">Comprehensive project supply solutions across all major sectors.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offerings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Types */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="section-title">Project Types We Support</h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {projectTypes.map((type, i) => (
                            <motion.div
                                key={type}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="flex items-center gap-2 bg-light-blue rounded-full px-5 py-2.5 border border-primary/10"
                            >
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-navy font-medium text-sm">{type}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="section-title">Our Project Process</h2>
                        <p className="section-subtitle mx-auto">A structured 6-phase approach to project supply management.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                            >
                                <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{item.phase}</div>
                                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Stepvision */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Stepvision for Your Project?</h2>
                            <p className="text-white/80 mb-8 leading-relaxed">
                                We understand the unique challenges of sourcing materials for large-scale projects in Africa. Our experience, supplier network, and logistics expertise make us the ideal partner.
                            </p>
                            <ul className="space-y-3">
                                {whyStepvision.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.07 }}
                                        className="flex items-center gap-3 text-white/90"
                                    >
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src="https://placehold.co/500x400/1A1A2E/E8A020?text=Project+Supply+Solutions" alt="Project Services" className="rounded-2xl shadow-2xl w-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Have a project to discuss?"
                subtitle="Share your project requirements and we'll develop a comprehensive supply plan."
                buttonText="Start a Conversation"
                buttonHref="/contact"
                variant="navy"
            />
        </div>
    )
}
