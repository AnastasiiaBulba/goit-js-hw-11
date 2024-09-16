import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');
let lightbox = new SimpleLightbox('.gallery a');

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    // timeout: 0,
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    close: true,
  });
}

function showInfo(message) {
  iziToast.info({
    message,
    position: 'topRight',
    // timeout: 0,
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    close: true,
  });
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (!query) {
    showError('Please enter a search term.');
    return;
    // iziToast.warning({
    //   title: 'Warning',
    //   message: 'Please enter a search term.',
    // });
    // return;
  }

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  const data = await fetchImages(query);

  loader.classList.add('hidden');

  if (data.hits.length === 0) {
    showInfo(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    // iziToast.info({
    //   title: 'Info',
    //   message:
    //     'Sorry, there are no images matching your search query. Please try again!',
    // });
    return;
  }

  renderGallery(data.hits);
  lightbox.refresh();
});
