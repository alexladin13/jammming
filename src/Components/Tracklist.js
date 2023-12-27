import React, {useState, useEffect} from 'react';
import styles from './styles/Tracklist.module.css';
import Track from './Track';

function Tracklist(props) { 
    const [userInput, setUserInput] = useState('');

    function handleUserInput(e) { 
        setUserInput(e.target.value);
    }

    const handleSubmit = () => { 
        let uriList = [];
        props.songList.forEach(function(item) { 
            uriList.push(item.props.song.uri);
        });
        console.log(props.token);
        const headers = { Authorization: `Bearer ${props.token}`}
        let userID = '';
        return fetch('https://api.spotify.com/v1/me', { headers: headers})
            .then((response) => response.json())
            .then((jsonResponse) => { 
                userID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, { 
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ name: userInput }),
                })
                    .then((response) => response.json())
                    .then((jsonResponse) => { 
                        const playlistID = jsonResponse.id;
                        return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                            headers: headers,
                            method: "POST",
                            body: JSON.stringify({ uris : uriList}),
                        });
                    });
        });
        console.log('hereeee');
        props.clearPlaylist();
        setUserInput('');
    }

    return ( 
        <div className={styles.outerContainer}>
            <form>
                <input 
                    className={styles.input}
                    type='text'
                    onChange={handleUserInput}
                    value={userInput}
                />
            </form>
            <div className={styles.innerContainer}>
                <ul className={styles.ul}>
                    {props.songList}
                </ul>
            </div> 
            <button 
                className={styles.button}
                type='submit'
                onClick={handleSubmit}>
                Save to Spotify
            </button>
        </div>
    );
}

export default Tracklist;
