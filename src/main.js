//У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import './css/styles.css';


import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader

} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("Submit works");
    const query = event.currentTarget.elements["search-text"].value.trim();

    if (!query) {
        iziToast.error({
            message:
                "Please enter a search query!",
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message:
                        "Sorry, there are no images matching your search query. Please try again!",
                });
                return;
            }

            createGallery(data.hits);
        })
        .catch(error => {
            console.log(error);

            iziToast.error({
                message: "Something went wrong!",
            });
        })
        .finally(() => {
            hideLoader();
        });
}