import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import CategoryPageClient from './CategoryPageClient'

export async function generateStaticParams() {
    return products.map(p => ({ category: p.slug }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
    const product = products.find(p => p.slug === params.category)
    if (!product) return {}
    return {
        title: `${product.name} | Stepvision International Trading`,
        description: product.description,
    }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    console.log('CategoryPage rendering for params:', params);
    const product = products.find(p => p.slug === params.category)
    console.log('Found product:', product?.name);
    if (!product) notFound()
    return <CategoryPageClient product={product} />
}
