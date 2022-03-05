import React from 'react';
import { useEffect } from 'react';
import './styles/Modal.css'

const Modal = (props) => {

    const handleModal = () => props.setIsOpen(false)

    useEffect(() => {
        setTimeout(props.setIsOpen(false), 2000)
    }, [])

    return (
        <>
            {/* {props.isOpen && ( */}
                <div className='modal-bg'>
                    <div className="modal">
                            <p>Employee Created !</p><button className="modal-close" onClick={handleModal}>X</button>
                    </div>
                </div>
            {/* )} */}
        </>
    )
};

  export default Modal