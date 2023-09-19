import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
const galleryImage = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}" >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", galleryImage);

let modal = null;

const openPic = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  modal = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );

  modal.show();
  document.addEventListener("keydown", onEscapeClick);
};

const onEscapeClick = (e) => {
  if (e.code !== "Escape") return;
  
  modal.close();
  document.removeEventListener("keydown", onEscapeClick);
};

listEl.addEventListener("click", openPic);
