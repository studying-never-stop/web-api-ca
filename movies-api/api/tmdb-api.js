import fetch from 'node-fetch';

export const getMovies = async ({ queryKey }) => {
    try {
      const [, { page }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch movies.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      throw error;
    }
  };
  
  export const getMovie = async ({ queryKey }) => {
    try {
      const [, { id }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch movie details.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching movie details:", error.message);
      throw error;
    }
  };
  
  export const getMovieGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch movie genres.');
        }

        return await response.json(); // 返回完整的响应 JSON
    } catch (error) {
        console.error('Error fetching movie genres:', error.message);
        throw error;
    }
};
  
  export const getMovieImages = async ({ queryKey }) => {
    try {
        // 验证 queryKey 是否符合预期格式
        if (!Array.isArray(queryKey) || queryKey.length < 2 || typeof queryKey[1] !== "object") {
          throw new Error("Invalid queryKey format. Expected an array with an object.");
        }
    
        const [, { id }] = queryKey; // 解构获取 id
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
        );
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch movie images.");
        }
    
        const data = await response.json();
        return data; // 返回解析后的 JSON 数据
      } catch (error) {
        console.error("Error fetching movie images:", error.message);
        throw error; // 抛出错误供路由捕获
      }
  };
  
  export const getMovieReviews = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch movie reviews.");
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching movie reviews:", error.message);
      throw error;
    }
  };
  
  export const getUpcomingMovies = async ({ queryKey }) => {
    try {
      const [, { page }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch upcoming movies.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching upcoming movies:", error.message);
      throw error;
    }
  };
  
  export const getPersons = async ({ queryKey }) => {
    try {
      const [, { page }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch persons.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching persons:", error.message);
      throw error;
    }
  };
  
  export const getPopular = async ({ queryKey }) => {
    try {
      const [, { page }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch popular movies.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching popular movies:", error.message);
      throw error;
    }
  };
  
  export const getCredits = async ({ queryKey }) => {
    try {
      const [, { id: movie_id }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch credits.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching credits:", error.message);
      throw error;
    }
  };
  
  export const getRecommendation = async ({ queryKey }) => {
    try {
      const [, { id }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch recommendations.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching recommendations:", error.message);
      throw error;
    }
  };
  
  export const getPersonImages = async ( queryKey ) => {
    try {
        console.log(queryKey)
      const [, { id }] = queryKey;
      console.log(id)
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch person images.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching person images:", error.message);
      throw error;
    }
  };
  
  export const getPerson = async ({ queryKey }) => {
    try {
      const [, { id }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch person details.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching person details:", error.message);
      throw error;
    }
  };
  
  export const getMoviesCredits = async ({ queryKey }) => {
    try {
      const [, { id: person_id }] = queryKey;
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.TMDB_KEY}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch movie credits.");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching movie credits:", error.message);
      throw error;
    }
  };


  