import React, { useState, useEffect} from 'react';
import styles from './styles/PickTheme.module.css';
import { FaRegUserCircle, FaTimes } from 'react-icons/fa';

function PickTheme(props) { 

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleLogIn = () => { 
        toggleModal();
    }

    if(modal) {
        document.body.classList.add(styles.activeModal)
    } else {
        document.body.classList.remove(styles.activeModal)
    }

    function handleClick() { 
        toggleModal();
    }

    return (
        <> 
        <button onClick={toggleModal} className={styles.accessButton}>
            <FaRegUserCircle className={styles.FaKey}/>
        </button>
        {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modalContent}>
                <h2 className={styles.h2}>Spotify Log In</h2>
                <button className={styles.closeModal} onClick={toggleModal}>
                  <FaTimes className={styles.FaWindowClose}/>
                </button>
              </div>
            </div>
          )}
        </>
    );
}

export default PickTheme;