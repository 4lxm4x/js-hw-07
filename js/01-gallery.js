import { galleryItems } from "./gallery-items.js";
//import * as basicLightbox from "basicLightbox.min.js";
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");
createGallery();

function createGallery() {
  galleryItems.forEach((item) => {
    const { preview, original, description } = item;

    gallery.insertAdjacentHTML(
      "beforeend",
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    );
  });
}

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  const link = event.target.dataset.source;
  // console.dir(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${link}" width="800" height="600">
  `);
  instance.show();

  if (instance.visible()) {
    document.addEventListener("keydown", onEscPressed);
  }

  function onEscPressed(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscPressed);
    }
    console.log(event.code);
    console.log(instance.visible());
  }
}

// if (instance.visible()) {
//   document.addEventListener("keydown", onEscPressed);
// }

// function onEscPressed(event) {
//   if (event.code === "Escape") i;
//   console.log(event.code);
// }
