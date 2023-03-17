import { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'

const ViewProduct = () => {
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }
    const { name, desc, imageUrl } = from

    const [currentIndex, setCurrentIndex] = useState(1)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imageUrl.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === imageUrl.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                {/* Turn this into ProductOverview Component later */}
                <div className="max-w-lg mx-auto py-16 px-4 relative group">
                    {/* <div style={{ backgroundImage: imageUrl1 }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div> */}
                    <img
                        src={Object.values(imageUrl[currentIndex])}
                        alt={name}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 select-none"
                    />
                    {/* Left arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-8 left-5 text-4xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-8 right-5 text-4xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    {/* Dots */}
                    <div className="flex top-4 justify-center py-2">
                        {imageUrl.map((slideIndex) => (
                            <div
                                key={slideIndex}
                                className="text-2xl cursor-pointer"
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="basis-1/4">01</div>
                <div class="basis-1/4">02</div>
            </div>
        </Fragment>
    )
}

export default ViewProduct
