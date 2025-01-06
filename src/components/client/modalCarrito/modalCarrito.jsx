import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalCarrito.css'

export default function CarritoModal({newOrder, cart}) {

  const [productsLocal, setProductsLocal] = useState(cart.products);
  const [total, setTotal] = useState(0)
  const updateCart = (new_cart) => setProductsLocal(JSON.parse(JSON.stringify(new_cart)));

  useEffect(() => {
    updateCart(cart.products);
    setTotal(cart.getTotal())
  }, [cart.products]);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePlus(indx){
    cart.plusProd(productsLocal[indx]);
    updateCart(cart.products)
    setTotal(cart.getTotal())
  };

  function handleMinus(indx){
    // Updating cart.products and using the hook
    cart.minusProd(productsLocal[indx]);
    updateCart(cart.products)
    setTotal(cart.getTotal())
  };

  const handleBuy = async () => {
    console.log('on buy')
    const response = await fetch('http://localhost:3000/new_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: productsLocal,
        total: total,
      }),
    });

    console.log('after response')

    if (response.ok) console.log('Pedido realizado con éxito');
    else console.error('Error al realizar el pedido');

    setShow(false);
  };

  return (
    <>
      <button variant="primary" onClick={handleShow} className='cart-btn'> Ver Carrito </button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Pedido Actual </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
                    <table className="table py-4 mb-4 table-hover position-sticky">
                        <thead>
                            <tr className="text-primary">
                                <th scope="col">Producto</th>
                                <th scope="col">Presentacion</th>
                                <th scope="col">Precio (S/.)</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                                productsLocal.map((el, indx) => (
                                  
                                  <tr key={indx}>
                                    <td> {el.product_name} </td>
                                    <td> {el.presentation_name} </td>
                                    <td> {el.presentation_cost} </td>
                                    <td> {el.q} </td>
                                    <td> {el.q * el.presentation_cost} </td>

                                    <td> 
                                      <button className='control-btn' onClick={()=> {handlePlus(indx)}}> + </button>
                                      <button className='control-btn' onClick={()=> {handleMinus(indx)}}> - </button>
                                    </td>
                                    
                                  </tr>
                                ))
                              }
                        </tbody>
                    </table>
            
            <h5> Costo Total: { total }</h5>
          </div>
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleBuy}>
            Hacer Pedido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
