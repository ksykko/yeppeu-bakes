import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.route'
import SignIn from './routes/sign-in/sign-in.route'
import Shop from './routes/shop/shop.route'
import SignUp from './routes/sign-up/sign-up.route'
import ViewProduct from './routes/view-product/view-product.route'
import Checkout from './routes/checkout/checkout.route'
import Payment from './routes/payment/payment.route'
import UserDashBoard from './routes/user-dashboard/user-dashboard.route'
import AdminDashboard from './routes/admin-dashboard/admin-dashboard.route'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:name" element={<ViewProduct />} />
            <Route path="shop/check-out" element={<Checkout />} />
            <Route path="shop/payment" element={<Payment />} />
            <Route path="shop/order-tracking" element={<UserDashBoard />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<h1> 404 Not Found </h1>} />
        </Routes>
    )
}

export default App
