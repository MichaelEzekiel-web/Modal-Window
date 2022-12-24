'use strict';

const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btn_show_modal = document.querySelectorAll('.show-modal');


const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btn_show_modal.length; i++) 
    btn_show_modal[i].addEventListener('click', openModal);

    close.addEventListener('click', closeModal);

    close.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);


// Listening For Keyboard Events

document.addEventListener('keydown', function(event) {
    // console.log(event.key);

    if(event.key === 'Escape') {
        // console.log('Esc was pressed');
        if(!modal.classList.contains('hidden')){
            closeModal()
        };
    }
})

