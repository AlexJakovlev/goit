import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ onClick, items }) {
  return (
    <ul className="ImageGallery">
      {items.map(function (item) {
        return (
          <ImageGalleryItem key={item.key} onClick={onClick} item={item} />
        );
      })}
    </ul>
  );
}
export default ImageGallery;
