import React from "react";
import "../Styles/Contact.css";
import { Link, useParams } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="mainContainer">
      {/* <h1 className="title">Contact</h1> */}

      <div className="contactList">
        <ul>
          <li>
            <SocialIcon
              url="https://twitter.com/MikeyColsmusic"
              //   style={{ height: 150, width: 150 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.facebook.com/mikeycollinsmusic/"
              //   style={{ height: 150, width: 150 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.instagram.com/mikeycolsmusic/"
              //   style={{ height: 150, width: 150 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/mike-collins-a83460145/"
              //   style={{ height: 150, width: 150 }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Contact };
