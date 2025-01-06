import './productGridSelect.css'
import ProductCard from '../../client/productCard/productCard'


// Dev Imports
import { cards_data } from '../../../data'

export default function ProductGridSelect () {
    let productList = []
    function handleClick(product,checked){
        if (checked) productList.push(product)  
        else productList=productList.filter((el)=>el!=product)
        console.log(productList)
    }

  return(
    <div className='products'>
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {cards_data.map(el => (
                <div className='container-select'>
                    <input type='checkbox' className='check-select' onClick={(e) => {handleClick(el, e.target.checked)}}></input>
                    <ProductCard product={el} cartAdder={() => {}} showProductModal={() => {}}></ProductCard>
                </div>
                
            ))}
          </div>
    </div>
  )
}