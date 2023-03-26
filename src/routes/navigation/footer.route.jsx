import { Fragment } from 'react'
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';

import Logo from '../../assets/yeppeubakes-nobg.png'

const Footer = () => {

    return (
        <Fragment>
        <footer className="bg-darkestBrown text-gray-400 py-12 text-heroPeach">
            <div className="container mx-auto flex flex-wrap  text-center">
                <div className="w-full lg:w-1/3 px-4 lg:text-left">
                    <div className="w-full mb-[20px] flex justify-center lg:justify-start">
                        <img
                            src={Logo}
                            alt="Shop"
                            className="object-cover w-24 shadow-lg"
                        />
                    </div>

                    <h3 className="text-lg mb-4 font-bold text-white ">About Us</h3>
                    <p className="text-sm">
                        We are a cookie business dedicated to bringing you the best-tasting, highest-quality cookies you've ever had. We are ready to satisfy your cravings!
                    </p>
                </div>

                <div className="py-10 w-full lg:py-0 lg:w-1/3 px-4">
                    <nav>
                        <ul className="list-none">
                        <li className="mb-2">
                            <a href="/" className="hover:text-white">Home</a>
                        </li>
                        <li className="mb-2">
                            <a href="/shop" className="hover:text-white">Shop</a>
                        </li>
                        </ul>
                    </nav>
                </div>

                <div className="w-full lg:w-1/3 px-4 lg:text-right">
                <h3 className="text-lg mb-4 font-bold text-white">Contact Us</h3>
                <ul className="list-none">
                    <li className="mb-2">
                    <a href="/" className="hover:text-white">Privacy Policy</a>
                    </li>
                    <li className="mb-2">
                    <a href="/" className="hover:text-white">Terms</a>
                    </li>
                    <div className="pt-16 lg:pt-5  w-full px-4 flex justify-center lg:justify-end">
                        <a href="https://www.facebook.com/yeppeubakes" className="text-gray-400 hover:text-white">
                            <FaFacebook className="text-2xl mr-4" />
                        </a>
                        <a href="https://twitter.com/yeppeubakes" className="text-gray-400 hover:text-white">
                            <FaTwitter className="text-2xl mr-4" />
                        </a>
                        <a href="https://www.instagram.com/yeppeubakes/" className="text-gray-400 hover:text-white">
                            <FaInstagram className="text-2xl " />
                        </a>

                    </div>
                </ul>

                </div>
            </div>

            <div className="container mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/3 px-4">

                </div>

                <div className="w-full lg:w-1/3 px-4">

                </div>


            </div>

            <hr className="my-8 border-gray-700" />
            <div className="container mx-auto">
            <p className="text-center text-sm">
            © 2023 Yeppeu Bakes. All rights reserved.
            </p>
            </div>
        </footer>

        </Fragment>
    )
}

export default Footer
