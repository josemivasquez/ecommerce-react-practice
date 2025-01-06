
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Button } from 'react-bootstrap';

import "./categoryEditModal.css"


// Dev Imports
import { categorias } from '../../../data.js'

export default function CategoryEditModal(){
    
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState(categorias)

    const [inputAdd, setInputAdd] = useState('')


    return (
    <>       
        <button onClick={()=> setShow(true)}> Crear Modal</button>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                    {categories.map((el, indx) => (
                        <div className='container-select'>
                            <input type='text' className='text-category' value={el} 
                            onChange={(e) => {
                                categories[indx] = e.target.value
                                setCategories([...categories])
                            }}
                            />
                            <button className='button-local' onClick={(e) => {
                                setCategories(categories.filter((x) => x != el))
                            }}> Borrar </button>
                        </div>
            
                    ))}

                        <div className='container-select'>
                            <input type='text' className='text-category' value={inputAdd}
                            onChange={(e) => setInputAdd(e.target.value)}
                            />
                            <button className='button-local' onClick={(e) => {
                                categories.push(inputAdd)
                                console.log(inputAdd)
                                setInputAdd('')
                                setCategories([...categories])
                            }}> Agregar Categoria </button>
                        </div>




                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary">
                Cerrar
            </Button>
            <Button variant="primary" >
                Guardar Cambios
            </Button>
            </Modal.Footer>
        </Modal>
    </>

    )
}