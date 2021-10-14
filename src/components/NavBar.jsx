/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'



function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand ms-md-5" href="#">Busco Libro</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-xl-flex " id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Comprar
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vender</a>
                        </li>                        
                    </ul>
                    <ul className="navbar-nav me-auto ms-md-5 ps-md-5">
                        <li className="nav-item mb-2">
                            <button type="button" class="btn btn-outline-dark">Login</button>
                        </li>
                        <li className="nav-item ms-md-2">
                            <button type="button" class="btn btn-outline-dark">Sign in</button>
                        </li>
                    </ul>                  
                </div>
                           
            </div>
            
        </nav>
    )
}
export default NavBar
