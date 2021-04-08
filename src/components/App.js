import React, { Component } from "react";
import axios from "axios";
import LoaderL from "./Loader/Loader";

import Layout from "./Layout/Layout";
import articlesApi from "../helper/fetchArticles";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Images from "./Images/Images";
import "./styles.css";
// 20970339-dcb1c0b5f583d07e8d97d39ba
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

export default class App extends Component {
  state = {
    images: [],
    showModal: false,
    showLoader: false,
    error: "",
    page: 1,
    image: "",
    query: "",
  };

  myRef = React.createRef();

  onSearch = (value) => {
    this.setState({ query: value, images: [] });
  };

  fetchArticlesQwery = (query) => {
    articlesApi(query)
      .then((articles) => this.setState({ articles }))
      .catch((error) => this.setState({ error }))
      .finaly(() => this.setState({ isLoading: false }));
  };

  componentWillUnmount = () => {
    console.log("WillUnmount");
    console.log(document.documentElement.scrollHeight);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      if (prevState.showLoader !== true) {
        this.setState({ showLoader: true });
      }
      this.getImages();
    }
  };
  getImages() {
    const query = `https://pixabay.com/api/?q=${this.state.query}
      &page=${this.state.page}&key=20970339-dcb1c0b5f583d07e8d97d39ba&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(query)
      .then((res) => {
        const { hits } = res.data;
        const result = hits.map(function (hit) {
          return {
            key: hit.id,
            webformatURL: hit.webformatURL,
            largeImageURL: hit.largeImageURL,
          };
        });
        if (result.length > 0) {
          this.setState((prevState) => {
            return {
              images: [...prevState.images, ...result],
              page: prevState.page + 1,
            };
          });
        }
      })
      .finally(() => {
        this.setState({ showLoader: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  }

  toggleModal = (e) => {
    const id = e.target.dataset.id;
    let largeImageURL;
    if (id) {
      largeImageURL = this.state.images.find((item) => item.key === Number(id))
        .largeImageURL;
    }

    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
        image: largeImageURL,
      };
    });
  };

  onHandleMore = (e) => {
    console.log("get more");
    if (this.state.showLoader !== true) {
      this.setState({ showLoader: true });
    }
    this.getImages();
  };

  render() {
    const { showModal, showLoader, images } = this.state;
    return (
      <>
        <h1 ref={(ref) => (this._div = ref)} className="main_title">
          Поиск изображений
        </h1>
        <Layout title="DZ3">
          <Searchbar onSubmit={this.onSearch} />
          {images.length > 0 && (
            <>
              <ImageGallery onClick={this.toggleModal} items={images} />
              <Button onClick={this.onHandleMore} />
            </>
          )}
        </Layout>
        {showLoader && (
          <Modal>
            <LoaderL />
          </Modal>
        )}
        {showModal && (
          <Modal>
            <Images
              onClick={this.toggleModal}
              largeImageURL={this.state.image}
            />
          </Modal>
        )}
      </>
    );
  }
}
