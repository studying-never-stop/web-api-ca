import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { 
  getMovies, 
  getMovie, 
  getMovieGenres, 
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

// router.post(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const { args } = req.body; // Extract args from request body
//     try {
//       const movie = await getMovie(args);
//       res.status(200).json(movie);
//     } catch (error) {
//       res.status(500).json({
//       message: error.message || "Failed to fetch movie.",
//       status_code: 500,
//       });
//     }
//     })
//   );

// Get movie details
// router.get('/:id', asyncHandler(async (req, res) => {
//     const id = parseInt(req.params.id);
//     const movie = await movieModel.findByMovieDBId(id);
//     if (movie) {
//         res.status(200).json(movie);
//     } else {
//         res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
//     }
// }));

router.post('/upcoming', asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
      try {
        const movies = await getUpcomingMovies(args);
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movies.",
          status_code: 500,
        });
      }
}));

// router.get('/getGenres', asyncHandler(async (req, res) => {
//       try {
//         console.log("进入这里")
//         const movies = await getMovieGenres(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movies.",
//           status_code: 500,
//         });
//       }
// }));
// 获取电影类型的路由
router.get(
    '/getGenres',
    asyncHandler(async (req, res) => {
        const genres = await getMovieGenres(); // 调用服务函数获取数据
        console.log(genres)
        res.status(200).json(genres); // 返回类型数据
    })
);

// router.post(
//     "/getMovieImages",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getMovieImages(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getMovieReviews",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getMovieReviews(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getPersons",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getPersons(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getPopular",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getPopular(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getCredits",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getCredits(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getRecommendation",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getRecommendation(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getPersonImages",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getPersonImages(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getPerson",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getPerson(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

//   router.post(
//     "/getMoviesCredits",
//     asyncHandler(async (req, res) => {
//       const { args } = req.body; // Extract args from request body
//       try {
//         const movies = await getMoviesCredits(args);
//         res.status(200).json(movies);
//       } catch (error) {
//         res.status(500).json({
//           message: error.message || "Failed to fetch movieImages.",
//           status_code: 500,
//         });
//       }
//     })
//   );

export default router;
