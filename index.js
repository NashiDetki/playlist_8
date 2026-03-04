// есть скобки - метод
// нет скобок - свойство
const container = document.querySelector(".conteiner");
const songsContainer = container.querySelector(".songs-conteiner");
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");
const inputSong = container.querySelector(".input__text_type-song");
const inputArtist = container.querySelector(".input__text_type-artist");
const title_p = container.querySelector('.cover__heading')
const pop = container.querySelector('.help')

console.log(title_p)

function renderHasSongs() {
  resetButton.classList.remove("form__submit-btn_disabled");
  resetButton.removeAttribute("disabled");
  noSongsElement.classList.add("no_songs_hidden");
}

function renderNoSongs() {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("form__submit-btn_disabled");
  noSongsElement.classList.remove("no_songs_hidden");
}


function addSong(artistValue, titleValue) {
    const songTemplete = document.querySelector('#song-templete').content;
    // console.log(songTemplete);
    const songElement = songTemplete.querySelector('.song').cloneNode(true);
    // console.log(songElement);

    const artist = songElement.querySelector('.song__artist');
    artist.textContent = artistValue;

    // const title = songElement.querySelector('.song_title');
    // title.textContent = titleValue;
    // console.log(artist);
    songElement.querySelector('.song_title').textContent = titleValue

    // const song_like = songElement.querySelector('.song__like')
    // song_like.addEventListener('click', song_likee)

    songElement.querySelector('.song__like').addEventListener('click', function(evt){
      console.log(evt.target)
      evt.target.classList.toggle('song__like_active')
    })

    songsContainer.append(songElement);
}
function song_likee(){
  console.log('Кнопка нажата')
}

// const playList = {
//   Кино: "Кукушка",
//   Ария: "Штиль",
//   Любэ: "Родня",
//   Чайф: "Не спеши",
//   Чиж: "Полонез",
//   ДДТ: "Осень",
// };

// // console.log(playList);

// let artistPlayList = Object.keys(playList);
// // console.log(artistPlayList);

// let songPlayList = Object.values(playList);
// // console.log(songPlayList);

// for (let i = 0; i < artistPlayList.length; i++) {
//   addSong(artistPlayList[i], songPlayList[i]);
  
// }

addButton.addEventListener("click", function () {


  addSong(inputArtist.value, inputSong.value);
  renderHasSongs();

  inputArtist.value = "";
  inputSong.value = "";
});

resetButton.addEventListener("click", function (event) {
  const song = document.querySelectorAll('.song');
  // console.log(song);

  // songsContainer.innerHTML = "";

  for (let i=0; i < song.length; i++){
    // console.log(song[i]);
    song[i].remove(); 
    console.log(song);

  }

   
  renderNoSongs();
});


// renderNoSongs();
renderHasSongs();

// document.addEventListener('keypress', function(){
//   console.log('нажато')
// })

// document.addEventListener('keydown', function(){
//   console.log('нажа keydown')
// })

// document.addEventListener('keyup', function(){
//   console.log('podnita ')
// })

// inputSong.addEventListener('keyup',function(evt){
//   console.log(evt.key)
//   // console.log(Number(evt.key))
//   if (Number.isNan(Number(evt.key))){
//     prompt('ВВедено не число')
//   }
// })


inputSong.addEventListener('keydown', function(evt){
  // console.log(evt.key)
  if (evt.key === 'Enter'){
    addSong(inputArtist.value, inputSong.value);
    renderHasSongs()
    inputArtist.value = "";
    inputSong.value = "";
  } 
})

inputArtist.addEventListener('keydown',  function(evt){
  // console.log(evt.target)
    if (evt.key === 'Enter'){
    addSong(inputArtist.value, inputSong.value);
    renderHasSongs()
    inputArtist.value = "";
    inputSong.value = "";
    }
})

title_p.addEventListener('mouseover', function(evt){
  // pop.classList.remove('help')
  pop.setAttribute('style', `display: block;
                            position: absolute;
                            top: ${evt.clientY}px;
                            left: ${evt.clientX}px`)
  console.log(evt.clientY, evt.clientX)
})

renderNoSongs()