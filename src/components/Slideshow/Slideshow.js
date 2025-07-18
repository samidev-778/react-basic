import Slider from "react-slick";
import "./Slideshow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
};

const ImageSlider = ({
  images = [
    {
      imgSrc: "http://placekitten.com/g/400/200",
    },
    {
      imgSrc: "http://placekitten.com/g/400/200",
    },
    {
      imgSrc: "http://placekitten.com/g/400/200",
    },
    {
      imgSrc: "http://placekitten.com/g/400/200",
    },
  ],
}) => (
  <div className="slideshow image-slider-container">
    <Slider {...settings}>
      {images.map((singleImage) => (
        <div>
          <img src={singleImage.imgSrc} />
        </div>
      ))}
    </Slider>
  </div>
);

export default ImageSlider;
