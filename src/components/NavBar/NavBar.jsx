/* eslint-disable jsx-a11y/anchor-is-valid */
/**Utilizando librerias bootstrap y bootswatch */

import CartWidget from "../CartWidget/CartWidget"

const  NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid d-flex flex-md-row justify-content-between">
                <a className="navbar-brand ms-5 ms-md-0 align-self-start" href="#">Busco Libro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-around" id="navbarColor01">
                    <div className="d-flex flex-column flex-md-row">

                        <ul className="navbar-nav me-md-5 pe-md-5">
                            <li className="nav-item dropdown  me-md-2">
                                <a className="nav-link dropdown-toggle " data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Comprar</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Nuevos</a>
                                    <a className="dropdown-item " href="#">Usados</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Vender</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Nuevos</a>
                                    <a className="dropdown-item" href="#">Usados</a>
                                </div>
                            </li>
                        </ul>


                        <ul className="navbar-nav mt-1 d-flex flex-row justify-content-evenly">
                            <li className="nav-item me-md-5">
                                <button type="button" class="btn btn-outline-light ">Login</button>
                            </li>
                            <li className="nav-item me-md-4">
                                <button type="button" class="btn btn-outline-light">Sign in</button>
                            </li>
                        </ul>
                        <div className="mt-1 align-self-center">
                            <CartWidget />
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default NavBar
