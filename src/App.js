import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'
import Shop from './routes/shop/shop.component'
import SignUp from './routes/sign-up/sign-up.component'
import ViewProduct from './routes/view-product/view-product.component'
import Checkout from './routes/checkout/checkout.component'
import Payment from './routes/payment/payment.component'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:name" element={<ViewProduct />} />
            <Route path="shop/check-out" element={<Checkout />} />
            <Route path="shop/payment" element={<Payment />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<h1> 404 Not Found </h1>} />
        </Routes>
    )
}

export default App
