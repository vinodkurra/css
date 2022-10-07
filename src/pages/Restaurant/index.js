import React from "react";
import ImageSlider from "components/Slider";
import Logo from "components/Logo";
export default () => {
  return (
    <>
      <div class="bg_img">
        <img src="images/bg_.png" />
        <div class="social">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
        <div class="bottom_info">
          <div class="item">
            <h3>
              <i class="fa fa-circle" aria-hidden="true"></i> Best Cheff
            </h3>
            <div class="info_">
              <div class="box">8</div>
              <p>
                Lorem ipsum <br />
                amet adipisicing <br />
                elit.{" "}
              </p>
            </div>
          </div>
          <div class="item">
            <h3>
              <i class="fa fa-circle" aria-hidden="true"></i> Best Menu
            </h3>
            <div class="info_">
              <div class="box">38</div>
              <p>
                Lorem ipsum <br />
                amet adipisicing <br />
                elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <header>
          {/* <div class="logo">VINDHU-BOJANAM </div> */}
          <Logo />
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Location</li>
            <li>Contact</li>
          </ul>
          <div class="search_nav">
            <i class="fa fa-search" aria-hidden="true"></i>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </header>
        <div class="content_container">
          <div class="content ">
            <h3>Are you Hungry?</h3>
            <h1 className="fade-in-text">Don't Wait!</h1>
            <p className="lefttoright">Let start to order food now</p>
            {/* <div class="cta">checkout menu</div> */}
          </div>
          <div class="dish_img">
            <img src="images/sample_1.png" className="rotate linear infinite" />
          </div>
        </div>
        <div
          style={{
            width: "54%",
            marginLeft: "50px",
          }}
        >
          <ImageSlider />
          {/* <div class="left_ nav">
            <i class="fa fa-caret-left" aria-hidden="true"></i>
          </div>
          <div class="right_ nav">
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
          <div class="item">
            <div class="item_img">
              <img src="images/sample_2.jpg" />
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
          <div class="item">
            <div class="item_img">
              <img src="images/sample_3.jpg" />
            </div>
            <div class="item_content">
              <h3>
                <i class="fa fa-circle" aria-hidden="true"></i>Appetizer
              </h3>
              <p>
                Lorem ipsum dolor
                <br />
                sit amet consectetur <br />
                adipisicing
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
