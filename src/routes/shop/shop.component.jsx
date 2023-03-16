import { Fragment } from 'react'
import NavigationBar from '../../components/navigation-bar/navigation-bar.component'

import SHOP_DATA from '../../shop-data.json'

const Shop = () => {
    return (
        <Fragment>
            <NavigationBar />
            <div className="container max-w-6xl mx-auto px-6 py-3">
                <div className="grid gap-10 lg:grid-cols-3">
                    {SHOP_DATA.map(({ id, name, imageUrl }) => (
                        // <div key={id} className="relative overflow-hidden group">
                        //     {/* <img src={imageUrl} alt="" /> */}
                        //     <div className="item-gradient"></div>
                        //     <div className="category-title">{name}</div>
                        // </div>
                        <div>{name}</div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Shop
