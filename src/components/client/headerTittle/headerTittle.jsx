import {useEffect, useState} from 'react'


export default function HeaderTittle() {
    
    const [titulo, setTitulo] = useState('BIZUTERÍA')

    useEffect(() => {
        async function f(){
            console.log('on use effect')
            await fetch('http://localhost:3000/prueba', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',    
                }
            }).then(res => res.json()).then(data => setTitulo(data.message))
        }

        f()
    }, [])
    

    return (
        <div className="in-titulo">
                <h1>{titulo}</h1>
        </div>
    )
}