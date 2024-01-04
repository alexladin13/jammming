import React from 'react';
import styles from './styles/Banner.module.css';
import AccessToken from './AccessToken';
import PickTheme from './PickTheme';

function Banner(props) { 

    return ( 
        <div className={styles.div}>
            <AccessToken className={styles.accessToken} tokenCallback={props.tokenCallback}/>
            <h1 className={styles.h1}>Ja<span className={styles.bannerAccent}>mmm</span>ing</h1>
            <PickTheme className={styles.pickTheme}/>
        </div>
    );
}

export default Banner;