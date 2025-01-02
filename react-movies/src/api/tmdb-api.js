export const getMovies = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
      },
      method: 'post',
      body: JSON.stringify({ args:args })
  });
  return response.json();
};
  
export const getMovie = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getMovie', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
});
return response.json();
};
  
  export const getGenres = async () => {
    const response = await fetch('http://localhost:8080/api/movies/getGenres', {
      headers: {
          'Authorization': window.localStorage.getItem('token')
      },
      method: 'get',
  });
  return response.json();
  };
  
  export const getMovieImages = async (args) => {
    const response = await fetch('http://localhost:8080/api/movies/getMovieImages', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
      },
      method: 'post',
      body: JSON.stringify({queryKey:args})
  });
  return response.json();
  };

  export const getMovieReviews = async (id) => {
    const response = await fetch('http://localhost:8080/api/movies/getMovieReviews', {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token')
      },
      method: 'post',
      body: JSON.stringify(id)
  });
  return response.json();
  };

export const getUPComingMovies = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/upcoming', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
};

export const getPersons = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getPersons', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
};

export const getPopular = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getPopular', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
};

export const getCredits = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getCredits', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
};

export const getRecommendation = async (args) =>{
  const response = await fetch('http://localhost:8080/api/movies/getRecommendation', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
}

export const getPersonImages = async ({ queryKey }) => {
  const response = await fetch('http://localhost:8080/api/movies/getPersonImages', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ queryKey:queryKey })
  });
  return response.json();
};

export const getPerson = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getPerson', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
});
return response.json();
};

export const getMoviesCredits = async (args) => {
  const response = await fetch('http://localhost:8080/api/movies/getMoviesCredits', {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
    },
    method: 'post',
    body: JSON.stringify({ args:args })
  });
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const signup = async (username, password) => {
  const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  });
  return response.json();
};

export const initializeUserMovieList = async (username) => {
  try {
    const response = await fetch("http://localhost:8080/api/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error(`Failed to initialize user movie list: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error initializing user movie list:", error.message);
    throw error;
  }
};

export const addToFavorites = async (username, movieId) => {
  try {
    const response = await fetch("http://localhost:8080/api/favorites/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, movieId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add movie to favorites: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding to favorites:", error.message);
    throw error;
  }
};

export const removeFromFavorites = async (username, movieId) => {
  try {
    const response = await fetch("http://localhost:8080/api/favorites/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, movieId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to remove movie from favorites: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error removing from favorites:", error.message);
    throw error;
  }
};

export const addToWatchlist = async (username, movieId) => {
  try {
    const response = await fetch("http://localhost:8080/api/watchlist/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, movieId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add movie to watchlist: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding to watchlist:", error.message);
    throw error;
  }
};

export const removeFromWatchlist = async (username, movieId) => {
  try {
    const response = await fetch("http://localhost:8080/api/watchlist/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, movieId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to remove movie from watchlist: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error removing from watchlist:", error.message);
    throw error;
  }
};

export const getUserMovieList = async (username) => {
  try {
    const response = await fetch("http://localhost:8080/api/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user movie list: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user movie list:", error.message);
    throw error;
  }
};

