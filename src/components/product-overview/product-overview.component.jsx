import { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CartContext } from '../../contexts/cart-context'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { MdArrowBackIosNew } from 'react-icons/md'

import Button from '../button/button.component'

const ProductOverview = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { from } = location.state || { from: { pathname: '/' } }
    const { name, desc, imageUrl, price } = from

    const [currentIndex, setCurrentIndex] = useState(1)
    const { addItemToCart } = useContext(CartContext)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imageUrl.length - 1 : currentIndex - 1
        const img = document.querySelector('.slide-image')
        img.style.opacity = 0
        setTimeout(() => {
            setCurrentIndex(newIndex)
            img.src = imageUrl[newIndex].url
            img.style.opacity = 1
        }, 250)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === imageUrl.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        const img = document.querySelector('.slide-image')
        img.style.opacity = 0
        setTimeout(() => {
            setCurrentIndex(newIndex)
            img.src = imageUrl[newIndex].url
            img.style.opacity = 1
        }, 250)
    }

    const [selectedProduct, setSelectedProduct] = useState(price[0])
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [additionalInstruction, setAdditionalInstruction] = useState('')

    const handleAddToCart = () => {
        addItemToCart(
            selectedProduct,
            imageUrl[currentIndex].url,
            selectedProduct.productName,
            selectedQuantity,
            selectedProduct.cost,
            additionalInstruction
        )
    }

    const handleProceedToCheckout = () => {
        navigate('/shop/payment')
    }

    return (
        <div className=" xl:max-w-5xl 2xl:max-w-6xl mx-auto pt-5 pb-10 px-4">
            {/* Back Button */}
            <div className="flex justify-between mb-5">
                <Link to="/shop">
                    <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                        <div className="flex items-center justify-center">
                            <MdArrowBackIosNew
                                size={20}
                                className="-ml-3 mr-1"
                            />
                            Back
                        </div>
                    </button>
                </Link>
            </div>
            {/* Container */}
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-7">
                {/* Left Side */}
                <div className="relative group md:w-1/2">
                    <img
                        // src={Object.values(imageUrl[currentIndex])}
                        key={imageUrl[currentIndex].id}
                        src={imageUrl[currentIndex].url}
                        alt={name}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 select-none slide-image"
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
                        {imageUrl.map((slideIndex, index) => (
                            <div
                                key={index}
                                className="text-2xl text-lightBrown"
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side */}
                <div className="p-8 md:px-12 md:py-10 bg-lightestPeach rounded-2xl md:w-1/2 select-none relative">
                    {/* Product Name */}
                    <h1 className="text-2xl font-bold font-playfairDisplay text-darkBrown mb-3">
                        {name}
                    </h1>
                    <p className="text-sm text-darkBrown italic">{desc}</p>
                    {/* Price */}
                    {selectedProduct && (
                        <p className="text-3xl font-playfairDisplay font-bold text-darkBrown mt-5">
                            ₱{selectedProduct.cost}.00
                        </p>
                    )}
                    <hr className="w-full h-px my-4 bg-lightBrown border-0" />
                    {/* Quantity */}
                    <div className="flex flex-col space-y-3">
                        <p className="font-md tracking-widest font-bold text-lightBrown">
                            Size:
                        </p>

                        {/* Radio Button */}
                        {price.map((option) => (
                            <div
                                key={option.priceId}
                                className="flex items-center mb-4"
                            >
                                <input
                                    id={`price-option-${option.priceId}`}
                                    type="radio"
                                    value={option.priceId}
                                    name="price-options"
                                    checked={
                                        selectedProduct.priceId ===
                                        option.priceId
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                    onChange={() => setSelectedProduct(option)}
                                />
                                <label
                                    htmlFor={`price-option-${option.priceId}`}
                                    className="ml-2 text-sm font-medium text-gray-900"
                                >
                                    {option.qty} {option.productName}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Additional Instruction */}
                    <div className="flex flex-col space-y-3 mt-5">
                        <p className="font-md tracking-widest font-bold text-lightBrown">
                            Additional Instructions:
                        </p>
                        <textarea
                            className="w-full h-24 px-4 py-2 border text-sm border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightBrown focus:border-transparent placeholder:text-sm resize-none no-scrollbar"
                            placeholder="If you order more than one flavor, you can note here the quantity of each flavor. Thank you!"
                            value={additionalInstruction}
                            onChange={(e) =>
                                setAdditionalInstruction(e.target.value)
                            }
                        ></textarea>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="flex space-x-4 mt-5">
                        <div className="relative">
                            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-lightBrown tracking-wide font-bold">
                                Qty
                            </div>
                            <select
                                className="cursor-pointer appearance-none bg-lightestPeach rounded-xl border focus:outline-lightBrown border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                                value={selectedQuantity}
                                onChange={(e) =>
                                    setSelectedQuantity(
                                        parseInt(e.target.value)
                                    )
                                }
                            >
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>

                            <svg
                                className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                />
                            </svg>
                        </div>

                        <Button
                            type="button"
                            className="h-14 px-6 py-2 font-semibold bg-lightBrown text-white rounded-xl hover:opacity-90"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            type="button"
                            className="h-14 px-4 py-2 font-semibold bg-emerald-400 text-white rounded-xl hover:opacity-90"
                            onClick={handleProceedToCheckout}
                        >
                            <div className="flex items-center justify-center">
                                Pay Now
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOverview
