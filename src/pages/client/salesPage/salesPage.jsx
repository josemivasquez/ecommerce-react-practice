import HeaderTittle from "../../../components/client/headerTittle/headerTittle.jsx"
import CategoryNavbar from '../../../components/client/categoryNavbar/categoryNavbar.jsx'
import CarritoModal from "../../../components/client/modalCarrito/modalCarrito.jsx"
import ProductModal from "../../../components/client/productModal/productModal.jsx"

import { Routes, Route, Outlet } from 'react-router-dom'
import { useState } from "react"

import MainBody from "./mainBody/mainBody.jsx"
import CategoryBody from "./categoryBody/categoryBody.jsx"
import Cart from '../../../cart/cart.js'

import { newOrder } from '../../../api/getters.js'


export default function SalesPage() {
    const empty_data = {
        product_name: '',
        presentations: [ {
            presentation_name: '',
            presentation_cost: '',
            img_link: ''
            }
        ]
    }

    const [productModalState, setProductModalState] = useState({
        show: false, data: empty_data
    })

    function showProductModal(data){
        // Fetch the other presentations
        // Extend the presentations list

        setProductModalState({
            show: true, data: data
        })
    }

    function hideProductModal(){
        setProductModalState({
            show: false, data: empty_data
        })
    }

    function cartAdder(prod, q){
        console.log('on cart adder')
        cart.addProd(prod, q)
        console.log(cart.products);
    }
    let cart = new Cart()

    return (
        <>
            <HeaderTittle/>
            <CategoryNavbar/>
            <CarritoModal newOrder={newOrder} cart={cart}/>
            <ProductModal state={productModalState} hide={hideProductModal}/>

            <Outlet context={[cartAdder, showProductModal]}/>
        </>
    )
}