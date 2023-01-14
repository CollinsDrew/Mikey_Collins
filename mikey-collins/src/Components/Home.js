import React from "react";
import "../Styles/Shows.css";
import Hoick from "../Images/Hoick.jpeg";
import Hero from "../Images/HeroImage.jpg";
import LunchMoney from "../Images/LunchMoney.jpeg";
import Potato from "../Images/potato.jpeg";
import Liminality from "../Images/liminality.jpeg";
import newHero from "../Images/newHero.jpg";

import { SocialIcon } from "react-social-icons";

function Home() {
  return (
    <div className="parallax_container">
      <div className="parallax"></div>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porttitor quis diam id mollis. Sed cursus ullamcorper facilisis. Donec
        id libero aliquet, faucibus nulla eu, porttitor velit. Cras id odio
        malesuada, congue metus a, pellentesque nulla. Nulla dictum rutrum
        mattis. Nulla in lacus finibus, molestie massa in, lobortis nunc. Morbi
        venenatis lobortis elit a vulputate. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Curabitur
        sollicitudin arcu mauris. Aenean non risus faucibus, condimentum felis
        sed, ultricies tortor. Nunc mi eros, ultricies vitae pharetra vel,
        commodo nec mi. Aliquam pulvinar dignissim purus et lobortis. Morbi
        condimentum feugiat augue, in placerat ex eleifend eget.
      </p>
      <br></br>
      <div>
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
                <h2>Sacrifice</h2>
                <h3>Lunch Money Life</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Lunch Money Life is a five-piece band with no remit. All music
                  composed communally and spontaneously.
                </p>
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
                <h2>Liminality</h2>
                <h3>Don't Problem</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Eight man brass and drums monster, Don't Problem, from South
                  East London, combine genres in a groundbreaking and innovative
                  way to reimagine what a brass band is capable of.
                </p>
                <SocialIcon
                  url="https://open.spotify.com/album/0NBozp4sM4S1BgxdD8uKIC?si=zsfWuFDmQoehve2hxAgqzQ&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>Roll</h2>
                <h3>Potato</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>lorem ipsum</p>
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
                <h2>New Works</h2>
                <h3>Tigercats</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  The New Works EP is another step into the new for Tigercats,
                  the sound of an increasingly political band, unbound by the
                  records they’ve made previously, and enjoying the freedom of
                  exploring and experimenting for these 5 new tracks.
                </p>
                <SocialIcon
                  url="https://open.spotify.com/album/3F7Rchhjw5i1CXj9y3gyar?si=89wuO3zwSken2tIX5OKTfw&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>Hexentanzplatz</h2>
                <h3>Alice Hubble</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>
                  Hexentanzplatz is the second album from Alice Hubble and the
                  follow up to the critically acclaimed "Polarlichter'.
                  Engineered by Alice Hubley, Sam Ayresm Rachel Kenedy and Mike
                  Collins.
                </p>
                <SocialIcon
                  url="https://open.spotify.com/album/7xaVhmgZ8IqVnWrBcdd971?si=0X00addTQ5OG-uRIwPpcUQ&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card">
            <div className="face face1">
              <div className="content">
                <h2>Lengsel Blir Til Gjemsel</h2>
                <h3>Virkelig</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>lorem ipsum</p>
                <SocialIcon
                  url="https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1"
                  className="spotify"
                />
              </div>
            </div>
          </div>

          {/* <div className="cards">
            <img src={LunchMoney} alt="Lunch Money Life" />
            <h2 className="cardTitle">Sacrifice</h2>
            <h3>Lunch Money Life</h3>
            <SocialIcon
              url="https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1"
              className="spotify"
            />
          </div>

          <div className="cards">
            <img src={Liminality} alt="Liminality" />
            <h2 className="cardTitle">Liminality</h2>
            <h3>Don't Problem</h3>
            <SocialIcon
              url="https://open.spotify.com/album/0NBozp4sM4S1BgxdD8uKIC?si=zsfWuFDmQoehve2hxAgqzQ&nd=1"
              className="spotify"
            />
          </div>

          <div className="cards">
            <img src={Potato} alt="Potato" />
            <h2 className="cardTitle">Roll</h2>
            <h3>Potato</h3>
            <SocialIcon
              url="https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1"
              className="spotify"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export { Home };
