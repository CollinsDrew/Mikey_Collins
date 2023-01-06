import React from "react";
import "../Styles/Contact.css";
import { Link, useParams } from "react-router-dom";
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
    // <div className="mainContainer">
    //   <h1 className="title">Follow on social media</h1>

    //   <h3 className="intro">
    //     Here you can find links to all of Mikey's social media profiles, where
    //     he shares updates about his music, touring, and more. Follow him and
    //     join the conversation on your favorite platforms. Stay connected with
    //     Mikey and never miss a beat!
    //   </h3>

    //   <div className="contactList">
    //     <ul>
    //       <li>
    //         <SocialIcon
    //           className="social-icon"
    //           url="https://twitter.com/MikeyColsmusic"
    //           style={{ height: 100, width: 100 }}
    //         />
    //       </li>
    //       <br></br>
    //       <li>
    //         <SocialIcon
    //           className="social-icon"
    //           url="https://www.facebook.com/mikeycollinsmusic/"
    //           style={{ height: 100, width: 100 }}
    //         />
    //       </li>
    //       <br></br>
    //       <li>
    //         <SocialIcon
    //           className="social-icon"
    //           url="https://www.instagram.com/mikeycolsmusic/"
    //           style={{ height: 100, width: 100 }}
    //         />
    //       </li>
    //       <br></br>
    //       <li>
    //         <SocialIcon
    //           className="social-icon"
    //           url="https://www.linkedin.com/in/mike-collins-a83460145/"
    //           style={{ height: 100, width: 100 }}
    //         />
    //       </li>
    //     </ul>

    //     <h3 className="intro">
    //       For any enquiries, please feel free to send an email
    //     </h3>
    //     <div className="emailTo">
    //       <SocialIcon
    //         className="social-icon"
    //         url="mailto:hello@mikeycollins.co.uk"
    //         network="email"
    //         // bgColor="#ffffff"
    //         style={{ height: 100, width: 100 }}
    //       />
    //       {/* <FaEnvelope size={100} /> */}
    //     </div>
    //   </div>
    // </div>

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
