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
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    );
  });
}

gallery.addEventListener("click", onGalleryItemClick);
const lightbox = new SimpleLightbox(".gallery a", {
  /* options */ captionsData: "alt",
  captionDelay: 250,
});
console.log(lightbox);
function onGalleryItemClick(event) {
  event.preventDefault();
  const link = event.target.dataset.source;
  // console.dir(event.target);
  //   if (event.target.nodeName !== "IMG") {
  //     return;
  //   }

  //   function onEscPressed(event) {
  //     if (event.code === "Escape") {
  //       instance.close();
  //       document.removeEventListener("keydown", onEscPressed);
  //     }
  //     console.log(event.code);
  //     console.log(instance.visible());
  //   }
}
