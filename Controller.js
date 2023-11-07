const axios = require('axios');
const apiKey = `55bb902d`





const getMoviesBySearch = async(req,res) =>
{
    console.log(req)
       try
       {
        const movieName = req.query.search 
        const omdb_url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
       
        const response = await axios.get(omdb_url)
        res.status(200).json(response.data.Search)
       }
       catch(error)
       {
        console.log(error.message)
        res.status(500).json({error: 'Failed to fetch movies'})
       }
}

const getMoviesById =async(req,res) =>{
    try {
        const imdbID = req.params.movieId;
        const apiUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
        const response = await axios.get(apiUrl);
        console.log(response.data)
        res.status(200).json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
}


module.exports = { getMoviesById, getMoviesBySearch}