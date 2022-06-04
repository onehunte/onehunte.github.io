const caveira = document.querySelector('.caveira');
const arvore = document.querySelector('.arvore')

const pular = () => {
    caveira.classList.add('pular');

    setTimeout(() => {
        caveira.classList.remove('pular')
    }, 500);
}

const loop = setInterval(() =>{

const posicaoarvore = arvore.offsetLeft;
const caveirPosition = +window.getComputedStyle(caveira).bottom.replace('px', '');

if ( posicaoarvore <= 164 && posicaoarvore > 0 && caveirPosition < 80){

    arvore.style.animation = 'none';
    arvore.style.left = `${posicaoarvore}px`;

    arvore.style.animation = 'none';
    arvore.style.left = `${posicaoarvore}px`;

    caveira.src ="/img/gameover.webp"

    clearInterval(loop);
}

}, 10)

document.addEventListener('keydown', pular)