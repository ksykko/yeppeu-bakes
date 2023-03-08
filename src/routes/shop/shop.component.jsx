import { Fragment } from 'react'
import Navigation from '../navigation/navigation.component'

const Shop = () => {
    return (
        <Fragment>
            <div>
                <section id="shop" className="bg-orangePeach">
                    <div className="container max-w-6xl mx-auto px-6 py-3">
                        <Navigation className="text-white" />
                    </div>
                </section>
                <h1>Shop Page</h1>
            </div>
        </Fragment>
    )
}

export default Shop
