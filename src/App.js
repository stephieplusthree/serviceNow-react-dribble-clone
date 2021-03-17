import React from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/card1.jpg";
import img3 from "./assets/card2.jpg";
import img4 from "./assets/card3.jpg";
import img5 from "./assets/card4.jpg";
import img6 from "./assets/card5.jpg";
import img7 from "./assets/card6.jpg";
import img8 from "./assets/card7.jpg";
import img9 from "./assets/card8.jpg";
import img10 from "./assets/logo-pink.jpg";
import img11 from "./assets/social-media.jpg";
import img12 from "./assets/footer-logo.jpg";

function App() {
  return (
    <>
      <div className="app-container">
        {/* start of navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white mt-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <span>
                <strong>dribble</strong>
              </span>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inspiration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Find Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Learn Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Go Pro
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hire Designers
                  </a>
                </li>
              </ul>
              <button className="btn" type="submit">
                Sign in
              </button>
              <button className="btn btn-danger" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        {/* end of navbar */}

        {/* start of content */}
        <div className="jumbotron-container">
          <div className="jumbotron">
            <div className="row">
              {/* start of jumbotron right side */}
              <div className="col">
                <h1 className="jumbo-title">
                  Discover the world's top <br /> designers & creatives
                </h1>
                <p className="jumbo-content">
                  Dribble is the leading destination to find & showcase creative
                  work and home to the world's best design professionals.
                </p>
                <button className="btn btn-danger" type="submit">
                  Sign up
                </button>
              </div>

              {/* start of jumbotron left side */}
              <div className="col">
                <img src={img1} alt="image1" />
              </div>
            </div>
          </div>
        </div>

        {/* start of second nav */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white mt-2">
          <div className="container-fluid">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Popular &emsp; &emsp;
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn btn-light" type="submit">
                    &emsp; &emsp; All
                  </button>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Animation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Branding
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Illustration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mobile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Print
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Product Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Typography
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Web Design
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-secondary" type="submit">
                = &emsp; Filters
              </button>
            </div>
          </div>
        </nav>

        {/* start of row 1 cards */}
        <div className="row">
          <div className="col">
            <div className="cards">
              <img src={img2} alt="image2" />
            </div>
          </div>
          <div className="col">
            <div className="cards">
              <img src={img3} alt="image3" />
            </div>
          </div>
          <div className="col">
            <div className="cards">
              <img src={img4} alt="image4" />
            </div>
          </div>
          <div className="col">
            <div className="cards">
              <img src={img5} alt="image5" />
            </div>
          </div>
        </div>

        {/* start of row 2 cards */}
        <div className="row">
          <div className="col">
            <div className="cards-2">
              <img src={img6} alt="image6" />
            </div>
          </div>
          <div className="col">
            <div className="cards-2">
              <img src={img7} alt="image7" />
            </div>
          </div>
          <div className="col">
            <div className="cards-2">
              <img src={img8} alt="image8" />
            </div>
          </div>
          <div className="col">
            <div className="cards-2">
              <img src={img9} alt="image9" />
            </div>
          </div>
        </div>
      </div>
      {/* end of content */}

      {/* start of footer */}
      <div className="footer">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <div className="footer-image">
                <img src={img10} alt="image10" />
              </div>
              <h3 className="footer-content">Dribble is the world's leading community for creatives to share, grow, and get hired.</h3>
              <div className="footer-social-media">
                <img src={img11} alt="image11" />
              </div>
            </div>
            <div className="col-6 col-md">
              <h5>
                <strong>For designers</strong>
              </h5>
              <ul className="list-unstyled text-small">
                <li>Go Pro!</li>
                <li>Explore design work</li>
                <li>Design blog</li>
                <li>Overtime podcast</li>
                <li>Dribble meetups</li>
                <li>Playoffs</li>
                <li>Code of conduct</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>
                <strong>Hire designers</strong>
              </h5>
              <ul className="list-unstyled text-small">
                <li>Post a job opening</li>
                <li>Post a freelance project</li>
                <li>Search for desingers</li>
                <li>
                  <strong>Brands</strong>
                </li>
                <li>Advertise with us</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>
                <strong>Company</strong>
              </h5>
              <ul className="list-unstyled text-small">
                <li>About</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Media kit</li>
                <li>Dribble shop</li>
                <li>Testimonials</li>
                <li>API</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>
                <strong>Directories</strong>
              </h5>
              <ul className="list-unstyled text-small">
                <li>Design jobs</li>
                <li>Designers for hire</li>
                <li>Tags</li>
                <li>Places</li>
                <li><strong>Design assests</strong></li>
                <li>Shop Creative Market</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col">
              <small className="d-block mb-3 text-muted">
                &copy; 2021 Dribble. All rights reserved.
              </small>
            </div>
            <div className="col">
              <div className="footer-container">
              <div className="footer-logo">
              <img src={img12} alt="image12" />
              </div>
              </div>
              
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default hot(App);
