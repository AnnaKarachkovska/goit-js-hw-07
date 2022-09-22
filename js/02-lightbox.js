import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function addElemTemplate(pictureList) {
  return pictureList
  .map(picture => {
    const {preview, original, description} = picture;
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  })
  .join('');
};

gallery.insertAdjacentHTML('afterbegin', addElemTemplate(galleryItems));

const lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250}); 