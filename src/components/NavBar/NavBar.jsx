/* eslint-disable jsx-a11y/anchor-is-valid */
/**Utilizando librerias bootstrap y bootswatch */

import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid d-flex flex-md-row justify-content-between bg-danger">
                <a className="navbar-brand align-self-start" href="#">Busco Libro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <div className="d-flex flex-column flex-md-row justify-content-md-around bg-dark">
                        <>
                            <ul className="navbar-nav d-flex flex-column flex-md-row mb-2 bg-info">
                                <li className="nav-item dropdown ">
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
                        </>
                        <>
                            <ul className="navbar-nav d-flex flex-row justify-content-evenly bg-light">
                                <li className="nav-item">
                                    <button type="button" class="btn btn-outline-light ">Login</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" class="btn btn-outline-light">Sign in</button>
                                </li>
                            </ul>
                            <CartWidget />
                        </>
                       
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default NavBar
