'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { products } from '@/lib/products'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
    fullName: string
    companyName: string
    country: string
    email: string
    phone: string
    category: string
    message: string
}

const countries = [
    "Nigeria", "Ghana", "Kenya", "Ethiopia", "Tanzania", "Uganda", "South Africa",
    "Egypt", "Morocco", "Algeria", "Angola", "Mozambique", "Zambia", "Zimbabwe",
    "Senegal", "Ivory Coast", "Cameroon", "Rwanda", "Sudan", "Somalia",
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
    "Other"
]

interface InquiryFormProps {
    defaultCategory?: string
}

export default function InquiryForm({ defaultCategory = '' }: InquiryFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        defaultValues: { category: defaultCategory }
    })

    const onSubmit = async (data: FormData) => {
        setStatus('loading')
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form submitted:', data)
            setStatus('success')
            reset()
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50/50 backdrop-blur-sm border border-green-100 rounded-3xl p-12 text-center"
            >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                    <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-navy mb-4">Inquiry Received</h3>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for your interest. An export specialist will review your requirements and respond within 24 hours.
                </p>
                <button 
                    onClick={() => setStatus('idle')} 
                    className="px-8 py-3 bg-navy text-white rounded-xl font-bold hover:bg-primary transition-all active:scale-95"
                >
                    Send Another Inquiry
                </button>
            </motion.div>
        )
    }

    const inputClasses = (error?: any) => `
        w-full px-5 py-4 bg-gray-50/50 border rounded-2xl outline-none transition-all duration-300
        text-navy font-medium placeholder:text-gray-400
        ${error 
            ? 'border-red-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/5' 
            : 'border-gray-200 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/5'}
    `

    const labelClasses = "block text-[11px] font-semibold text-navy/40 uppercase tracking-widest mb-2 ml-1"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className={labelClasses}>Full Name *</label>
                    <input
                        {...register('fullName', { required: 'Full name is required' })}
                        className={inputClasses(errors.fullName)}
                        placeholder="e.g. Alexander Pierce"
                    />
                    <AnimatePresence>
                        {errors.fullName && (
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-semibold ml-1">{errors.fullName.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <div className="space-y-1">
                    <label className={labelClasses}>Company Name *</label>
                    <input
                        {...register('companyName', { required: 'Company name is required' })}
                        className={inputClasses(errors.companyName)}
                        placeholder="Your Enterprise Ltd."
                    />
                    <AnimatePresence>
                        {errors.companyName && (
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-semibold ml-1">{errors.companyName.message}</motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className={labelClasses}>Country of Operation *</label>
                    <select
                        {...register('country', { required: 'Country is required' })}
                        className={inputClasses(errors.country)}
                    >
                        <option value="">Select Region</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="space-y-1">
                    <label className={labelClasses}>Email Address *</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                        className={inputClasses(errors.email)}
                        placeholder="name@company.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className={labelClasses}>Phone / WhatsApp</label>
                    <input
                        {...register('phone')}
                        className={inputClasses()}
                        placeholder="+000 000 0000"
                    />
                </div>
                <div className="space-y-1">
                    <label className={labelClasses}>Inquiry Category *</label>
                    <select
                        {...register('category', { required: 'Please select a category' })}
                        className={inputClasses(errors.category)}
                    >
                        <option value="">Select Category</option>
                        {products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}
                        <option value="other">Other / Multiple</option>
                    </select>
                </div>
            </div>

            <div className="space-y-1">
                <label className={labelClasses}>Detailed Requirements *</label>
                <textarea
                    {...register('message', { required: 'Please describe your requirements' })}
                    rows={4}
                    className={`${inputClasses(errors.message)} resize-none`}
                    placeholder="Provide details about products, quantities, and specific technical requirements..."
                />
            </div>

            {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-red-600 bg-red-50 border border-red-100 rounded-2xl p-4">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Submission failed. Please check your connection.</span>
                </motion.div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="group relative w-full bg-navy text-gold font-bold uppercase tracking-widest py-5 rounded-2xl overflow-hidden hover:bg-gold hover:text-navy transition-all duration-500 disabled:opacity-50 active:scale-[0.98] shadow-xl hover:shadow-gold/20"
            >
                <div className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Processing Request</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            <span>Submit Procurement Inquiry</span>
                        </>
                    )}
                </div>
                {/* Button Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">UAE Direct</span>
                </div>
            </div>
        </form>
    )
}
