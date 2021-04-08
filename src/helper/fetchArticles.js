import axios from "axios";

async function result(searchQuery) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=1&key=20970339-dcb1c0b5f583d07e8d97d39ba&image_type=photo&orientation=horizontal&per_page=12;`
  );
  return response.data.hits;
}
const fetchArticlesWithQuery = { result };
export default fetchArticlesWithQuery;
// import Customers from "./customers/reducer";
// const aName = {
//     Customers
// };
// export default aName;
// import axios from "axios";
// const fetchArticlesWithQwery = (query) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${query}&page=1&key=20970339-dcb1c0b5f583d07e8d97d39ba&image_type=photo&orientation=horizontal&per_page=12;`
//     )
//     .then((response) => response.data.hits);
// };
// export default {fetchArticlesWithQwery};
