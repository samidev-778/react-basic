import PropTypes from "prop-types";

const Image = ({ imgSrc }) => <img src={imgSrc} />;

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Image;
