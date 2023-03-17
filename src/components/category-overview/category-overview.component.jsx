import { Link } from 'react-router-dom'

const CategoryOverview = ({ product }) => {
    const { id, name, desc, imageUrl } = product

    return (
        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:h-96">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <h3 className="mt-6 text-lg font-bold font-playfairDisplay text-lightBrown">
                <Link to={`/shop/${id}`} state={{ from: product }}>
                    <span className="absolute inset-0"></span>
                    {name}
                </Link>
            </h3>
            <p className="text-base font-medium text-gray-900">{desc}</p>
        </div>
    )
}

export default CategoryOverview
