import React, { useState } from 'react';
import styles from './styles/SearchBar.module.css'
import Search from './Search.js';

function SearchBar(props) { 

    const [userInput, setUserInput] = useState('');

    function handleUserInput(e) { 
        setUserInput(e.target.value);
    }

    return ( 
        <div className={styles.searchBarOuter}>
            <form className={styles.form}>
                <input 
                    className={styles.input} 
                    id='searchBar' 
                    type='text' 
                    onChange={handleUserInput}
                    value={userInput}
                />
                <Search searchCallback={props.searchCallback} input={userInput}/>
        </form>
        </div>
    );
}

export default SearchBar;