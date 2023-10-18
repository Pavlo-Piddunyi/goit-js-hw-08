// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')
const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img class="gallery__image"
      loading="lazy"
      src="${preview}"
      title="${description}"
    />
  </a>
</li>`;
}).join('');

galleryList.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true, 
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: 'img',
    captionData: 'alt',
    captionPosition: 'bottom',
});