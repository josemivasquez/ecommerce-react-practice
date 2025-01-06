import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import './productEditModal.css'



export default function ProductEditModal({show, hide, product_data, saveChanges}) {
    const [productDataLocal, setProductDataLocal] = useState(product_data)
    const deleted = useRef([])

    useEffect(()=>{
        // Just on the display render
        deleted.current = []
        setProductDataLocal({...product_data})
        productDataLocal.presentations.forEach((e) => {
            e.saved = true;
            e.updated = false;
        });
        setProductDataLocal({...productDataLocal})
    }, [product_data])
   

    const [currentPresentation, setCurrentPresentation] = useState(productDataLocal.presentations[0])
    const [activeIndex, setActiveIndex] = useState(0)

    function handleSelect(selected){
        setActiveIndex(selected)
        setCurrentPresentation(productDataLocal.presentations[selected])
    }

    function handleNewPresentation() {
        productDataLocal.presentations.push({
            presentation_name: '',
            presentation_cost: 0,
            img_link: 'https://img.freepik.com/foto-gratis/resumen-superficie-texturas-muro-piedra-hormigon-blanco_74190-8189.jpg',
            saved: false,
        })
        handleSelect(productDataLocal.presentations.length - 1)
    }

    function handleDeletePresentation() {
        const victim = productDataLocal.presentations[activeIndex]
        if (victim.saved) deleted.current.push(victim)
        productDataLocal.presentations.splice(activeIndex, 1)
        setCurrentPresentation({...currentPresentation})
    }

    function handleUploadImage(e) {

        target = productDataLocal.presentations[activeIndex]
        const url = URL.createObjectURL(e.target.files[0])
        target.img_link = url

        if (target.saved) target.updated = true;
        setCurrentPresentation({...currentPresentation})
    }


    return (
        <>
            <Modal show={show} onHide={hide} >
                <Modal.Header closeButton>
                    <Modal.Title> Editar Producto </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="modal-body">
                    <button> Eliminar Producto </button>
                    <div className="product-card">
                        <div className="input-container">
                            <label htmlFor="inp_nombre">Nombre: </label>
                            <input id="inp_nombre" type='text' value={productDataLocal.product_name} 
                            onChange={(e)=>{productDataLocal.product_name = e.target.value; setProductDataLocal({...productDataLocal})}} />
                        </div>
                        
                        <div className='input-container'>
                            <label htmlFor="inp_relevancia"> Relevancia: </label>
                            <input type='number' value={productDataLocal.relevancia} 
                            onChange={(e) => {productDataLocal.relevancia = e.target.value; setProductDataLocal({...productDataLocal})}} />
                        </div>
                        
                        <button onClick={handleNewPresentation}> Agregar Presentacion </button>


                        <Carousel className='carousel' activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
                        {
                            productDataLocal.presentations.map( el => (
                                <Carousel.Item>
                                    <img src={el.img_link} />
                                </Carousel.Item>
                            ))
                        }
                        </Carousel>

                        <button className='btn btn-danger' onClick={handleDeletePresentation}> Eliminar Presentacion </button>
                        

                        <div className="input-container">
                            <label htmlFor="inp_image"> Cambiar Imagen </label>
                            <input onChange={handleUploadImage} id="inp_image" type="file"/>
                        </div>

                        <div className="input-container">
                            <label htmlFor="inp_nombre_pres"> Nombre Presentacion </label>
                            <input id="inp_nombre_pres" type="text" 
                            value={currentPresentation.presentation_name}
                            onChange={(e) => {
                                const target = productDataLocal.presentations[activeIndex]
                                target.presentation_name = e.target.value
                                if (target.saved) target.updated = true;
                                setCurrentPresentation({...productDataLocal.presentations[activeIndex]})
                            }} />
                        </div>

                        <div className="input-container">
                            <label htmlFor="inp_cost_pres"> Costo Presentacion </label>
                            <input id="inp_cost_pres" type='number' 
                            value={currentPresentation.presentation_cost} 
                            onChange={(e) => {
                                const target = productDataLocal.presentations[activeIndex]
                                target.presentation_cost = e.target.value
                                if (target.saved) target.updated = true;
                                setCurrentPresentation({...productDataLocal.presentations[activeIndex]})
                            }}
                            />
                        </div>
                    </div>

                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={()=>saveChanges(productDataLocal, deleted)}>
                    Guardar Cambios
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}