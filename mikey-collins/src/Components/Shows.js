import React from "react";
import "../Styles/Shows.css";
import main from "../Images/background2.jpg";
import secondary from "../Images/background1.jpg";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Shows() {
  return (
    <div className="test-container">
      <div className="mainImage">
        <img src={main} />
      </div>
      <br></br>
      <div className="cardContainer">
        <div className="lard">
          <div className="face face1">
            <div className="content">
              <h2>About</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Who is Mikey? Find out here and what services are available</p>
              <br></br>
              <Link to="/" className="button-86">
                <p className="readMore">Read More</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="lard">
          <div className="face face1">
            <div className="content">
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Check out all of Mikey's recent projects and work</p>
              <br></br>
              <Link to="/more" className="button-86">
                <p className="readMore">Read More</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="lard">
          <div className="face face1">
            <div className="content">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Follow Mikey on all Social Media, and get in contact for all
                your producing needs
              </p>
              <br></br>
              <Link to="/contact" className="button-86">
                <p className="readMore">Read More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export { Shows };
