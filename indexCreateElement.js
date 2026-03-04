const container = document.querySelector(".conteiner");
const songsContainer = container.querySelector(".songs-conteiner");
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");

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

function addSong(artist, title) {
  //  songsContainer.insertAdjacentHTML('beforeend', `<div class="song">
  //                                                     <h4 class="song__artist">${artist}</h4>
  //                                                     <p class="song_title">${title}</p>
  //                                                     <button class="song__like"></button>
  //                                                  </div>`);

  const trackConteiner = document.createElement("div");
  // console.log(trackConteiner);
  trackConteiner.classList.add("song");
  // console.log(trackConteiner);

  const artistElement = document.createElement("h4");
  artistElement.classList.add("song__artist");
  // console.log(artistElement);
  artistElement.textContent = artist;
  // console.log(artistElement);

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = title;
  // console.log(titleElement);

  const likeButtonElement = document.createElement("button");
  likeButtonElement.classList.add("song__like");
  // console.log(likeButtonElement);

  trackConteiner.append(artistElement, titleElement, likeButtonElement);
  songsContainer.prepend(trackConteiner);
}

const playList = {
  Кино: "Кукушка",
  Ария: "Штиль",
  Любэ: "Родня",
  Чайф: "Не спеши",
  Чиж: "Полонез",
  ДДТ: "Осень",
};

// console.log(playList);

let artistPlayList = Object.keys(playList);
// console.log(artistPlayList);

let songPlayList = Object.values(playList);
// console.log(songPlayList);

for (let i = 0; i < artistPlayList.length; i++) {
  addSong(artistPlayList[i], songPlayList[i]);
  
}

addButton.addEventListener("click", function () {
  const inputSong = container.querySelector(".input__text_type-song");
  const inputArtist = container.querySelector(".input__text_type-artist");

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