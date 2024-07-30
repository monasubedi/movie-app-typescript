export const rateMovie = async (movieId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`,

    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json;charset=utf-8",
      },
      body: `{"value":${rating}}`,
    }
  );

  return res.json();
};

export const rateTvshows = async (tvshowId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvshowId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json;charset=utf-8",
      },
      body: `{"value":${rating}}`,
    }
  );

  return res.json();
};
