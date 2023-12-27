import React from 'react';
import styles from './styles/Track.module.css';

function Track(props) { 

    const handleClick = (e) => { 
        if (props.isAdd) { 

            props.update(song, true, props.songList);
        } else { 


            props.update(song, false, props.songList, props.songId);
        }
    }

    let button = '-';

    if (props.isAdd) { 
        button = '+';
    }

    const song = props.song;
    if (!song) { 
        return null;
    }

    return ( 
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <h2 className={styles.h2}>{song.name}</h2>
                <h3 className={styles.h3}>{song.artist} | {song.album}</h3>
            </div>
            <button onClick={handleClick} className={styles.button}>
                {button}
            </button>
        </div>
    );
}

export default Track;