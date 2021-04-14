// Key API --  b1da4132179e3ff01108450fcf144021  --
// https://api.themoviedb.org/3/trending/all/day?api_key=b1da4132179e3ff01108450fcf144021
// https://www.themoviedb.org/t/p/w220_and_h330_face/8yhtzsbBExY8mUct2GOk4LDDuGH.jpg
// https://api.themoviedb.org/3/movie/615678?api_key=b1da4132179e3ff01108450fcf144021&language=en-US
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "b1da4132179e3ff01108450fcf144021";

function getTrending() {
  return fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((entries) =>
      entries.results.map((entrie) => {
        console.log(entrie);
        return {
          id: entrie.id,
          title: entrie.title,
          poster_path: entrie.poster_path,
        };
      })
    )
    .catch((e) => {
      console.log(e);
    });
}
function searchMovies(zz) {
  console.log(zz);
  // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  // console.log(
  //   `${baseUrl}/search/movie?api_key=${apiKey}&query=cat&language=en-US&page=1&include_adult=false`
  // );
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${zz}&language=en-US&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((entries) =>
      entries.results.map((entrie) => {
        console.log(entrie);
        return {
          id: entrie.id,
          title: entrie.title,
          poster_path: entrie.poster_path,
        };
      })
    )
    .catch((e) => {
      console.log(e);
    });
}
function getMovieDetails(movieId) {
  // https://api.themoviedb.org/3/movie/57353?api_key={movieId}&language=en-US
  return fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then((res) => res.json())
    .then((entrie) => {
      // console.log(entrie);
      return {
        id: entrie.id,
        title: entrie.title,
        release_date: entrie.release_date,
        poster_path: entrie.poster_path,
        vote_count: entrie.vote_count,
        overview: entrie.overview,
        genres: entrie.genres,
      };
    })

    .catch((e) => {
      console.log(e);
    });
}

function getMovieCredits() {
  return <h1>getMovieCredits</h1>;
}
function getMovieReviews() {
  return <h1>getMovieCredits</h1>;
}
const themovieAPI = {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
export default themovieAPI;
