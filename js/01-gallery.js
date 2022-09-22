import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addElemTemplate(pictureList) {
  return pictureList
  .map(picture => {
    const {preview, original, description} = picture;
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  })
  .join('');
};

gallery.insertAdjacentHTML('afterbegin', addElemTemplate(galleryItems));

gallery.addEventListener('click', openModal);

let modal = null;

function openModal (ev) {
    ev.preventDefault();
    if (ev.target === ev.currentTarget) {
        return;
    };

    modal = basicLightbox.create(`<img src="${ev.target.dataset.source}" width="800" height="600">`);
    modal.show();

    window.addEventListener('keydown', closeModal);
}

function closeModal(ev) {
  if (ev.code === 'Escape') {
    modal.close();
  };
  window.removeEventListener('keydown', closeModal);
}