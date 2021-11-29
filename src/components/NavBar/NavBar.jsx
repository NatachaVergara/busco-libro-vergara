import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid d-flex flex-md-row justify-content-between">
                <Link className="navbar-brand ms-5 ms-md-0 align-self-start" to={'/'}>Busco Libro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-around" id="navbarColor01">
                    <div className="d-flex flex-column flex-md-row">
                        <ul className="navbar-nav me-md-5 pe-md-5 d-flex flex-column">
                            <Link to={'/'}
                                className="nav-item me-md-2 text-decoration-none">
                                Ver catálogo completo
                            </Link>
                            <li class="nav-item dropdown ">
                                <span
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Categorías</span>
                                <div
                                    className="dropdown-menu">
                                    <Link
                                        to={'/categoryId/infantil'}
                                        className="dropdown-item">Infantil</Link>
                                    <Link
                                        to={'/categoryId/novela'}
                                        className="dropdown-item">Novela</Link>
                                    <Link
                                        to={'/categoryId/enciclopedia'}
                                        className="dropdown-item">Enciclopedia</Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav mt-1 d-flex flex-row justify-content-evenly">
                            <li className="nav-item me-md-1">
                                <button
                                    type="button"
                                    class="btn btn-outline-light ">Login</button>
                            </li>
                            <li className="nav-item me-md-1">
                                <button
                                    type="button"
                                    class="btn btn-outline-light">Sign in</button>
                            </li>
                        </ul>
                        <Link to={'/cart'}
                            className="mt-1 align-self-center text-decoration-none">
                            <CartWidget />
                        </Link>
                    </div>
                </div>
            </div>
            </nav>
        </header>
    )
}
export default NavBar
