import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_1BX1oIt1NQtkjIl2oGjUV7LNDkwF94yk8hbqyczxZPcwQRJUSZEyDT1h7onEr95m';

function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

function fetchCatByBreed(breedId) {
  const query = new URLSearchParams({ breed_ids: breedId });
  return axios.get(`https://api.thecatapi.com/v1/images/search?${query}`);
}

export { fetchBreeds, fetchCatByBreed };
