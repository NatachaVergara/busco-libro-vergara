/* eslint-disable jsx-a11y/anchor-is-valid */
/**Utilizando librerias bootstrap y bootswatch */

import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const  NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid d-flex flex-md-row justify-content-between">
                <Link className="navbar-brand ms-5 ms-md-0 align-self-start" to={'/'}>Busco Libro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-around" id="navbarColor01">
                    <div className="d-flex flex-column flex-md-row">

                        <ul className="navbar-nav me-md-5 pe-md-5">
                            <Link to={'/catalogo'} className="nav-item me-md-2 text-decoration-none">
                               Ver catálogo y comprar
                            </Link>
                            {/* <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Vender</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Nuevos</a>
                                    <a className="dropdown-item" href="#">Usados</a>
                                </div>
                            </li> */}
                        </ul>


                        <ul className="navbar-nav mt-1 d-flex flex-row justify-content-evenly">
                            <li className="nav-item me-md-5">
                                <button type="button" class="btn btn-outline-light ">Login</button>
                            </li>
                            <li className="nav-item me-md-4">
                                <button type="button" class="btn btn-outline-light">Sign in</button>
                            </li>
                        </ul>
                        <Link to={'/cart'} className="mt-1 align-self-center text-decoration-none">
                            <CartWidget />
                        </Link>
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default NavBar
