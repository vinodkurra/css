import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2d313c",
        border: " 2px solid #ffbe00",
        borderRadius: "4px",
        padding: "15px 2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#2d313c",
        border: " 2px solid #ffbe00",
        borderRadius: "4px",
        padding: "15px 2px",
      }}
      onClick={onClick}
    />
  );
}

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {images.map((item) => (
          <>
            <div class="item" key={item.id}>
              <div class="item_img">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="100px"
                  height={"100px"}
                />
              </div>
              <div class="item_content">
                <h3>
                  <i class="fa fa-circle" aria-hidden="true"></i>Breakfast
                </h3>
                <p>
                  Lorem ipsum dolor
                  <br />
                  sit amet consectetur <br />
                  adipisicing
                </p>
              </div>
            </div>
            {/* <div key={item.id}>
              <img
                src={item.src}
                alt={item.alt}
                width="100px"
                height={"100px"}
              />
            </div>
            <div class="item_content">
              <h3>
                <i class="fa fa-circle" aria-hidden="true"></i>Breakfast
              </h3>
              <p>
                Lorem ipsum dolor
                <br />
                sit amet consectetur <br />
                adipisicing
              </p>
            </div> */}
          </>
        ))}
      </Slider>
    </div>
  );
};
export default ImageSlider;
