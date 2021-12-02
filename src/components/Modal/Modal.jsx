import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

const ModalForm = (props) => {
  

    return (
        <div>
            <Modal {...props} >
                <Modal.Header closeButton>
                    <Modal.Title>Compra finalizada con éxito</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className="text-success fs-5 bg-dark"> El id de su orden es: {props.orderId} y el total es ${props.total} <br/>
                    El producto sera enviado en las proximas 48hrs.
                    ¡Gracias por confirar en nosotros!
                </Modal.Body>
                <Modal.Footer>
                 <Link to="/" > <Button variant="secondary" onClick={props.onHide}>Close</Button></Link>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ModalForm
