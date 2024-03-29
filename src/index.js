import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { UserProvider } from './contexts/user.context'
import { BakedGoodsProvider } from './contexts/baked-goods.context'
import { OrdersProvider } from './contexts/orders-context'
import { CartProvider } from './contexts/cart-context'
import { HamburgerProvider } from './contexts/hamburger.context'
import { AlertMessageProvider } from './contexts/alert-message.context'

import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AlertMessageProvider>
            <BrowserRouter>
                <UserProvider>
                    <OrdersProvider>
                        <BakedGoodsProvider>
                            <CartProvider>
                                <HamburgerProvider>
                                    <App />
                                </HamburgerProvider>
                            </CartProvider>
                        </BakedGoodsProvider>
                    </OrdersProvider>
                </UserProvider>
            </BrowserRouter>
        </AlertMessageProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
