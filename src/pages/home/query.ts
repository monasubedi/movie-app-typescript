export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTA3ODY2OTJiMWIyMjQyZDNiOGI1YzRmY2I5ZDNmYyIsIm5iZiI6MTcyMjAwMzI0MC40ODEzNDQsInN1YiI6IjY2YTNhODdiNzdiOTE0ZmVlODVkOTIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Kbn3XK6u5MER4XHjub6blhWTisktXlZqpUsSzLCEW8",
      },
    }
  );

  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTA3ODY2OTJiMWIyMjQyZDNiOGI1YzRmY2I5ZDNmYyIsIm5iZiI6MTcyMjAwMzI0MC40ODEzNDQsInN1YiI6IjY2YTNhODdiNzdiOTE0ZmVlODVkOTIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Kbn3XK6u5MER4XHjub6blhWTisktXlZqpUsSzLCEW8",
      },
    }
  );

  return res.json();
};
