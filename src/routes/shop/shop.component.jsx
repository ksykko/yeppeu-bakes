import { Fragment } from 'react'
import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import ShopBG from '../../assets/shop-bg.jpg'
import SHOP_DATA from '../../shop-data.json'



const Shop = () => {
    return (
        <Fragment>
            <NavigationBar />
            <div className="relative isolate min-h-[40vh] overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src={ShopBG}
                    alt="Shop"
                    className="item-gradient absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
            </div>

            {/* Shop items */}
            <div className="grid place-items-center py-20 text-darkestBrown ">
                <div className="w-9/12 ">
                    <div className="grid place-items-center">
                        <p className="text-2xl font-bold font-playfairDisplay">
                            Our Products
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Ab, sapiente?
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 w-9/12 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {SHOP_DATA.map((product) => (
                    <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img
                        src={product.imageUrl}
                        alt={product.desc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                        <h3 className="font-bold font-playfairDisplay text-lg text-gray-700">
                            <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">₱{product.price}</p>
                    </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Shop
