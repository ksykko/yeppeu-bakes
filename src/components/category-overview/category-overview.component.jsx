import { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryOverview = ({ product, price }) => {
    const { name, desc, imageUrl } = product
    const [isLoaded, setIsLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsLoaded(true)
    }

    return (
        <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:h-96">
                {!isLoaded && (
                    <div className="flex justify-center items-center h-full">
                        <svg
                            className="animate-spin h-10 w-10 text-lightBrown"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.5A8.5 8.5 0 102.5 12H4a6.5 6.5 0 1113 0h1.5A8.5 8.5 0 0012 20.5z"
                            ></path>
                        </svg>
                    </div>
                )}
                <img
                    src={imageUrl[1].url}
                    alt={`${name}`}
                    className={`h-full w-full object-cover object-center ${
                        isLoaded ? '' : 'hidden'
                    }`}
                    onLoad={handleImageLoad}
                />
            </div>
            <h3 className="mt-6 text-lg font-bold font-playfairDisplay text-lightBrown">
                <Link
                    to={`/shop/${name}`}
                    state={{ from: product, prices: price }}
                >
                    <span className="absolute inset-0"></span>
                    {name}
                </Link>
            </h3>
            <p className="text-base font-medium text-gray-900">{desc}</p>
        </div>
    )
}

export default CategoryOverview
