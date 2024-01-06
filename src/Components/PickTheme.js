import React, { useState, useEffect} from 'react';
import styles from './styles/PickTheme.module.css';
import { FaTimes } from 'react-icons/fa';
import { LuPaintbrush } from "react-icons/lu";

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

    const handleThemeChange = (color) => {
        console.log(color)
    }

    return (
        <> 
        <button onClick={toggleModal} className={styles.accessButton}>
            <LuPaintbrush className={styles.FaKey}/>
        </button>
        {modal && (
            <div className={styles.modal}>
              <div onClick={toggleModal} className={styles.overlay}></div>
              <div className={styles.modalContent}>
                <h2 className={styles.h2}>Choose your theme</h2>
                <ul className={styles.themeList}>
                    <button className={`${styles.themeButton} ${styles.redBackground}`} onClick={handleThemeChange("blue")}></button>
                    <button className={`${styles.themeButton} ${styles.orangeBackground}`}></button>
                    <button className={`${styles.themeButton} ${styles.yellowBackground}`}></button>
                    <button className={`${styles.themeButton} ${styles.greenBackground}`}></button>
                    <button className={`${styles.themeButton} ${styles.violetBackground}`}></button>
                    <button className={`${styles.themeButton} ${styles.blueBackground}`}></button>
                </ul>
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