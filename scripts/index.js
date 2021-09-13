/**
 * 
 * Plays a song from the player.
 * Playing a song means changing the visual indication of the currently playing song.
 *
 * @param {String} songId - the ID of the song to play
 */
function playSong(songId) {
    let otherSongs = document.getElementsByClassName('songShell');
    for(let otherSong of otherSongs){
        otherSong.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    document.getElementById(songId).style.backgroundColor = "red";

    if(songId < 7){
        window.setTimeout(function(){playSong(songId + 1);} ,getSongObjectById(songId).duration * 1000);
    }
    // Your code here
}

/**
 * Creates a song DOM element based on a song object.
 */
function createSongElement({ id, title, album, artist, duration, coverArt }) {
        let SongTitle = createElement('h1', children = [title], classes = ['songTitles'], attributes = {});
        let songAlbum = createElement('h2', children = ["ablbum: " + album], classes = [], attributes = {});
        let songArtist = createElement('h2', children = ["by: " + artist], classes = [], attributes = {});
        let songDuration = createElement('span', children = [secondsToMinutesConvertor(duration)], classes = [], attributes = {});
        let songCoverArt  = createElement('img', children = [], classes = [], attributes = {src: coverArt})
        let uniqueSongDiv = createElement('div', children = [SongTitle, songAlbum, songArtist, songDuration, songCoverArt], classes = ['songShell'], attributes = {id: id});
        console.log(uniqueSongDiv);
        uniqueSongDiv.setAttribute('onclick', `playSong(${id})`)
        const attrs = { onclick: `playSong(${id})` } 
        return uniqueSongDiv;
    }
for(let song of player.songs){
    let songsDiv = document.getElementById('songs');
    songsDiv.append(createSongElement(song));
}
/**
 * Creates a playlist DOM element based on a playlist object.
 */
function createPlaylistElement({ id, name, songs }) {
    let playlistName = createElement('h1', children = [name + "-playlist"], classes = [], attributes = {});
    let playlistSongs = createElement('h2', children = ["amount of songs: " + songs.length], classes = [], attributes = {});
    let playlistTotalDuration = createElement('span', children = ["duration - " + playlistDuration(id)], classes = [], attributes = {});
    let uniquePlaylistDiv = createElement('div', children = [playlistName, playlistSongs, playlistTotalDuration], classes = ['playlistShell'], attributes = {});
    return uniquePlaylistDiv;
}
for(let playlist of player.playlists){
    let playlistDiv = document.getElementById('playlists');
     playlistDiv.append(createPlaylistElement(playlist));
}
/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */
function createElement(tagName, children = [], classes = [], attributes = {}) {
  let newEl = document.createElement(tagName);
  for(let child of children){
      if(typeof(child) === "string"){
          child = document.createTextNode(child);
      }
       newEl.append(child);
  }
  for(let cls of classes){
      newEl.classList.add(cls);
  }
  for(let attr in attributes){
      newEl.setAttribute(attr, attributes[attr]);
  }

  return newEl
}
console.log(createSongElement('h1', [player.songs[0].title], "songTitles"));

// You can write more code below this line
let songDuration = document.querySelectorAll(".songShell p");
let SongDurationArray = Array.from(songDuration);
for(let i = 0; i < SongDurationArray.length; i++){
    let redAmount = player.songs[i].duration;
    SongDurationArray[i].style.color = ("rgb(" + redAmount * 0.8 + ","+(100000/redAmount)+ ",0)");
}
