import React from 'react';

class Song { 
    constructor(songName, songArtist, songAlbum, uri) { 
        this.name = songName;
        this.artist = songArtist;
        this.album = songAlbum;
        this.uri = uri;
    }

    // GETTERS

    getName() { 
        return this.name;
    }

    getArtist() { 
        return this.artist;
    }

    getAlbum() { 
        return this.album;
    }

    getUri() { 
        return this.uri;
    }

}

export default Song