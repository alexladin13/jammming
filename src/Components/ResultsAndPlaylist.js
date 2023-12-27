import React, {useState, useEffect} from 'react';
import Tracklist from './Tracklist';
import SearchResults from './SearchResults';
import styles from './styles/ResultsAndPlaylist.module.css';
import Track from './Track';
import generateId from '../utilities.js';
import Song from './Song.js';

function ResultsAndPlaylist(props) { 

    return (
        <div className={styles.ResultsPlaylistOuter}>
            <SearchResults tracks={props.tracks}/>
            <Tracklist songList={props.songList} token={props.token} clearPlaylist={props.clearPlaylist}/>   
        </div>
    );
}

export default ResultsAndPlaylist;