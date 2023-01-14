import React from "react";
import "../Styles/Contact.css";
import { Link, useParams } from "react-router-dom";
import newHero from "../Images/newHero.jpg";
// import {
//   FaTwitter,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaEnvelope,
// } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-facebook"></i>
              <h3>Facebook</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a.
              </p>
              <a
                href="https://www.facebook.com/mikeycollinsmusic/"
                type="button"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content">
              <i className="fab fa-android"></i>
              <h3>Twitter</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a.
              </p>
              <a href="https://twitter.com/MikeyColsmusic" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="lard">
          <div className="face face1">
            <div className="content">
              <h3>Instagram</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a.
              </p>
              <a href="https://www.instagram.com/mikeycolsmusic/" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="dark">
          <div className="face face1">
            <div className="content">
              <h3>E-Mail</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                repudiandae, explicabo voluptate et hic cum ratione a.
              </p>
              <a href="mailto:hello@mikeycollins.co.uk" type="button">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
