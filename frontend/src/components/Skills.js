import meter1 from "../assets/img/dsa.jpg";
import meter2 from "../assets/img/web3.webp";
import meter3 from "../assets/img/nodejs.png";
import meter4 from "../assets/img/Python-logo-notext.svg.png";
import meter5 from "../assets/img/c++.svg";
import meter6 from "../assets/img/rust.png";
import meter7 from "../assets/img/ts.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter5} alt="Image" height={15} width={10} />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Rust</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Nodejs</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>JavaScript / TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" height={15} width={10} />
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Web 3</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
