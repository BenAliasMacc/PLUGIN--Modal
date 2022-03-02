import './styles/Modal.css'


const Modal = ({isOpen, setIsOpen}) => {

    const handleModal = () => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <div className='modal-bg'>
                    <div className="modal">
                            <p>Employee Created!</p><button className="modal-close" onClick={handleModal}>X</button>
                    </div>
                </div>
            )}
        </>
    )
};

  export default Modal