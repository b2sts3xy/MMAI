import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Modal.css'

function StaticExampleVideo() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='btnSol2'>
            <div onClick={handleShow}>PureWallet Demo Video</div>
            <Modal show={show} onHide={handleClose} size='xl'>
                <video autoplay='autoplay' muted='muted' src='https://mmaipure.files.wordpress.com/2022/11/puprewallet_vido.mp4'></video>
            </Modal>
        </div>
    )
}
export default StaticExampleVideo;