import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CompraFinalizada = (props) => {

    
    return (
        <div>
            <Modal
                {...props}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.orderId}  </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        
        </div>
    )
}

export default CompraFinalizada
