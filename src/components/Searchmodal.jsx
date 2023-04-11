import Modal from 'react-modal'
import { useState } from 'react'
import Searchlist from './Searchlist'
import { BsSearch } from 'react-icons/bs'

export default function Searchmodal(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    
    return(
        <>
            <button onClick={openModal} id="search-modal-btn"><BsSearch/></button>
            <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Search modal" ariaHideApp={false} id="search-modal-style">
                <Searchlist/>
            </Modal>
        </>
    )
    
}