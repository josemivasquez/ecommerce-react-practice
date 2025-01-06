import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function ProductModal({ state, hide }) {

    const {show, data} = state

    const [currentPresentation, setCurrentPresentation] = useState(data.presentations[0])
    useEffect( () => {
        setCurrentPresentation(data.presentations[0])
        console.log(data)
    }, [data])

    const [indexCarousel, setIndexCarousel] = useState(0);
    
    function handleSelectIndex(selectedIndex) {
        setCurrentPresentation(data.presentations[selectedIndex]);
        setIndexCarousel(selectedIndex);
    }
    
    return (
        <>
            {/* <button variant="primary" onClick={handleShow} className='cart-btn'> Ver Producto </button> */}
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                <Modal.Title>Detalle Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="modal-body">
                    
                    <div className="product-card">
                        <h2> {data.product_name} </h2>
                        <Carousel activeIndex={indexCarousel} onSelect={handleSelectIndex} interval={null}>
                            {
                                data.presentations.map( el => (
                                    <Carousel.Item>
                                        <img src={el.img_link}/>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                        <div className="product-meta">
                            
                            <h5> {currentPresentation.name} </h5>
                            <p>Costo S/.{currentPresentation.cost}</p>
                            <button>Agregar al Carrito</button>
                        </div>
                    </div>

                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={hide}>
                    Guardar Cambios
                </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}