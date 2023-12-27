import React, { useState } from 'react';
import styles from './styles/SearchResults.module.css';
import Track from './Track';
import generateId from '../utilities.js';

function SearchResults(props) { 

    return ( 
        <div className={styles.outerContainer}>
            <h2 className={styles.h2}>Results</h2>
            <div className={styles.resultsOuter}>
                <ul className={styles.ul}>
                    {props.tracks}
                </ul>
            </div>
        </div>
    )
}

export default SearchResults;