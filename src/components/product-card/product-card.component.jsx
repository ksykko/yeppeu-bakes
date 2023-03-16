import DropdownMenu from '../dropdown-menu/dropdown-menu.component'

const ProductCard = ({ product }) => {
    const { name, desc, price, imageUrl } = product

    return (
        <div className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                <img
                    src={imageUrl}
                    alt={`${name}`}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <button className='absolute bottom-5 left-3 right-3 hidden group-hover:block rounded-xl bg-lightBrown text-white p-2'>Add to cart</button>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg text-right font-medium text-gray-900">₱{price}</p>
            {/* <DropdownMenu /> */}
        </div>
    )
}

export default ProductCard
