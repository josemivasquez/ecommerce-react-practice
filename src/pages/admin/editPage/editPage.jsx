import { useState } from 'react'
import ButtonControl from '../../../components/admin/buttonControl/buttonControl'
import ProductEditModal from '../../../components/admin/productEditModal/productEditModal'
import ProductGridSelect from '../../../components/admin/productGridSelect/productGridSelect'
import CategoryNavbar from '../../../components/client/categoryNavbar/categoryNavbar'
import HeaderTittle from '../../../components/client/headerTittle/headerTittle'
import './editPage.css'

// Dev Imports
import { product_data } from '../../../data';

export default function EditPage(){


    function saveChanges(product_data, deleted){
        console.log('on save changes')
        console.log(product_data)
        console.log(deleted)
        pmeShowSet(false)

        // Send the changes to the backend  
    }



    const empty_data = {
        product_name: '',
        relevancia: 0,
        presentations: []
    }

    const [productData, setProductData] = useState(product_data)
    const [pmeShow, pmeShowSet] = useState(false)

    function newProduct(){
        console.log('on new product')
        setProductData(empty_data)
        pmeShowSet(true)
    }

    return(
        <>
            <ProductEditModal show={pmeShow} hide={()=>pmeShowSet(false)} product_data={product_data} saveChanges={saveChanges}></ProductEditModal>
            <HeaderTittle></HeaderTittle>
            <CategoryNavbar></CategoryNavbar>
            <ButtonControl newProduct={newProduct}></ButtonControl>
            <ProductGridSelect></ProductGridSelect>
        </>
    ) 
}