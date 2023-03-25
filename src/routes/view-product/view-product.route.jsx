import { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import ProductOverview from '../../components/product-overview/product-overview.component'

const ViewProduct = () => {


    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <ProductOverview />
            </div>
        </Fragment>
    )
}

export default ViewProduct
