import { Component } from "react";
import themoviedbAPI from "../../../services/themoviedbAPI";

import dummyImg from "../../../assets/dummy.png";

export default class Cast extends Component {
  state = {
    cast: [],
    showCast: false,
  };

  componentDidMount = () => {
    const castId = this.props.match.params.movieId;
    themoviedbAPI
      .getMovieCredits(castId)
      .then((data) => this.setState({ cast: data }))
      .finally(() => this.setState({ showCast: true }));
  };

  //shouldComponentUpdate(nextProps, nextState) => {};

  //componentDidUpdate = (prevProps, prevState, snapshot) => {};

  componentWillUnmount = () => {
    this.setState({ showCast: false });
  };

  render() {
    console.log(dummyImg);
    return (
      <>
        {this.state.showCast && (
          <ul>
            {this.state.cast.map((cast) => {
              const imgsrc = cast.profile_path
                ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${cast.profile_path}`
                : dummyImg;
              console.log(cast.profile_path);
              return (
                <li className="MovieDetail" key={cast.cast_id}>
                  <img className="imgdescr" src={imgsrc} alt="img descr"></img>

                  <div className="description">{cast.name}</div>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
