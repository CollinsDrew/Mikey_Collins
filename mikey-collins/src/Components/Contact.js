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
              <p className="socialLink">
                Stay connected with Mikey by following his Facebook page, where
                you can find all the latest news, photos, and videos.
              </p>
              <a
                href="https://www.facebook.com/mikeycollinsmusic/"
                type="button"
              >
                Mikey's Facebook
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
                Keep up with Mikey Collins' latest music news and updates by
                following his Twitter account! Here you'll find information on
                upcoming shows, new music releases, and exclusive
                behind-the-scenes content. Stay connected with Mikey by
                following his Twitter page.
              </p>
              <a href="https://twitter.com/MikeyColsmusic" type="button">
                Mikey's Twitter
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
                Get a behind-the-scenes look at Mikey Collins' music career by
                following him on Instagram! Here you'll find exclusive photos
                and videos from his shows, recording sessions, and more. Stay
                connected with Mikey by following his Instagram page, where you
                can find all the latest updates and photos of him.
              </p>
              <a href="https://www.instagram.com/mikeycolsmusic/" type="button">
                Mikey's Insta
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
                Want to get in touch with Mikey Collins for any enquiries? You
                can reach him through email!
              </p>
              <a href="mailto:hello@mikeycollins.co.uk" type="button">
                Email Mikey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
