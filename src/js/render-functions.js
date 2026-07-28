//У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:
//createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
//clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
//showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
//hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#loader");

const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
    const markup = images.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads, }) => `
    <div class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}">
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><br>${likes}</p>
          <p class="info-item"><b>Views</b><br>${views}</p>
          <p class="info-item"><b>Comments</b><br>${comments}</p>
          <p class="info-item"><b>Downloads</b><br>${downloads}</p>
        </div>
    </div>
    `).join("");

    gallery.insertAdjacentHTML("beforeend", markup);

    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}
