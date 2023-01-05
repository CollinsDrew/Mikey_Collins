import React from "react";
import "../Styles/Home.css";

import Hoick from "../Images/Hoick.jpeg";
import Hero from "../Images/HeroImage.jpg";
import { SocialIcon } from "react-social-icons";

function Home() {
  return (
    <div className="home-page">
      {/* <h1 className="home-page__title">Mikey Collins Music</h1> */}
      <img src={Hero} alt="Mikey Collins" className="home-page__image" />
      <p className="home-page__description">
        Welcome to the official website for Mikey Collins, the future of
        electronic music. Here you can find all the latest information on my new
        releases, tour dates, and more.
      </p>

      <div className="home-page__banner">
        <img
          src={Hoick}
          alt="Mikey Collins"
          className="home-page__banner-image"
        />
        <div className="home-page__banner-text">
          <h1 className="home-page__banner-title">Hoick</h1>
          <h3 className="home-page__banner-artist">Mikey Collins</h3>
          <p className="home-page__banner-description">
            Hoick is the solo album from Allo Darlin’ drummer Mikey Collins, who
            combines his love of solid grooves and joyous harmonies to create a
            fun and sonically varied record. Mikey played most of the
            instruments and mixed the record himself, with some assistance from
            Laura Kovic (Tigercats) on vocals and fellow Allo Darlin' member
            Paul Rains on lead guitar. The flicker of his previous band provided
            the building blocks of an upbeat, positive record, but Mikey wanted
            to add his own quirky, disco spin & sonic expansiveness, aided by
            co-producer John Winfield (who has worked with Jimmy Somerville),
            with the aim of making a record that people stood a chance of being
            able to dance to.
          </p>
          <div className="home-page__banner-icons">
            <SocialIcon url="https://open.spotify.com/artist/0in8U5LueFlvZQRM4A1WWZ" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
