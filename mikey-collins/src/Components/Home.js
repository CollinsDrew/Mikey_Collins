import React from "react";
import "../Styles/Home.css";
import Hoick from "../Images/Hoick.jpeg";

import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Home() {
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
              Producer, mix engineer and musician based on the Kent coast.
              working mostly based out of his residential studio in Ramsgate –
              Big Jelly Studios – have a browse on this site for recent work,
              upcoming shows (both with Allo Darlin' and solo) and get in touch
              to say heh!
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
          {/* <img
            src={bjs}
            alt="Mikey Collins"
            className="home-page__banner-image"
          /> */}
        </div>
        {/* <br></br> */}

        <div className="parallax2">
          {/* <h1 className="recentWork">Recent Work</h1> */}
        </div>
        <br></br>

        {/* Cards */}
        {/* Card 1 */}
        <div className="cardContainer">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'Sacrifice'</h2>

                <h3>Lunch Money Life</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Engineer</p>
                {/* <img src={LunchMoney} alt="Lunch Money Life" /> */}
                <SocialIcon
                  url="https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'Lesson for Mutants'</h2>

                <h3>Johanna Warren</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Engineer & Mix</p>
                <SocialIcon
                  url="https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'Roll'</h2>

                <h3>Potato</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Engineer & Mix</p>
                <SocialIcon
                  url="https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'To Care'</h2>

                <h3>Ben Ramsden with Korda Quartet</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Engineer / Mix</p>
                <SocialIcon
                  url="https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'Beaten by the Rain'</h2>

                <h3>Seazoo</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Mix</p>
                <SocialIcon
                  url="https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>'The Underclass'</h2>

                <h3>Longy</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>Producer & Engineer</p>
                <SocialIcon
                  url="https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          <div className="button2">
            <Link to="/more">
              <button className="button-86">More</button>
            </Link>
          </div>
        </div>

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

export { Home };
