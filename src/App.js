import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'
import Shop from './routes/shop/shop.component'
import SignUp from './routes/sign-up/sign-up.component'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="shop" element={<Shop />} />
            <Route path="sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default App
