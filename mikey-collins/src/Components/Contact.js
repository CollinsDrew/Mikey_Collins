import React from "react";
import "../Styles/Contact.css";
import { Link, useParams } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="mainContainer">
      <h1 className="title">Follow on social media</h1>

      <h3 className="intro">
        Here you can find links to all of Mikey's social media profiles, where
        he shares updates about his music, touring, and more. Follow him and
        join the conversation on your favorite platforms. Stay connected with
        Mikey and never miss a beat!
      </h3>

      <div className="contactList">
        <ul>
          <li>
            <SocialIcon
              url="https://twitter.com/MikeyColsmusic"
              style={{ height: 100, width: 100 }}
            />
          </li>
          <br></br>
          <li>
            <SocialIcon
              className="socialIcon"
              url="https://www.facebook.com/mikeycollinsmusic/"
              style={{ height: 100, width: 100 }}
            />
          </li>
          <br></br>
          <li>
            <SocialIcon
              url="https://www.instagram.com/mikeycolsmusic/"
              style={{ height: 100, width: 100 }}
            />
          </li>
          <br></br>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/mike-collins-a83460145/"
              style={{ height: 100, width: 100 }}
            />
          </li>
        </ul>

        <h3 className="intro">
          For any inquiries, please feel free to send an email
        </h3>
        <div className="emailTo">
          <SocialIcon
            url="mailto:hello@mikeycollins.co.uk"
            network="email"
            bgColor="#ffffff"
            style={{ height: 25, width: 25 }}
          />
          <FaEnvelope size={100} />
        </div>
      </div>
    </div>
  );
}

export { Contact };
