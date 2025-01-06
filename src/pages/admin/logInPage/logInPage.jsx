import { useState } from 'react'
import './logInPage.css'
import HeaderTittle from '../../../components/client/headerTittle/headerTittle';

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Usuario: ', username)
        console.log('Contraseña: ', password)
    }

    function handleChange(e) {
        const { name, value } = e.target
        name === 'username' ? setUsername(value) : setPassword(value)
    }
    
    return (
        <>
        <HeaderTittle></HeaderTittle>
        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center" >
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" onSubmit={handleSubmit} method="post">
                        <h3 className="text-center"> INICIO DE SESIÓN </h3>
                        <div className="form-group">
                            <label htmlFor="username" className='text-user' >
                                Usuario:
                            </label>
                            <br />
                            <input type="text" name="username" id="username" className="form-control" value={username} 
                            onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='text-user'> Contraseña: </label>
                            <br />
                            <input type="password" name="password" id="password" className="form-control" value={password} 
                            onChange={handleChange}/>
                        </div>
                        <div className="form-group">
              
                        <br />
                        <button>iniciar sesion</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}