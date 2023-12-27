import React, { useState } from 'react';

class Playlist { 

    constructor(playListName, playListSongs) { 
        this.name = playListName;
        this.songList = playListSongs;
    }

    // GETTERS

    getName() { 
        return this.name;
    }

    getSongList() { 
        return this.songList;
    }

    // SETTERS

    setName(newName) { 
        this.name = newName;
    }

    setSongList(newSongList) { 
        this.songList = newSongList;
    }

    // METHODS

    addSong(song) { 
        this.songList.push(song);
    }

    removeSong(song) { 
        const removeAtIndex = this.songList.indexOf(song);
        if (removeAtIndex > -1) { 
            this.songList.splice(removeAtIndex, 1);
        }
    }

}

export default Playlist;