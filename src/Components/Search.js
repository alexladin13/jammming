import React from 'react';
import styles from './styles/Search.module.css';

function Search(props) { 

    const handleSubmit = (e) => { 
        e.preventDefault();
        props.searchCallback(props.input);
    }

    return ( 
        <button 
            className={styles.button}
            onClick={handleSubmit}>Search</button>
    );
}

export default Search;