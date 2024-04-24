function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((Letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i)
    })
}


const titulo = document.querySelector('.digitando');
ativaLetra(titulo);


function acao(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'block';
}

function fechar(){

    let modal = document.querySelector('.modal')


    modal.style.display = 'none';
}

const carousel = document.querySelector(".interface");
const arrowBtns = document.querySelectorAll(".portfolio i");
const firstCardWidth = carousel.querySelector(".flex").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

function scrolll(){
    var left = document.querySelector(".img-port");
    left.scrollBy(350, 0)
}

function scrollr(){
    var right = document.querySelector(".img-port");
    right.scrollBy(-350, 0)
}
