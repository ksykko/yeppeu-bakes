import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Navigation from '../navigation/navigation.component'
import Stationery from '../../assets/categories/stationery.jpg'
import Accessories from '../../assets/categories/accessories.jpg'
import Toys from '../../assets/categories/toys.jpg'
import HomeLiving from '../../assets/categories/home&living.jpg'
import Directory from '../../components/directory/directory.component'
import Button from '../../components/button/button.component'
import { ReactComponent as Delivery } from '../../assets/svgs/delivery.svg'
import { ReactComponent as Support } from '../../assets/svgs/24-7.svg'
import { ReactComponent as Authentic } from '../../assets/svgs/authentic.svg'

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
            styling:
                'relative overflow-hidden p-20 bg-gray-600 bg-center bg-cover group',
            imageUrl: Toys,
        },
        {
            id: 3,
            title: 'Accessories',
            styling:
                'relative overflow-hidden p-20 bg-red-600 bg-center bg-cover group',
            imageUrl: Accessories,
        },
        {
            id: 4,
            title: 'Home & Living',
            styling:
                'relative overflow-hidden p-20 bg-orange-600 md:col-span-2 bg-center bg-cover group',
            imageUrl: HomeLiving,
        },
    ]

    return (
        <Fragment>
            <section id="hero">
                <div className="container max-w-6xl mx-auto px-6 py-3">
                    <Navigation />
                    <div className="relative flex items-center justify-end min-h-screen font-playfairDisplay">
                        <div className="bg-heroPeach bg-opacity-80 max-w-lg rounded-xl p-8 space-y-4 shadow-lg -mt-28">
                            <p className="font-bold text-5xl text-orangePeach">
                                Discover Our New Collection
                            </p>
                            <Button className="bg-orangePeach text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">
                                <Link to="/shop">Shop Now</Link>
                            </Button>
                        </div>
                    </div>

                    {/* <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-orangePeach uppercase border-2 border-orangePeach md:p-10 md:m-32 md:mx-0 md:text-6xl">
                        Where Learning Meets Convenience
                    </div> */}
                </div>
                <div>
                    <div className="bg-[#f0f0f2] py-16 text-orangePeach">
                        <div className="w-9/12 mx-auto">
                            <div className="flex justify-between">
                                <div className="flex gap-6">
                                    <div>
                                        <Delivery />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-playfairDisplay">
                                            Fast Delivery
                                        </p>
                                        <p>Ships in Metro Manila</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div>
                                        <Support />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-playfairDisplay">
                                            Support 24/7
                                        </p>
                                        <p>Send us a Message</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div>
                                        <Authentic />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-playfairDisplay">
                                            100% Authentic
                                        </p>
                                        <p>Durable items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Directory categories={categories} />
        </Fragment>
    )
}

export default Home
