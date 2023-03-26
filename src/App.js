import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.route'
import SignIn from './routes/sign-in/sign-in.route'
import Shop from './routes/shop/shop.route'
import SignUp from './routes/sign-up/sign-up.route'
import ViewProduct from './routes/view-product/view-product.route'
import Checkout from './routes/checkout/checkout.route'
import Payment from './routes/payment/payment.route'
import UserDashBoard from './routes/user-dashboard/user-dashboard.route'
import Invoice from './components/invoice/invoice.component'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:name" element={<ViewProduct />} />
            <Route path="shop/check-out" element={<Checkout />} />
            <Route path="shop/payment" element={<Payment />} />
            <Route path="profile/:userName" element={<UserDashBoard />} />
            <Route
                path="profile/:userName/order-tracking"
                element={<UserDashBoard />}
            />
            <Route path="invoice/:orderId" element={<Invoice />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<h1> 404 Not Found </h1>} />
        </Routes>
    )
}

export default App
