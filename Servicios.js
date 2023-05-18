const btncierra = document.querySelector('#btn-cierra');
const btnsiguiente = document.querySelector('#btn-siguiente');
const btnretroceder = document.querySelector('#btn-retroceder');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenactiva = document.querySelector('#img-activa');
let indiceimagen = 0;

const abrelightbox = (Event) =>{
    imagenactiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceimagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abrelightbox);
});

btncierra.addEventListener('click', () => {
    lightbox.style.display = 'none';

});

const siguienteimagen = () => {

    if(indiceimagen=== imagenes.length -1){
        indiceimagen = -1;
    }
    imagenactiva.src = imagenes[ indiceimagen + 1].src; indiceimagen++;

};
btnsiguiente.addEventListener('click', siguienteimagen);

const retrocederimagen = () => {
    if(indiceimagen===0) {
        indiceimagen= imagenes.length;
    }
    imagenactiva.src = imagenes[ indiceimagen - 1].src; indiceimagen--;

};

btnretroceder.addEventListener('click',retrocederimagen);