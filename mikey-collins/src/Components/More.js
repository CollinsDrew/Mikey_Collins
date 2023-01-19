import React from "react";
import "../Styles/More.css";
import { SocialIcon } from "react-social-icons";

import johanna from "../Images/lessonsformutants.jpeg";
import lunch from "../Images/LunchMoney.jpeg";
import potato from "../Images/potato.jpeg";
import ramsden from "../Images/Ramsden.jpeg";
import seazoo from "../Images/Seazoo.jpeg";
import longy from "../Images/longy.jpeg";

function More() {
  const projects = [
    {
      artist: "Johanna Warren",
      title: "'Lesson For Mutants'",
      image: johanna,
      credit: "Engineering and Mix",
      link: "https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k",
    },
    {
      artist: "lunch Money Life",
      title: "'Sacrifice'",
      image: lunch,
      credit: "Engineering",
      link: "https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1",
    },
    {
      artist: "Potato",
      title: "'Roll'",
      image: potato,
      credit: "Engineering & Mix",
      link: "https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1",
    },
    {
      artist: "Ben Ramsden",
      title: "'To Care",
      image: ramsden,
      credit: "Engineering & Mix",
      link: "https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8",
    },
    {
      artist: "Seazoo",
      title: "'Beaten By The Rain'",
      image: seazoo,
      credit: "Mix",
      link: "https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC",
    },
    {
      artist: "Longy",
      title: "'The Underclass'",
      image: longy,
      credit: "Producer & Engineer",
      link: "https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1",
    },
  ];

  return (
    <div className="container-more">
      <div className="parallax2"></div>
      <br></br>

      <div className="more-title">
        <h1>Recent Work</h1>
      </div>
      <div class="courses-container">
        {projects.map((projects, index) => (
          <div class="course" key={index}>
            <div class="course-preview">
              <img src={projects.image} className="resize" />
            </div>
            <div class="course-info">
              <div class="progress-container"></div>
              <h3 class="content-info">{projects.title}</h3>
              <h2 class="content-info">{projects.artist}</h2>
              <h5 class="content-info">{projects.credit}</h5>

              <div class="spotify">
                <SocialIcon url={projects.link} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { More };
