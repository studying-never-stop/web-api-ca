import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { 
  getMovies, 
  getMovie, 
  getGenres, 
  getUpcomingMovies, 
  getMovieImages, 
  getMovieReviews, 
  getPersons, 
  getPopular, 
  getCredits, 
  getRecommendation, 
  getPersonImages, 
  getPerson, 
  getMoviesCredits 
} from '../tmdb-api';

const router = express.Router();

router.post(
    "/",
    asyncHandler(async (req, res) => {
      const { args } = req.body; // Extract args from request body
      try {
        const movies = await getMovies(args);
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movies.",
          status_code: 500,
        });
      }
    })
  );

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));


// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

// 获取电影类型的路由
router.get(
    '/tmdb/genres',
    asyncHandler(async (req, res) => {
        const genres = await getMovieGenres(); // 调用服务函数获取数据
        res.status(200).json(genres); // 返回类型数据
    })
);



export default router;
