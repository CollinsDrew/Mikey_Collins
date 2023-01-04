import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="mainContainer">
      <h1>Contact</h1>

      <div className="contactList">
        <ul>
          <li>
            <a href="https://twitter.com/MikeyColsmusic">
              <i>
                <FaTwitter />
              </i>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/mikeycollinsmusic/">
              <i>
                <FaFacebook />
              </i>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mikeycolsmusic/">
              <i>
                <FaInstagram />
              </i>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mike-collins-a83460145/">
              <i>
                <FaLinkedin />
              </i>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Contact };
