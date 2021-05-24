import React from "react";
import shannon from "../images/Shannon.jpg";
import moh from "../images/Mohammad.jpg";
import cliff from "../images/Cliff.jpg";
import brian from "../images/Brian.jpg";

const AboutPage = () => {
  return (
    <div>
      <div className="container center-align">
        <div className="center-align team-pics">
          <h1>ABOUT</h1>
          <div className="row">
            <div className="col s4" id="ShannonPic">
              <input
                type="image"
                id="Shan"
                src={shannon}
                lass="square"
                height="350"
                width="350"
                alt="unknown"
              />
            </div>
            <div className="col s4" id="BrianPic">
              <input
                type="image"
                id="Brian"
                src={brian}
                className="square"
                height="350"
                width="350"
                alt="unknown"
              />
            </div>
            <div className="col s4" id="CliffPic">
              <input
                type="image"
                id="Cliff"
                src={cliff}
                className="square"
                height="350"
                width="350"
                alt="unknown"
              />
            </div>
            <div className="col s12" id="MohammadPic">
              <input
                type="image"
                id="Mohammad"
                src={moh}
                className="square"
                height="350"
                width="350"
                alt="unknown"
              />
            </div>
          </div>

          <div className="row">
            <p className="hide" id="ShannonAbout">
              Shannon loves her job working as a senior pharmaceutical data
              consultant. Her days are filled with analyzing large data sets,
              collaborating with her amazing team and creating & sharing
              meaningful insights with industry leading pharma executives.
              Learning to code has always been a dream of Shannon's and
              enrolling in the University of Pennsylvania LPS program has been a
              fundamental catalyst in achieving her goal. Shannon enjoys short
              walks on the beach, hates pina coladas and doesn’t mind getting
              caught in the rain.
            </p>

            <p className="col hide" id="BrianAbout">
              Brian is a great guy, a great coder and has never seen a
              motorcycle.
            </p>
            <p></p>
            <p className="col hide" id="CliffAbout">
              Cliff is a great guy, a great coder and afraid of picture frames.
            </p>
            <p></p>
            <p className="col hide" id="MohammadAbout">
              Mohammad is a great guy, a great coder and planning a trip to
              Mars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
