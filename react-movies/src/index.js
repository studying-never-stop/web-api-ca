import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpComing from './pages/upcomingMoviesPage'
import WishListPage from "./pages/wishListPage";
import PopularMoviesPage from "./pages/popularPage";
import PersonPage from "./pages/PersonPage";
import PersonDetailPage from "./pages/personDetailPage";
import LoginPage from "./pages/loginPage";
import ProtectedRoutes from "./protectedRoutes";
import AuthContextProvider from "./contexts/authContext";
import RegisterPage from "./pages/registerPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
      <AuthContextProvider>
      <Routes>
        <Route exact path="/movies/upcoming" element={<UpComing />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/wishlist" element={ <WishListPage /> } />
        </Route>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/movies/popular" element={ <PopularMoviesPage /> } />
        <Route path="/cast" element={ <PersonPage /> } />
        <Route path="/person/:id" element={<PersonDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
      </ AuthContextProvider >
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);