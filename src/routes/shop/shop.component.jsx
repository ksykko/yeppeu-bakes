import { Fragment, useContext } from 'react'

import { BakedGoodsContext } from '../../contexts/baked-goods.context'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import ProductCard from '../../components/product-card/product-card.component'


const Shop = () => {
    const {bakedGoods} = useContext(BakedGoodsContext)

    return (
        <Fragment>
            <NavigationBar />
            <div className="container max-w-6xl mx-auto px-6 py-3">
                <h1 className="text-3xl font-bold text-center text-darkestBrown font-playfairDisplay mb-12 mt-6">
                    Our Baked Goods
                </h1>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {bakedGoods.map((bakedGood) => (
                        <ProductCard key={bakedGood.id} product={bakedGood} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Shop
