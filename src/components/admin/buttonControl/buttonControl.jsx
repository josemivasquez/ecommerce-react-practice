import './buttonControl.css'

export default function ButtonControl({newProduct}){
    console.log(newProduct)
    return(
        <div className='button-container'>
            <div className="control-navbar">
                <button>Editar Categorias</button>
            </div>
            <div className='control-grid'>
                <button>Eliminar Seleccionados</button>
                <button onClick={newProduct}>Añadir Producto</button>
            </div>
        </div>
    )
}
