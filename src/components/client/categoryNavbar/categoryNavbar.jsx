import { Link } from 'react-router-dom'
import './CategoryNavbar.css'

export default function CategoryNavbar() {
    const catNames = ['Inicio','Anillos', 'Collares', 'Aretes', 'Joyas', 'Otros'];

    return (
        <div className="navbar-container">
            <nav>
            <ul>
                {
                    catNames.map( (el) => (
                        <li className="navbar-container-nav-ul-li">
                                <Link to='/cat'>
                                    <a href="">{el}</a> 
                                </Link>
                        </li>
                    ))
                }
            </ul>
            </nav>
        </div>
    )
}
