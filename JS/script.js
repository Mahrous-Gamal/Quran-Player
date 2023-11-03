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

const music_list = [
    {
        img : 'images/image1.jpeg',
        name : 'سورة عبس',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Aabs _ ماهر المعيقلي سورة عبس(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة الكافرون',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Al-kafron _ ماهر المعيقلي سورة الكافرون(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة الكوثر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Al-kothar _ ماهر المعيقلي سورة الكوثر(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة الماعون',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Al-maaon _ ماهر المعيقلي سورة الماعون(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة الشمس',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Al-shamms _ ماهر المعيقلي سورة الشمس(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة الاعلى',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alaala _ ماهر المعيقلي سورة الاعلى(MP3_320K).mp3'
    },
    {
        img : 'images/image1.jpeg',
        name : 'سورة العاديات',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Aladiat _ ماهر المعيقلي سورة العاديات(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة الإخلاص',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alakhlas _ ماهر المعيقلي سورة الإخلاص(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة العلق',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alalq _ ماهر المعيقلي سورة العلق(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة الانفطار',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alanfetar _ ماهر المعيقلي سورة الانفطار(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة الانشقاق',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alanshqaq _ ماهر المعيقلي سورة الانشقاق(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة العصر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alasr _ ماهر المعيقلي سورة العصر(MP3_320K).mp3'
    },
    {
        img : 'images/image1.jpeg',
        name : 'سورة البلد',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Albald _ ماهر المعيقلي سورة البلد(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة البينه',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Albenh _ ماهر المعيقلي سورة البينه(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة البروج',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Albroj _ ماهر المعيقلي سورة البروج(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة الضحى',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat AlDuha _ ماهر المعيقلي سورة الضحى(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة الفيل',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alfel _ ماهر المعيقلي سورة الفيل(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة الفلق',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alfilq _ ماهر المعيقلي سورة الفلق(MP3_320K).mp3'
    },
    {
        img : 'images/image1.jpeg',
        name : 'سورة الفجر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alfjr _ ماهر المعيقلي سورة الفجر(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة الغاشية',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Algasheh _ ماهر المعيقلي سورة الغاشية(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة الهمزة',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alhomzah _ ماهر المعيقلي سورة الهمزة(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة القدر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat ALkaddr _ ماهر المعيقلي سورة القدر(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة الليل',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Allil _ ماهر المعيقلي سورة الليل(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة المسد',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Almassad _ ماهر المعيقلي سورة المسد(MP3_320K).mp3'
    },
    {
        img : 'images/image1.jpeg',
        name : 'سورة المطففين',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat AlMutaffen _ ماهر المعيقلي سورة المطففين(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة الناس',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alnnas _ ماهر المعيقلي سورة الناس(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة النصر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alnnsr _ ماهر المعيقلي سورة النصر(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة القارعه',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alqariah _ ماهر المعيقلي سورة القارعه(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة الشرح',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alsharh _ ماهر المعيقلي سورة الشرح(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة الطارق',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat ALTarrq _ ماهر المعيقلي سورة الطارق(MP3_320K).mp3'
    },
    {
        img : 'images/image1.jpeg',
        name : 'سورة التكوير',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Altkwer _ ماهر المعيقلي سورة التكوير(MP3_320K).mp3'
    },
    {
        img : 'images/image2.jpg',
        name : 'سورة التين',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Alttin _ ماهر المعيقلي سورة التين(MP3_320K).mp3'
    },
    {
        img : 'images/image3.jpg',
        name : 'سورة الزلزله',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat alzlzlh _ ماهر المعيقلي سورة الزلزله(MP3_320K).mp3'
    },
    {
        img : 'images/image4.jpg',
        name : 'سورة التكاثر',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Atakathur _ ماهر المعيقلي سورة التكاثر(MP3_320K).mp3'
    },
    {
        img : 'images/image5.jpg',
        name : 'سورة قريش',
        artist : 'Maher Al Muaiqly',
        music : 'music/Surat Quraish _ ماهر المعيقلي سورة قريش(MP3_320K).mp3'
    },
    {
        img : 'images/image6.jpg',
        name : 'سورة الفاتحه',
        artist : 'Maher Al Muaiqly',
        music : 'music/ماهر المعيقلي سورة الفاتحه  _  Surat Al-Fatihah(MP3_320K).mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

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
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
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
        track_index = music_list.length -1;
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
