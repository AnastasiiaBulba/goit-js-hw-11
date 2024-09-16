const API_KEY = '45963694-b66337efb933bcb9eea43ec6d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again later.',
    });
  }
}
