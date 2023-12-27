import React, { useState, useEffect} from 'react';
import styles from './styles/AccessToken.module.css';
import { FaRegUserCircle, FaTimes } from 'react-icons/fa';

function AccessToken(props) { 

    const CLIENT_ID = "5157da9071204f82aeee80ad4b088573";
    const REDIRECT_URI = "http://alexladin13.github.io/jammming";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [modal, setModal] = useState(false);
    const [token, setToken] = useState();

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleLogIn = () => { 
        toggleModal();
        props.tokenCallback(token);
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
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                    <button className={styles.button} onClick={handleLogIn}>
                        Log In
                    </button>
                </a>
                <button className={styles.closeModal} onClick={toggleModal}>
                  <FaTimes className={styles.FaWindowClose}/>
                </button>
              </div>
            </div>
          )}
        </>
    );
}

export default AccessToken;