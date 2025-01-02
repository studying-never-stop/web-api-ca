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

// export const getCredits = (args) => {
//   const [, idPart] = args.queryKey;
//   const { id: movie_id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

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
  const response = await fetch('http://localhost:8080/api/movies/person/:id', {
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