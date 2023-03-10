import React from "react";
import "../Styles/Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>Copyright &copy;2023 DC Development </p>
        {/* <h3>DC Development</h3> */}
        <p>Website designed and created by Drew Collins</p>
        <ul className="socials">
          <li>
            <SocialIcon
              url="https://twitter.com/_Drew_Collins"
              className="socials"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/drew-m-collins/"
              className="socials"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100089274055218"
              className="socials"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.instagram.com/dc_web_development_"
              className="socials"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Footer };
