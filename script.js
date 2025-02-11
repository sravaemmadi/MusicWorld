console.log("Welcome to Spotify");

let SongIndex = 0;
let audioElement = new Audio('Songs/[iSongs.info] 01 - Naa Favourite Naa Pellam.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Naa Favourite", filePath: "Songs/[iSongs.info] 01 - Naa Favourite Naa Pellam.mp3", coverPath: "cover1/pelama.jpeg"},
    {songName: "New york", filePath: "Songs/03 - Newyork Nagaram  - SenSongsMp3.co.mp3", coverPath: "cover1/new york.jpg"},
    {songName: "Allasani Vaari", filePath: "Songs/Allasani Vaari - SenSongsMp3.Co.mp3", coverPath: "cover1/rashi.jpg"},
    {songName: "Attantode", filePath: "Songs/Attantode-SenSongsMp3.Com.mp3", coverPath: "cover1/devara.jpg"},
    {songName: "Kannuloni", filePath: "Songs/Kannullo Ne Roopame-SenSongsMp3.Co.mp3", coverPath: "cover1/kallalonaga.jpg"},
    {songName: "OOsupodu", filePath: "Songs/Oosupodu-SenSongsMp3.Co.mp3", coverPath: "cover1/fida.jpg"},
    {songName: "Peelings", filePath: "Songs/Peelings.mp3", coverPath: "cover1/peelings.jpg"},
]

// Fixing the `forEach` loop for song item display
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Play/Pause functionality
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        SongIndex = Number(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[SongIndex].filePath;
        masterSongName.innerText = songs[SongIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >= songs.length - 1) {
        SongIndex = 0;
    } else {
        SongIndex += 1; 
    }
    audioElement.src = songs[SongIndex].filePath;
    masterSongName.innerText = songs[SongIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 0;
    } else {
        SongIndex -= 1; 
    }
    audioElement.src = songs[SongIndex].filePath;
    masterSongName.innerText = songs[SongIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});