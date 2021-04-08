function Images({ onClick, largeImageURL }) {
  return (
    <div className="Modal" onClick={onClick}>
      <img
        src={
          largeImageURL
            ? largeImageURL
            : "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg"
        } // defaultProps!!!!
        alt="img"
      />
    </div>
  );
}
export default Images;
