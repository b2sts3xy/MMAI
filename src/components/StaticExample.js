import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Modal.css'


function StaticExample() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <div className='buyBtn' onClick={handleShow}>Buy MMAI NOW!</div>
              <Modal show={show} onHide={handleClose} size='xl'>
                <div>
                  하이
                </div>
              </Modal>
        </div>
    )
}
export default StaticExample;