const { getMoviesBySearch, getMoviesById } = require("../Controller");

const movieRouter = require("express").Router();

movieRouter.get("/", getMoviesBySearch);
movieRouter.get("/:movieId", getMoviesById);

module.exports = { movieRouter };
