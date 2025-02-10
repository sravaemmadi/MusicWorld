console.log("Welcome to Spotify");

let SongINdex = 0;
let audioElement = new Audio('masterPlay');
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgressBar');
let song = [
    {songName:"Naa Favourite", filePath: "Songs/[iSongs.info] 01 - Naa Favourite Naa Pellam.mp3", coverPath: "cover1/pelama.jpeg"},
    {songName:"New york", filePath: "Songs/03 - Newyork Nagaram  - SenSongsMp3.co.mp3", coverPath: "cover1/new york.jpg"},
    {songName:"Allasani Vaari", filePath: "Songs/Allasani Vaari - SenSongsMp3.Co.mp3", coverPath: "cover1/rashi.jpg"},
    {songName:"Attantode", filePath: "Songs/Attantode-SenSongsMp3.Com.mp3", coverPath: "cover1/devara.jpg"},
    {songName:"Kannuloni ", filePath: "Songs/Kannullo Ne Roopame-SenSongsMp3.Co.mp3", coverPath: "cover1/kallalonaga.jpg"},
    {songName:"Attantode", filePath: "Songs/Oosupodu-SenSongsMp3.Co.mp3", coverPath: "cover1/fida.jpg"},
    {songName:"Attantode", filePath: "Songs/Peelings.mp3", coverPath: "cover1/peelings.jpg"},
]


//Listen to events
myProgessBar.addEventListener('timeupdate',()=>()