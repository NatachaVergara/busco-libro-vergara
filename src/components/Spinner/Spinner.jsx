import React from 'react'
import { Spinner } from 'react-bootstrap'

const Spiner = ({ mensaje }) => {
    return (
        <div className="container d-flex justify-content-center mt-5 animate__animated animate__slideInLeft">
            <Spinner animation="grow" variant="dark" />
            <h3 className="ms-1 text-center">{mensaje} </h3>
        </div>
    )
}

export default Spiner


