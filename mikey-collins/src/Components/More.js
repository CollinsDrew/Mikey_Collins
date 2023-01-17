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
  return (
    <div className="container-more">
      <div className="parallax2"></div>
      <br></br>

      <div className="more-title">
        <h1>Recent Work</h1>
      </div>
      <div class="courses-container">
        {/* Item 1 */}
        <div class="course">
          <div class="course-preview">
            <img src={johanna} />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">'Lesson for Mutants'</h3>
            <h2 className="content-info">Johanna Warren</h2>
            <h5 className="content-info">Engineering and Mix</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/7f82oLZDQvL6K3pIj54n7k" />
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div class="course">
          <div class="course-preview">
            <img src={lunch} className="resize" />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">'Sacrifice'</h3>
            <h2 className="content-info">Lunch Money Life</h2>
            <h5 className="content-info">Engineering</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/4fbykSaOFsqxeDxr536naf?si=hz0IE4NiSfK5rzxQrkwCwA&nd=1" />
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div class="course">
          <div class="course-preview">
            <img src={potato} className="resize" />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">''Roll'</h3>
            <h2 className="content-info">Potato</h2>
            <h5 className="content-info">Engineering & Mix</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/0bKEkanTdG7nAsxHBuNp1H?si=9QShULHZQ8url5iU75HpCg&nd=1" />
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div class="course">
          <div class="course-preview">
            <img src={ramsden} className="resize" />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">'To Care'</h3>
            <h2 className="content-info">Ben Ramsden with Korda Quartet</h2>
            <h5 className="content-info">Engineering & Mix</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/0mRXaXsOuXBoGmZlnoD5J8" />
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div class="course">
          <div class="course-preview">
            <img src={seazoo} className="resize" />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">'Beaten by the Rain'</h3>
            <h2 className="content-info">Seazoo</h2>
            <h5 className="content-info">Mix</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/2O7urdkQCW0kGgiuzsAeCC" />
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div class="course">
          <div class="course-preview">
            <img src={longy} className="resize" />
          </div>
          <div class="course-info">
            <div class="progress-container"></div>
            <h3 className="content-info">'The Underclass'</h3>
            <h2 className="content-info">Longy</h2>
            <h5 className="content-info">Producer & Engineering</h5>

            <div className="spotify">
              <SocialIcon url="https://open.spotify.com/album/3byuP2smkehUGTnlWwHzlz?si=utNAeasiS9itJX1h0lc2dw&nd=1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { More };
