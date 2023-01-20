import React from "react";
import "../Styles/About.css";
import Hoick from "../Images/Hoick.jpeg";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="parallax_container">
      <div className="parallax"></div>

      <div>
        <div className="home-page__banner">
          {/* <img
            src={Collins}
            alt="Mikey Collins"
            className="home-page__banner-image"
          /> */}

          <div className="home-page__banner-text">
            {/* <h1 className="home-page__banner-title"></h1> */}
            <h3 className="home-page__banner-artist">Mikey Collins</h3>
            <p className="home-page__banner-description">
              Mikey Collins is a multi-talented artist who has made a name for
              himself in the music industry as a producer, mixing engineer,
              musician, and songwriter. With a passion for creating innovative
              and compelling music, Mikey has worked with a wide range of
              artists and bands, helping them bring their visions to life.
              Whether he's behind the mixing board or playing on stage, Mikey's
              dedication to his craft and his unyielding drive to create the
              best music possible is evident in every project he works on. Based
              on the Kent coast. working mostly based out of his residential
              studio in Ramsgate – Big Jelly Studios – have a browse on this
              site for recent work, upcoming shows (both with Allo Darlin' and
              solo) and get in touch to say heh!
            </p>

            <div className="button">
              <a
                href="https://www.bigjellystudios.com/"
                type="button"
                className="button-86"
              >
                Big Jelly
              </a>
            </div>
          </div>
        </div>
        {/* <br></br> */}
        <hr></hr>

        <div className="home-page__banner_hoick">
          <img
            src={Hoick}
            alt="Mikey Collins"
            className="home-page__banner-image"
          />
          <div className="home-page__banner-text">
            <h1 className="home-page__banner-title">Hoick</h1>
            <h3 className="home-page__banner-artist">Mikey Collins</h3>
            <p className="home-page__banner-description">
              Hoick is the solo album from Allo Darlin’ drummer Mikey Collins,
              who combines his love of solid grooves and joyous harmonies to
              create a fun and sonically varied record. Mikey played most of the
              instruments and mixed the record himself, with some assistance
              from Laura Kovic (Tigercats) on vocals and fellow Allo Darlin'
              member Paul Rains on lead guitar. The flicker of his previous band
              provided the building blocks of an upbeat, positive record, but
              Mikey wanted to add his own quirky, disco spin & sonic
              expansiveness, aided by co-producer John Winfield (who has worked
              with Jimmy Somerville), with the aim of making a record that
              people stood a chance of being able to dance to.
              <div className="home-page__banner-icons">
                <SocialIcon
                  url="https://open.spotify.com/artist/0in8U5LueFlvZQRM4A1WWZ"
                  className="mainSpotify"
                />
              </div>
            </p>
          </div>
        </div>
        <div className="parallax1"></div>
      </div>
    </div>
  );
}

export { About };
