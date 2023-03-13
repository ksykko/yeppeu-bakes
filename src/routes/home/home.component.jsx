import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../navigation/navigation.component'
import Stationery from '../../assets/categories/stationery.jpg'
import Accessories from '../../assets/categories/accessories.jpg'
import Toys from '../../assets/categories/toys.jpg'
import HomeLiving from '../../assets/categories/home&living.jpg'
import Directory from '../../components/directory/directory.component'

const Home = () => {
    const categories = [
        {
            id: 1,
            title: 'Hobbies & Stationeries',
            styling:
                'relative overflow-hidden p-20 md:col-span-2 md:row-span-2 bg-center bg-cover group',
            imageUrl: Stationery,
        },
        {
            id: 2,
            title: 'Toys',
            styling: 'relative overflow-hidden p-20 bg-gray-600 bg-center bg-cover group',
            imageUrl: Toys,
        },
        {
            id: 3,
            title: 'Accessories',
            styling: 'relative overflow-hidden p-20 bg-red-600 bg-center bg-cover group',
            imageUrl: Accessories,
        },
        {
            id: 4,
            title: 'Home & Living',
            styling: 'relative overflow-hidden p-20 bg-orange-600 md:col-span-2 bg-center bg-cover group',
            imageUrl: HomeLiving,
        },
    ]

    return (
        <Fragment>
            <section id="hero">
                <div className="container max-w-6xl mx-auto px-6 py-3">
                    <Navigation />
                    <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-orangePeach uppercase border-2 border-orangePeach md:p-10 md:m-32 md:mx-0 md:text-6xl">
                        Where Learning Meets Convenience
                    </div>
                </div>
            </section>

            <Directory categories={ categories } />

        </Fragment>
    )
}

export default Home
