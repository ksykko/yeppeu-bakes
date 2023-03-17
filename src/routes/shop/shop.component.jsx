import { Fragment, useContext } from 'react'

import { BakedGoodsContext } from '../../contexts/baked-goods.context'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import CategoryOverview from '../../components/category-overview/category-overview.component'


const Shop = () => {
    const {bakedGoods} = useContext(BakedGoodsContext)

    return (
        <Fragment>
            <NavigationBar />
            <div className="container max-w-6xl mx-auto px-6 py-3 mb-20">
                <h1 className="text-3xl font-bold text-center text-darkestBrown font-playfairDisplay mb-12 mt-6">
                    Our Baked Goods
                </h1>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-y-10">
                    {bakedGoods.map((bakedGood) => (
                        <CategoryOverview key={bakedGood.id} product={bakedGood} />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Shop
