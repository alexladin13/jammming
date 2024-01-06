import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import SearchBar from './Components/SearchBar';
import Search from './Components/Search';
import ResultsAndPlaylist from './Components/ResultsAndPlaylist';
import Data from './Data/SampleData.json';
import Playlist from './Components/Playlist.js';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import generateId from './utilities.js';
import Song from './Components/Song.js';
import Track from './Components/Track.js';

function App() {

  const [token, setToken] = useState();
  const [listTracks, setListTracks] = useState([]);
  const [songList, setSongList] = useState([]);
  let localSongList = [];

  const handleTokenCallback = (token) => { 
    setToken(token);
    const hash = window.location.hash;
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
  }

  const handleSearchCallback = async (userInput) => { 

    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: { 
        Authorization: `Bearer ${token}`
      }, 
      params: { 
        q: userInput,
        type: "track"
      }
    });
    let returnedTracks = data.tracks.items;
    addSearchedSongsToList(returnedTracks);

  }

  const addSearchedSongsToList = (trackList) => { 

    setListTracks((prevList) => { 
      return [];
    });

    let index = 0;
    for (const track in trackList) { 
      const album = trackList[index].album.name;
      const artist = trackList[index].artists[0].name;
      const name = trackList[index].name;
      const uri = trackList[index].uri;

      const song = new Song(name, artist, album, uri);
      const id = generateId();

      setListTracks((prevList) => { 
        return [...prevList,
                <Track 
                song={song}
                key={id}
                isAdd={true}
                songList={songList}
                update={updatePlaylist}
                songId={id}/>];
      });

      index += 1;
    }
  }

  useEffect(() => { 

    const hash = window.location.hash;

    let token;

    if (hash.includes("&")) { 
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
    }

    if (!token && hash) { 
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        console.log(token);
        window.location.hash = "";
        window.localStorage.setItem("token", token);
    }
    
    setToken(token);

  }, []);


  function updatePlaylist(song, addSong, songListIn, songId) { 


      if (addSong) { 
          let isAlreadyInList = false;

          if (localSongList.includes(song)) { 
            
            isAlreadyInList = true;
          }

          setSongList((prevList) => {
              const id = generateId();
              localSongList.push(song);
              if (!isAlreadyInList) { 
                  return [<Track 
                      song={song}
                      key={id}
                      isAdd={false}
                      update={updatePlaylist}
                      songList={songList}
                      songId={id}/>,
                      ...prevList];
              } else { 
                  return [...prevList];
              }
          });
      } else { 

          setSongList((prevList) => {

              let index = 0;
              let indexToRemove = 0;
              prevList.forEach(function(item) { 
                  if (parseInt(item.key) === songId) { 
                      indexToRemove = index;
                  }
                  index += 1;
              });

              const songIndex = localSongList.indexOf(song);
              localSongList = localSongList.splice(songIndex, 1);

              const newList = [...prevList];
              newList.splice(indexToRemove,1);
              return newList;
          })
      }
  }

  const clearPlaylist = () => { 
    localSongList = [];
    setSongList([]);

  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner tokenCallback={handleTokenCallback}/>
        <SearchBar searchCallback={handleSearchCallback}/>
        <ResultsAndPlaylist key={listTracks} tracks={listTracks} songList={songList} token={token} clearPlaylist={clearPlaylist}/>
      </header>
    </div>
  );
}

export default App;
