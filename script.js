'use script';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');


const openModal =() => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal =() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModel.forEach(element => {
    element.addEventListener('click', openModal);
});

btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keypress', function(event) {
   console.log(event.key); 

   if(event.key === 'Escape') {
       if(!modal.classList.contains('hidden')) {
           closeModal();
       }
   }
});