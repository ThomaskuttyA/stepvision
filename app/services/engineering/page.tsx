'use client'

import { motion } from 'framer-motion'
import { Wrench, Settings, Cpu, Building, Factory, Ship, CheckCircle, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
}

export default function EngineeringServicesPage() {
    const services = [
        { icon: <Wrench className="w-7 h-7 text-primary" />, title: 'Mechanical Engineering Supply', desc: 'Sourcing and supply of mechanical components, spare parts, and industrial machinery for engineering projects.' },
        { icon: <Cpu className="w-7 h-7 text-primary" />, title: 'Electrical & Instrumentation', desc: 'Complete electrical systems, instrumentation, control panels, and automation components.' },
        { icon: <Settings className="w-7 h-7 text-primary" />, title: 'Process Equipment', desc: 'Industrial process equipment including pumps, compressors, heat exchangers, and pressure vessels.' },
        { icon: <Building className="w-7 h-7 text-primary" />, title: 'Civil & Structural Materials', desc: 'Structural steel, concrete products, and civil engineering materials for large-scale projects.' },
        { icon: <Factory className="w-7 h-7 text-primary" />, title: 'Industrial Consumables', desc: 'Ongoing supply of industrial consumables, safety equipment, and maintenance materials.' },
        { icon: <Ship className="w-7 h-7 text-primary" />, title: 'Logistics & Freight', desc: 'End-to-end freight management from UAE to project sites across Africa.' },
    ]

    const processSteps = [
        { step: '01', title: 'Project Assessment', desc: 'We review your engineering project requirements and material specifications.' },
        { step: '02', title: 'Supplier Identification', desc: 'We identify the best UAE-based suppliers for your specific needs.' },
        { step: '03', title: 'Quotation & Approval', desc: 'Detailed quotation provided within 48 hours for your review and approval.' },
        { step: '04', title: 'Procurement & QC', desc: 'We procure materials and conduct quality checks before shipment.' },
        { step: '05', title: 'Export & Delivery', desc: 'Full export documentation and freight management to your project site.' },
    ]

    const industries = [
        'Oil & Gas', 'Construction', 'Mining', 'Manufacturing', 'Power Generation',
        'Water Treatment', 'Marine & Offshore', 'Agriculture'
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Engineering Services</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Comprehensive engineering supply solutions for industrial and infrastructure projects across Africa.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div {...fadeUp}>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Stepvision International provides specialized engineering supply services for industrial and infrastructure projects. We source, procure, and deliver engineering materials and equipment from UAE to project sites across Africa, handling all logistics and documentation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="section-title">What We Offer</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <h2 className="section-title">Our Process</h2>
                        <p className="section-subtitle mx-auto">A streamlined 5-step process from inquiry to delivery.</p>
                    </motion.div>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex items-start gap-5 bg-gray-bg rounded-xl p-5"
                            >
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                                    <p className="text-gray-500 text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16 bg-light-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeUp} className="text-center mb-10">
                        <h2 className="section-title">Industries We Serve</h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100"
                            >
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span className="text-navy font-medium text-sm">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Have an engineering project?"
                subtitle="Tell us your requirements and we'll source the right materials from UAE."
                buttonText="Discuss Your Project"
                buttonHref="/contact"
            />
        </div>
    )
}
