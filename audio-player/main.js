let playerBg = document.querySelector(".player-bg"); 
let songTizer = document.querySelector(".song__tizer");
let songArtist = document.querySelector(".song__artist h1");
let songName = document.querySelector(".song__artist span");
let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let prevBtn = document.querySelector(".play-prev");
let nextBtn = document.querySelector(".play-next");
let isPlay = false; 
let playNum = 0; 
let currentNum = 0;

const audio = new Audio();
let playList = [
  {
    imgSrc: "assets/img/Alan-walker-1.jpg",
    songSrc: "assets/audio/Alan-Walker-ignite.mp3",
    songArtist: "Alan-walker",
    songName: "Ignite",
  },
  {
    imgSrc: "assets/img/Alban-Chela-1.jpg",
    songSrc: "assets/audio/Alban-Chela-1.mp3",
    songArtist: "Alban-Chela",
    songName: "You're My Reason Now",
  },
  {
    imgSrc: "assets/img/Alban-Chela-2.jpg",
    songSrc: "assets/audio/Alban-Chela-2.mp3",
    songArtist: "Alban-Chela",
    songName: "Million Dollar Mind",
  },
  {
    imgSrc: "assets/img/blinding-lights.jpg",
    songSrc: "assets/audio/Blinding-Lights.mp3",
    songArtist: "Marin Hoxha X Mike Watson",
    songName: "Blinding Lights (Magic Cover Release)",
  },
  {
    imgSrc: "assets/img/coldplay.jpg",
    songSrc: "assets/audio/Coldplay.mp3",
    songArtist: "Coldplay",
    songName: "A Sky Full of Stars",
  },
  {
    imgSrc: "assets/img/i-stand-alone.jpg",
    songSrc: "assets/audio/Godsmack.mp3",
    songArtist: "Godsmack",
    songName: "Stand alone",
  },
  {
    imgSrc: "assets/img/lost-sky.jpg",
    songSrc: "assets/audio/Lost-Sky.mp3",
    songArtist: "Dreams",
    songName: "Lost Sky",
  },
  {
    imgSrc: "assets/img/prince-of-persia.jpg",
    songSrc: "assets/audio/Prince-of-Persia-1.mp3",
    songArtist: "Prince-of-Persia",
    songName: "Warrior Within 6",
  },
  {
    imgSrc: "assets/img/war.jpg",
    songSrc: "assets/audio/War.mp3",
    songArtist: "Poets of the Fall",
    songName: "War",
  },
];

let playAudio = (song = 0) => {
    audio.src = playList[song].songSrc;
    playerBg.setAttribute('src', playList[song].imgSrc);
    songTizer.setAttribute("src", playList[song].imgSrc);
    songArtist.textContent = playList[currentNum].songArtist;
    songName.textContent = playList[currentNum].songName;
    songTizer.style.transform = "scale(1.1)";
    audio.currentTime = 0;
    audio.play(currentNum);
};

let pauseAudio = () => {
    songTizer.style.transform = "scale(1)";
    audio.pause();
};

let playNext = () => {
    playNum++;
    if (playNum >= playList.length){
        playNum = 0;
    }
    currentNum = playNum;
    playBtn.classList.add("pause");
    playAudio(currentNum);
};

let playPrev = () => {
    playNum--;
    if(playNum <= 0) {
        playNum = playList.length;
    }
    currentNum = playNum;
    playBtn.classList.add("pause");
    playAudio(playNum);
};

// клик на кнопку 'play'
let toggleBtn = () => {
    if (!playBtn.classList.contains("pause")) { // если музыка не включена
        playAudio(currentNum); // включаем
        isPlay = true;
    } else { // иначе выключаем
        pauseAudio(currentNum); 
        isPlay = false;
    }
    playBtn.classList.toggle("pause");
}

document.addEventListener("DOMContentLoaded", () =>{
    playBtn.addEventListener("click", toggleBtn);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrev);
});