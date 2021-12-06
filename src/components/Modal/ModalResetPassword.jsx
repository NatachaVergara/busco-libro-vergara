import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

const ModalResetPassword = (props) => {


    return (
        <div>
            <Modal {...props} >
                <Modal.Header closeButton>
                    <Modal.Title>Revise su correo electronico</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className="text-success fs-5 bg-dark">
                    Se ha enviado un correo a su casilla de mail para que pueda hacer el reseteo de tu contraseña. <br/>
                    Gracias por confiar en nosotros.
                </Modal.Body>
                <Modal.Footer>
                   <Link to={'/login'}> <Button variant="secondary" onClick={props.onHide}>Close</Button></Link>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ModalResetPassword