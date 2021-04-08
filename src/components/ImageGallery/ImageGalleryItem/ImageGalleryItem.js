function ImageGalleryItem({ onClick, item }) {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          data-id={item.key}
          onClick={onClick}
          src={item.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    </>
  );
}
export default ImageGalleryItem;
