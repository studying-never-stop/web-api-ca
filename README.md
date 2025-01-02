# Assignment 2 - Web API

Name: Wu Songyu

## Features

- User login and registration with error handling messages.  
- Persistent storage of favorites and watchlist using MongoDB.  
- Integration of APIs to fetch actor and director information.  
- Full linkage of custom backend APIs with the React frontend.  

## Setup Requirements

[Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

1. Ensure you have MongoDB installed and running on your local machine.  
2. Create a `.env` file in the root directory and configure it as shown below.  

## API Configuration

Describe any configuration that needs to take place before running the API:  

Create a `.env` file with the following environment variables:  

```
NODE_ENV=development  
PORT=8080  
HOST=localhost  
MONGO_DB=mongodb://localhost:27017/tasky_db  
TMDB_KEY=******  
SECRET=ilikecake  
```

**REMEMBER**: Don't put your actual usernames, passwords, or authentication keys in the README or on GitHub. Use placeholders instead.  

## API Design

### User Movie List APIs  

- `/api/userMovies/initialize` | POST | Verify the user and initialize their movie list.  
- `/api/userMovies/favorites/add` | POST | Add a movie to the favorites list.  
- `/api/userMovies/favorites/remove` | POST | Remove a movie from the favorites list.  
- `/api/userMovies/watchlist/add` | POST | Add a movie to the watchlist.  
- `/api/userMovies/watchlist/remove` | POST | Remove a movie from the watchlist.  
- `/api/userMovies/get` | POST | Retrieve the user's movie list.  

### Movie APIs  

- `/api/movies` | POST | Retrieve a list of movies (supports dynamic parameters).  
- `/api/movies/getMovie` | POST | Get details of a single movie.  
- `/api/movies/upcoming` | POST | Retrieve a list of upcoming movies.  
- `/api/movies/getGenres` | GET | Retrieve movie genres.  
- `/api/movies/getMovieImages` | POST | Retrieve images for a specific movie.  
- `/api/movies/getMovieReviews` | POST | Retrieve reviews for a specific movie.  
- `/api/movies/getPersons` | POST | Retrieve information about actors and directors.  
- `/api/movies/getPopular` | POST | Retrieve a list of popular movies.  
- `/api/movies/getCredits` | POST | Retrieve the cast and crew of a movie.  
- `/api/movies/getRecommendation` | POST | Retrieve movie recommendations.  
- `/api/movies/getPersonImages` | POST | Retrieve images of an actor or director.  
- `/api/movies/getPerson` | POST | Retrieve details of an actor or director.  
- `/api/movies/getMoviesCredits` | POST | Retrieve cast information for multiple movies.  

If your API design is on an online platform or visual tool, provide the link (e.g., [Swaggerhub](https://app.swaggerhub.com/)).  

## Security and Authentication

### Authentication and Authorization Mechanisms  

1. **User Authentication**  
   - Managed using `AuthContextProvider` for login state.  
   - `LoginPage` and `RegisterPage` allow users to authenticate.  
   - `ProtectedRoutes` restricts access to protected pages for unauthenticated users.  

2. **Protected Routes**  
   - High-order component `<ProtectedRoutes />` verifies user authentication status.  
   - Unauthenticated users are redirected to `/login`.  

3. **Protected Route List**  
   - `/movies/upcoming`: Upcoming movies page.  
   - `/movies/:id`: Movie details page.  
   - `/movies/favorites`: User's favorites page.  
   - `/movies/wishlist`: User's watchlist page.  
   - `/reviews/:id`: Movie review details page.  
   - `/reviews/form`: Add movie review page.  
   - `/movies/popular`: Popular movies page.  
   - `/cast`: Actors and directors page.  
   - `/person/:id`: Specific actor or director details page.  

4. **Security Enhancements**  
   - **JWT Authentication**:  
     - Backend implementation of JWT-based authentication.  
     - Frontend includes the JWT in the request headers for API communication.  

## Integrating with React App

### Feature Integration Overview  

React application seamlessly integrates with the custom Web API across multiple modules:  

1. **Login and Registration**  
   - **Implementation**:  
     - Backend APIs `/login` and `/signup` handle user authentication and validation.  
     - Error handling (e.g., invalid credentials) provides user feedback.  
   - **Outcome**:  
     - JWT stored on the frontend for access to protected routes.  

2. **Favorites and Watchlist Persistence**  
   - **Implementation**:  
     - APIs `/api/userMovies/favorites/add`, `/api/userMovies/favorites/remove`, `/api/userMovies/watchlist/add`, and `/api/userMovies/watchlist/remove` manage the user's list.  
     - `MoviesContext` manages shared state between components.  
   - **Outcome**:  
     - Favorites and watchlist persist across sessions with dynamic UI updates.  

3. **Actor and Director Information**  
   - **Implementation**:  
     - Integrated APIs `/api/movies/getPersons`, `/api/movies/getPerson`, and `/api/movies/getPersonImages` to fetch and display actor details.  
     - Actor-related movies are fetched using `/api/movies/getMoviesCredits`.  
   - **Outcome**:  
     - Dynamic rendering of detailed actor and director information.  

4. **API Linkage**  
   - **Implementation**:  
     - Replaced TMDB API with custom Web API for movie data retrieval.  
     - Pages such as `<HomePage />`, `<UpComing />`, and `<PopularMoviesPage />` call `/api/movies` and related endpoints.  
   - **Outcome**:  
     - Eliminates external dependencies, enhancing data control.  

### Views Using Custom Web API  

- `/movies/upcoming`: Upcoming movies page.  
- `/movies/favorites`: User's favorites page.  
- `/movies/wishlist`: User's watchlist page.  
- `/movies/popular`: Popular movies page.  
- `/cast`: Main actors and directors page.  
- `/person/:id`: Actor or director details page.  

## Independent Learning  

To develop this application, I researched solutions on platforms like CSDN and leveraged AI tools. Key achievements include:  

- Implementing automatic initialization of user movie lists.  
- Enabling continuous monitoring and updating of database activities.  
- Ensuring the favorite and watchlist data are securely stored in MongoDB.
```