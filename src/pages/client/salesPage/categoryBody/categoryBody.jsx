import ProductGrid from "../../../../components/client/productGrid/productGrid.jsx";
import CarritoModal from "../../../../components/client/modalCarrito/modalCarrito.jsx"
import PagesBar from '../../../../components/client/pagesBar/pagesBar.jsx'

import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

// Dev Imports
import { cards_data } from '../../../../data.js'

export default function CategoryBody() {
    const [cartAdder, showProductModal] = useOutletContext()

    var current_page = 1

    function before() {
        current_page -= 1
        updateData()
    }

    function after() {
        current_page += 1
        updateData()
    }

    function changePage(page) {
        current_page = page
        updateData()
    }

    function updateData(){
        console.log('updating data')
        console.log(current_page)

    }

    const [gridData, setGridData] = useState(cards_data)


    return (
        <>
            <ProductGrid data={gridData} showProductModal={showProductModal} cartAdder={cartAdder}/>
            <PagesBar before={before} after={after} changePage={changePage} />
        </>
    )   
}