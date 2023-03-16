import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const { name, desc, price, imageUrl } = product

    return (
        <Link href="#" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg text-right font-medium text-gray-900">₱{price}</p>
        </Link>
    )
}

export default ProductCard
