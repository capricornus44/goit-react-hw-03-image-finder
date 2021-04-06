import axios from 'axios';

const fetchHits = ({ request = '', currentPage = 1, perPage = 15 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${request}&page=${currentPage}&key=20669309-c97d1ec468a66ad87fd39e114&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
};

export default { fetchHits };
