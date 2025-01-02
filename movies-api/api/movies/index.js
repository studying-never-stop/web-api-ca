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

router.post(
  "/getMovie",
  asyncHandler(async (req, res) => {
    const { args } = req.body; // Extract args from request body
    try {
      const movie = await getMovie(args);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({
      message: error.message || "Failed to fetch movie.",
      status_code: 500,
      });
    }
    })
  );


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

// 获取电影类型的路由
router.get(
    '/getGenres',
    asyncHandler(async (req, res) => {
        const genres = await getMovieGenres(); // 调用服务函数获取数据
        res.status(200).json(genres); // 返回类型数据
    })
);

router.post(
    "/getMovieImages",
    asyncHandler(async (req, res) => {
      const { queryKey } = req.body; // 从请求体中获取 queryKey
      if (!queryKey) {
        return res.status(400).json({
          message: "queryKey is required.",
          status_code: 400,
        });
      }
  
      try {
        const images = await getMovieImages(queryKey); // 调用服务层函数
        res.status(200).json(images); // 返回成功响应
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movie images.",
          status_code: 500,
        });
      }
    })
  );

  router.post(
    "/getMovieReviews",
    asyncHandler(async (req, res) => {
      const { args } = req.body; // Extract args from request body
      try {
        const movies = await getMovieReviews(args);
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movieImages.",
          status_code: 500,
        });
      }
    })
  );

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

  router.post(
    "/getPopular",
    asyncHandler(async (req, res) => {
      const { args } = req.body; // Extract args from request body
      try {
        const movies = await getPopular(args);
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movieImages.",
          status_code: 500,
        });
      }
    })
  );

  router.post(
    "/getCredits",
    asyncHandler(async (req, res) => {
      const { args } = req.body; // Extract args from request body
      try {
        const movies = await getCredits(args);
        res.status(200).json(movies);
      } catch (error) {
        res.status(500).json({
          message: error.message || "Failed to fetch movieImages.",
          status_code: 500,
        });
      }
    })
  );

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
