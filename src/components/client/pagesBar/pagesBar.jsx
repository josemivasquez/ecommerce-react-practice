import './pagesBar.css'
import { useState } from 'react'

export default function PagesBar({before, after, changePage}){

    const [numberInput, setNumberInput] = useState()

    return(
        <div className='bar-container'>
            <div className="button-container">
                <button onClick={before} > { "Anterior"} </button>
                <button onClick={after} > { "Siguiente" } </button>
            </div>
            

            <div className='input-container'>
                <input type="number" value={numberInput} onChange={(e) => setNumberInput(e.target.value)}/>
                <button onClick={() => changePage(numberInput)}> Ir a la página </button>
            </div>
        </div>
    )
}
