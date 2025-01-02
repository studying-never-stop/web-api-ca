import React, { useState, useEffect, useContext } from "react";
import {
  initializeUserMovieList,
  addToFavorites as addToFavoritesRequest, // 新添加：前端请求
  removeFromFavorites as removeFromFavoritesRequest, // 新添加：前端请求
  addToWatchlist as addToWatchlistRequest, // 新添加：前端请求
  removeFromWatchlist as removeFromWatchlistRequest, // 新添加：前端请求
  getUserMovieList, // 新添加：获取用户数据
} from "../api/tmdb-api"; // 假设请求函数在此文件中
import { AuthContext } from "../contexts/authContext"; // 引入 AuthContext 用于获取登录状态和用户名


export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [toWatch, setToWatch] = useState( [] )
  const [page, setPage] = useState(1); // 新增的 page 状态
  const [moviePage, setMoviePage] = useState(1); 
  const [popularPage, setPopularMoviePage] = useState(1);
  const [upcomingPage, setupcomingMoviePage] = useState(1);  
  const { isAuthenticated, userName } = useContext(AuthContext); // 从 AuthContext 获取登录状态和用户名

  useEffect(() => {
    if (isAuthenticated && userName) {
      initializeUserMovieList(userName); // 登录后初始化用户数据
      initializeUserData(userName)
    }
  }, [isAuthenticated, userName]); // 监听登录状态和用户名变化

    // 初始化用户数据
    const initializeUserData = async (username) => {
      try {
        const userData = await getUserMovieList(username);
        setFavorites(userData.favorites || []);
        setToWatch(userData.toWatch || []);
      } catch (error) {
        console.error("Error initializing user data:", error.message);
      }
    };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToFavorites = async (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      await addToFavoritesRequest(userName, movie.id); // 新添加：发送请求
      newFavorites = [...favorites, movie.id];
      setFavorites(newFavorites);
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = async (movie) => {
    await removeFromFavoritesRequest(userName, movie.id); // 新添加：发送请求
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromWishList = async (movie) => {
    await removeFromWatchlistRequest(userName, movie.id); // 新添加：发送请求
    setToWatch( toWatch.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addToWatch = async (movie) => {
    let newToWatch = [];
    if (!toWatch.includes(movie.id)){
      await addToWatchlistRequest(userName, movie.id); // 新添加：发送请求
      newToWatch = [...toWatch, movie.id];
    }
    else{
      newToWatch = [...toWatch];
    }
    setToWatch(newToWatch)
  };
  // console.log(toWatch)
  

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlesetMoviePageChange = (event, value) => {
    setMoviePage(value);
  };

  const handlePopularPageChange = (event, value) => {
    setPopularMoviePage(value);
  };

  const handleUpcomingPageChange = (event, value) => {
    setupcomingMoviePage(value);
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        toWatch,
        page,
        moviePage,
        popularPage,
        upcomingPage, 
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatch,
        removeFromWishList,
        handlePageChange,
        handlesetMoviePageChange,
        handlePopularPageChange,
        handleUpcomingPageChange,
        initializeUserData,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;