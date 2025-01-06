import './checkoutPage.css'

export default function Checkout() {
    return (
        <>
        <div className="in-titulo">
            <h1>BISUTERIA</h1>
        </div>
        <br />
        <div className="container">
        <div>
            <h2>Se generó su pedido correctamente</h2>
        </div>
        <br />
        <div>
            <h4>Su código de pedido es:</h4>
            <h2>CADJFIEO123</h2>
        </div>
        <br />
        <div><h3>Número de contacto: 983 262 732</h3></div>
        <br />
        <button>Mandar mensaje</button>
        <br />
        <button>Volver a la pagina principal</button>
        </div>
        </>
    )   
}