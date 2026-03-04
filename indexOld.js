const container = document.querySelector('.conteiner');
const songsContainer = container.querySelector('.songs-conteiner');
const addButton = container.querySelector('.form__submit-btn_action_add');
const resetButton = container.querySelector('.form__submit-btn_action_reset');
// const songs = container.querySelectorAll('.song');
const noSongsElement = container.querySelector('.no-songs');
const inputSong = container.querySelector('.input__text_type-song');
const inputArtist = container.querySelector('.input__text_type-artist');

// console.log(inputArtist, inputSong);

// inputArtist.value = '';
// console.log(inputArtist.value);

// console.log(container);
// console.log(songsContainer);
// console.log(addButton);
// console.log(resetButton);
// console.log(songs);

// console.log(addButton.hasAttribute('class'));
// console.log(addButton.hasAttribute('type'));
// console.log(addButton.hasAttribute('disabled'));

// console.log(addButton.getAttribute('class'));
// console.log(addButton.getAttribute('type'));
// console.log(addButton.getAttribute('disabled'));

// console.log(addButton.hasAttribute('onclick'));
// addButton.setAttribute('onclick', 'alert("bymm..")');
// console.log(addButton.hasAttribute('onclick'));

// addButton.removeAttribute('class');
function addSong(){

    songsContainer.insertAdjacentHTML('beforeend', `<div class="song">
                                    <h4 class="song__artist">${inputArtist.value}</h4>
                                    <p class="song_title">${inputSong.value}</p>
                                    <button class="song__like"></button>
                                </div>`);


    inputSong.value = '';
    inputArtist.value = '';

    renderAdded();
}

// for (let i = 0; i<=100; i++){
//     addSong();
// }


function renderAdded(){
    const songs = container.querySelectorAll('.song');

    if (songs.length === 0){
        resetButton.setAttribute('disabled', true);
        // resetButton.setAttribute('style', 'background-color: #f1f1f1');
        // resetButton.style.backgroundColor = '#f1f1f1';
        resetButton.classList.add('form__submit-btn_disabled');
        noSongsElement.classList.remove('no_songs_hidden');
        
    } else {
        resetButton.classList.remove('form__submit-btn_disabled');
        resetButton.removeAttribute('disabled');
        noSongsElement.classList.add('no_songs_hidden');
    }
    
}

// console.log(resetButton.textContent);
// resetButton.textContent = resetButton.textContent + 'Clear playList';
// console.log(resetButton.textContent);

// console.log(document.body.innerHTML);
// document.body.innerHTML = '<div>Новая разметка</div>';

addButton.addEventListener('click', addSong);

renderAdded();

resetButton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);

    event.target.innerText = 'Плейлист очищен';
    songsContainer.innerHTML = '';
    renderAdded();
})
