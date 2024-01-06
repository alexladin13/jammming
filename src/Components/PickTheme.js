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

        switch(color){ 
            case "red":
                document.documentElement.style.cssText = "--secondary: red --tertiary: #f75c5c";
                break;
            case "orange":
                document.documentElement.style.cssText = "--secondary: orange";
                document.documentElement.style.cssText = "--tertiary: #f5a96c";
                break;
            case "yellow":
                document.documentElement.style.cssText = "--secondary: yellow";
                document.documentElement.style.cssText = "--tertiary: #f5f387";
                break;
            case "green":
                document.documentElement.style.cssText = "--secondary: green";
                document.documentElement.style.cssText = "--tertiary: #6df78d";
                break;
            case "violet":
                document.documentElement.style.cssText = "--secondary: violet";
                document.documentElement.style.cssText = "--tertiary: #cd64e0";
                break;
            case "blue":
                document.documentElement.style.cssText = "--secondary: blue";
                document.documentElement.style.cssText = "--tertiary: #5291f7";
                break;
            default:
                console.log("Error");
        }

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
                    <button onClick={() => handleThemeChange("red")} className={`${styles.themeButton} ${styles.redBackground}`}></button>
                    <button onClick={() => handleThemeChange("orange")} className={`${styles.themeButton} ${styles.orangeBackground}`}></button>
                    <button onClick={() => handleThemeChange("yellow")} className={`${styles.themeButton} ${styles.yellowBackground}`}></button>
                    <button onClick={() => handleThemeChange("green")} className={`${styles.themeButton} ${styles.greenBackground}`}></button>
                    <button onClick={() => handleThemeChange("violet")} className={`${styles.themeButton} ${styles.violetBackground}`}></button>
                    <button onClick={() => handleThemeChange("blue")} className={`${styles.themeButton} ${styles.blueBackground}`}></button>
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