import "./ProductCard.css"

export default function ProductCard({ product, cartAdder, showProductModal}){

    function handleImgClick() {
        showProductModal({
            product_name: product.product_name,
            presentations: [
                {
                    presentation_name: product.presentation_name,
                    presentation_cost: product.presentation_cost,
                    img_link: product.img_link
                }
            ]
        });
    }

    function handleButtonClick() {
        cartAdder(product, 1)
    }

    return (
        <div className="product-card">
            <img
                src={product.img_link}
                className="img-fluid"
                onClick={handleImgClick}
            />
                        
            <div className="product-meta">
                <h2> {product.product_name} </h2>
                <h5> {product.presentation_name} </h5>
                <p>Costo S/.{product.presentation_cost}</p>
                <button onClick={handleButtonClick}>Agregar al Carrito</button>
            </div>
        </div>
    )
}