'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import InquiryForm from '@/components/InquiryForm'

export default function ContactPage() {
    return (
        <div className="pt-16 lg:pt-20">
            {/* Page Hero */}
            <section className="relative py-24 bg-navy overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary/40" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-gold font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto">
                            Ready to source from UAE? Send us your requirements and we&apos;ll respond within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-gray-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>

                                {/* Contact Cards */}
                                <div className="space-y-4">
                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy text-sm mb-1">Email Us</div>
                                            <a href="mailto:sales@stepvisioninternational.com" className="text-primary hover:underline text-sm break-all">
                                                sales@stepvisioninternational.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy text-sm mb-1">Call / WhatsApp</div>
                                            <a href="tel:+971568978100" className="text-primary hover:underline text-sm">+971 56 897 8100</a>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy text-sm mb-1">Location</div>
                                            <p className="text-gray-600 text-sm">Stepvision International Trading FZ LLC<br />UAE (Free Zone)</p>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-navy text-sm mb-1">Response Time</div>
                                            <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours, Monday to Saturday.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp CTA */}
                                <a
                                    href="https://wa.me/971568978100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center gap-3 bg-green-500 text-white rounded-xl p-4 hover:bg-green-600 transition-colors"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <div>
                                        <div className="font-semibold text-sm">Chat on WhatsApp</div>
                                        <div className="text-green-100 text-xs">Usually responds within 1 hour</div>
                                    </div>
                                </a>

                                {/* Map Placeholder */}
                                <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                                    <img
                                        src="https://placehold.co/500x250/EEF4FB/1A4C8B?text=UAE+Free+Zone+Location"
                                        alt="UAE Location Map"
                                        className="w-full"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Inquiry Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                                <h2 className="text-2xl font-bold text-navy mb-2">Send an Inquiry</h2>
                                <p className="text-gray-500 text-sm mb-8">Fill in the form below and our team will get back to you with a competitive quote.</p>
                                <InquiryForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
