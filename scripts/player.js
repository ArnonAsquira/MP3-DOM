const player = {
    songs: [
        {
            id: 1,
            title: "Vortex",
            album: "Wallflowers",
            artist: "Jinjer",
            duration: 242,
            coverArt: "./images/cover_art/jinjer_vortex.jpg",
        },
        {
            id: 2,
            title: "Vinda",
            album: "Godtfolk",
            artist: "Songleikr",
            duration: 160,
            coverArt: "./images/cover_art/songleikr_vinda.jpg",
        },
        {
            id: 7,
            title: "Shiroyama",
            album: "The Last Stand",
            artist: "Sabaton",
            duration: 213,
            coverArt: "./images/cover_art/sabaton_shiroyama.jpg",
        },
        {
            id: 3,
            title: "Thunderstruck",
            album: "The Razors Edge",
            artist: "AC/DC",
            duration: 292,
            coverArt: "./images/cover_art/acdc_thunderstruck.jpg",
        },
        {
            id: 4,
            title: "All is One",
            album: "All is One",
            artist: "Orphaned Land",
            duration: 270,
            coverArt: "./images/cover_art/orphaned_land_all_is_one.jpg",
        },
        {
            id: 5,
            title: "As a Stone",
            album: "Show Us What You Got",
            artist: "Full Trunk",
            duration: 259,
            coverArt: "./images/cover_art/full_trunk_as_a_stone.jpg",
        },
        {
            id: 6,
            title: "Sons of Winter and Stars",
            album: "Time I",
            artist: "Wintersun",
            duration: 811,
            coverArt: "./images/cover_art/wintersun_sons_of_winter_and_stars.jpg",
        },
    ],
    playlists: [
        { id: 1, name: "Metal", songs: [1, 7, 4, 6] },
        { id: 5, name: "Israeli", songs: [4, 5] },
    ],
}
//
function secondsToMinutesConvertor(songDuration){
    let durationInMinutes = songDuration / 60;
    let minutes = 0;
    let seconds = 0;
    let lengthFormat = 0;
    minutes = Math.floor(durationInMinutes);
    if(minutes < 10 && minutes > 0){
      minutes = "0" + minutes.toString();
    }else{
      minutes = minutes.toString();
    }
    seconds = (Math.round((durationInMinutes - minutes) * 60));
    if( seconds < 10 && seconds > 0){
      seconds = "0" + seconds.toString();
    }else{
      seconds = seconds.toString();
    }
    lengthFormat = minutes + ":" + seconds
    return lengthFormat
  }
  //getting a song object from an song id
  function getSongObjectById(id){
    let song = player.songs.filter(songObject => {
        if(songObject.id == id){
          return songObject;
        }
      })
       if(song.length == undefined){
        throw "undefined id";
      }
      song = song[0];
      return song;
} 

// get playlist by id function
  function getPlaylistById(id){
    let playlistById = player.playlists.filter(playlist =>{
        if(playlist.id === id){
          return playlist;
        }
      })
      return playlistById[0];
    }
    //playlist duration function
  function playlistDuration(id) {
    let requestedPlaylist = getPlaylistById(id);
    let songsLengthsArray = requestedPlaylist.songs.map(song => {
    return getSongObjectById(song).duration})
    let totalDuration = (songsLengthsArray.reduce((acc, value) => {
      acc += value;
      return acc;
    }))
    return secondsToMinutesConvertor(totalDuration);
    }
      // converts string minutes format to secoonds
  function convertToseconds(durationInMinutes){
    let minutes = Number(durationInMinutes.split("").slice(0, 2).join(""));
    let seconds = Number(durationInMinutes.split("").slice(3, 5).join(""));
    let totalTime = (minutes * 60) + seconds;
    return totalTime
}