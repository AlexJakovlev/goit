import { Component } from "react";
import themoviedbAPI from "../../../services/themoviedbAPI";
import dummyImg from "../../../assets/dummy.png";

export default class Reviews extends Component {
  state = {
    reviews: null,
    showReviews: false,
  };

  componentDidMount = () => {
    const castId = this.props.match.params.movieId;
    themoviedbAPI
      .getMovieReviews(castId)
      .then((data) => this.setState({ reviews: data }))
      .finally(() => this.setState({ showReviews: true }));
  };

  //shouldComponentUpdate(nextProps, nextState) => {};

  //componentDidUpdate = (prevProps, prevState, snapshot) => {};

  componentWillUnmount = () => {
    this.setState({ showReviews: false });
  };

  render() {
    return (
      <>
        {this.state.showReviews && (
          <ul>
            {this.state.reviews.map((review) => {
              const imgsrc = review.author_details.avatar_path
                ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${review.author_details.avatar_path}`
                : dummyImg;
              return (
                <li key={review.id}>
                  <div>
                    <img className="reviewsavatar" src={imgsrc} alt=""></img>
                    <p>{review.author}</p>
                  </div>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
