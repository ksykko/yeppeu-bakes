import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'
import { useState } from 'react'
import Shop from './routes/shop/shop.component'


const App = () => {


    return (

        <Routes>
            <Route path="/" element={<Home />}>
                {/* <Route path="shop" element={<Shop />} /> */}

            </Route>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
        </Routes>
    )
}

export default App