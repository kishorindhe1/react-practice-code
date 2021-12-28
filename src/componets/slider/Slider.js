import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <div style={{ height: "200px" }} className="row">
      <div className=" row">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width="80%"
          className="text-center justify-content-center"
        >
          <div>
            <img src="./images/Latest_Wallpaper_of_Rohit_Sharma.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="./images/Rohit_Sharma_Winning_Moment_Pic.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="./images/Rohit_Sharma_in_Cricket_World_Cup_2019_4K_Photo.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div className="row">
            <div className="col-5">
              <img src="./images/Virat_Kohli_While_Batting_Photo.jpg" />
            </div>
            <div className="col-5">
              <img src="./images/Rohit_Sharma_in_Cricket_World_Cup_2019_4K_Photo.jpg" />
            </div>{" "}
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
