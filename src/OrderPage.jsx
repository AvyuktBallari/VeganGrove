import { div } from 'framer-motion/client'
import React from 'react'
import Navbar from './components/Navbar'
import OrderForm from './components/Order'
import Footer from './components/Footer'

function OrderPage() {
  return (
    <div>
        <Navbar />
        <OrderForm />
        <Footer />
    </div>
  )
}

export default OrderPage