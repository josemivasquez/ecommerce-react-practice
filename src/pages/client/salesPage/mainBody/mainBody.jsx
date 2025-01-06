import MyCarousel from "../../../../components/client/carousel/carousel.jsx"
// import { useState } from "react"
import { useOutletContext } from "react-router-dom"


export default function MainBody() {
    console.log('on main body')
    const [cartAdder, showProductModal] = useOutletContext()
    
    return (
        <>
            <MyCarousel showProductModal={showProductModal} cartAdder={cartAdder} />
        </>
    )   
}
