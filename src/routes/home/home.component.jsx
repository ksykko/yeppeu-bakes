import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'

import Navigation from '../navigation/navigation.component'
import Footer from '../navigation/footer.component'
import Directory from '../../components/directory/directory.component'
import Button from '../../components/button/button.component'
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component'

import ChocoChip from '../../assets/cookies/chocochip.JPG'
import Almonds from '../../assets/cookies/almond.JPG'
import RedVelvet from '../../assets/cookies/redvelvet.JPG'

import { ReactComponent as Delivery } from '../../assets/svgs/delivery.svg'
import { ReactComponent as Support } from '../../assets/svgs/24-7.svg'
import { ReactComponent as Oven } from '../../assets/svgs/oven.svg'


const Home = () => {
    const { currentUser } = useContext(UserContext)

    const yeppeuCookies = [
        {
            id: 1,
            title: 'Chocolate Chip Cookie',
            styling: 'rounded-tl-[4.5rem] lg:mt-16',
            imageUrl1: ChocoChip,
        },
        {
            id: 2,
            title: 'White Chocolate Chip Almonds Cookie',
            midStyling: 'lg:mb-16',
            imageUrl1: Almonds,
        },
        {
            id: 3,
            title: 'Red Velvet with Cream Cheese Cookie',
            styling: 'rounded-br-[4.5rem] lg:mt-16',
            imageUrl1: RedVelvet,
        },
    ]

    return (
        <Fragment>
            <section id="hero">
                <div className="container max-w-6xl mx-auto px-6 py-3">
                    <Navigation />
                    <div className="relative flex items-center justify-start min-h-screen font-playfairDisplay">
                        <div className="bg-heroPeach bg-opacity-40 max-w-lg rounded-xl p-8 space-y-4 shadow-lg -mt-28">
                            <p className="font-bold text-5xl text-darkestBrown">
                                Homebaked catered to your sweet tooth!
                            </p>
                            <Button className="bg-lightBrown text-white font-bold py-2 px-4 rounded-lg hover:opacity-90">
                                <Link to="/shop">Shop Now</Link>
                            </Button>
                        </div>
                    </div>

                    <HamburgerMenu currentUser={currentUser} />


                    {/* <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-orangePeach uppercase border-2 border-orangePeach md:p-10 md:m-32 md:mx-0 md:text-6xl">
                        Where Learning Meets Convenience
                    </div> */}
                </div>
            </section>
            <div>
                <div className="bg-[#f8ceb0] py-16 text-darkestBrown">
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
                                    <p>Ships within Metro Manila</p>
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
                                    <Oven />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold font-playfairDisplay">
                                        100% Freshly Baked
                                    </p>
                                    <p>Authentic Homebaked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16">
                    <div className="w-9/12 mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-2xl font-bold font-playfairDisplay">
                                Our Cookies
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ab, sapiente?
                            </p>
                        </div>
                        <Directory yeppeuCookies={yeppeuCookies} />
                    </div>
                </div>

                <div>
                    <hr /> <button>Shop All Products</button> <hr />
                </div>

                <div className="py-16">
                    <div className="w-9/12 mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-2xl font-bold font-playfairDisplay">
                                What's New?
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Ab, sapiente?
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home
