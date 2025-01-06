import './productGrid.css'
import ProductCard from '../productCard/productCard'

export default function ProductGrid ({data, showProductModal, cartAdder}) {
  
  return(
    <div className='products'>

          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {data.map(el => (
                <ProductCard product={el} cartAdder={cartAdder} showProductModal={showProductModal}></ProductCard>
            ))}
          </div>

    </div>
  )
}


/** 
  return (

      <main className='products'>
          <ul>
              {products.map(product => (
                  <li key={product.id}>
                      <img 
                          src={product.thumbnail}
                          alt={product.title} 
                      />
                      <div>
                          <strong>{product.title}</strong> - ${product.price}
                      </div>

                  </li>
                  
              ) )}
          </ul>
      </main>
  )
}
<h5 className="text-primary text-center">Costo:</h5>
                             <button className="btn btn-primary text-center m-4">Añadir 
                            </button>
                            <button className="btn btn-primary text-center m-3"> - </button>
                            <span className="Cantidad text-secondary text-center">1</span> 
                            <button className="btn btn-primary text-center m-3"> + </button>
                             */




