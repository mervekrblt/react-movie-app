const BASE_KEY = process.env.REACT_APP_API_KEY
const requests = {
  fetchTrendMovies : `trending/all/day?api_key=${BASE_KEY}`,  
  fetchDiscover : `discover/movie?api_key=${BASE_KEY}`,  

}

export default requests