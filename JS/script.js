let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const surah_list = [
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/001.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/002.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/003.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/004.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/005.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/006.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/007.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/008.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/009.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/010.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/011.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/012.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/013.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/014.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/015.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/016.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/017.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/018.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/019.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/020.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/021.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/022.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/023.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/024.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/025.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/026.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/027.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/028.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/029.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/030.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/031.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/032.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/033.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/034.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/035.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/036.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/037.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/038.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/039.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/040.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/041.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/042.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/043.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/044.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/045.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/046.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/047.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/048.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/049.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/050.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/051.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/052.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/053.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/054.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/055.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/056.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'hhttps://server12.mp3quran.net/maher/057.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/058.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/059.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/060.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/061.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/062.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/063.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/064.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/065.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/066.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/067.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/068.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/069.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/070.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/071.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/072.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/073.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/074.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/075.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/076.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/077.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/078.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/079.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/080.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/081.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/082.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/083.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/004.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/085.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/086.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/087.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/088.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/089.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/090.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/091.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/092.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/093.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/094.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/095.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/096.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/097.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/098.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/099.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/100.mp3'
    },

    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/101.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/102.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/103.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/104.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/105.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/106.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/107.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/108.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'https://server12.mp3quran.net/maher/109.mp3'
    },
    {
        img : 'images/image5.jpg',
        surah : 'https://server12.mp3quran.net/maher/110.mp3'
    },
    {
        img : 'images/image1.jpeg',
        surah : 'https://server12.mp3quran.net/maher/111.mp3'
    },
    {
        img : 'images/image2.jpg',
        surah : 'https://server12.mp3quran.net/maher/112.mp3'
    },
    {
        img : 'images/image3.jpg',
        surah : 'https://server12.mp3quran.net/maher/113.mp3'
    },
    {
        img : 'images/image4.jpg',
        surah : 'hhttps://server12.mp3quran.net/maher/114.mp3'
    },
];


loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();


    curr_track.src = surah_list[track_index].surah;
    curr_track.load();


    track_art.style.backgroundImage = "url(" + surah_list[track_index].img + ")";
    fetch("https://api.alquran.cloud/v1/meta")
    .then(response => response.json())
    .then(data => {
        let surahs = data.data.surahs.references;      
            track_name.innerHTML= `${surahs[track_index].name}`;

    })

    track_artist.textContent = "Maher Al Muaiqly";
    now_playing.textContent = "Playing " + (track_index + 1) + " of " +114;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x btn-icon-play"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x btn-icon-play"></i>';
}
function nextTrack(){
    if(track_index < surah_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < surah_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * surah_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = surah_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
