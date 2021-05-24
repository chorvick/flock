import React from "react";
import shannon from "../images/Shannon.jpg";
import moh from "../images/Mohammad.jpg";
import cliff from "../images/Cliff.jpg";
import brian from "../images/Brian.jpg";
import $ from "jquery";

function showShannonAbout() {
  $("#ShannonAbout").removeClass("hide");
  $("#Brian").addClass("hide");
  $("#Cliff").addClass("hide");
  $("#Mohammad").addClass("hide");
  $("#ShannonPic").removeClass("col s4");
  $("#ShannonPic").addClass("col s12");
  $("button").removeClass("hide");
  $("h2").addClass("hide");
  $("#ShannonGithub").removeClass("hide");
}

function showBrianAbout() {
  $("#BrianAbout").removeClass("hide");
  $("#Shan").addClass("hide");
  $("#Cliff").addClass("hide");
  $("#Mohammad").addClass("hide");
  $("#BrianPic").removeClass("col s4");
  $("#BrianPic").addClass("col s12");
  $("button").removeClass("hide");
  $("h2").addClass("hide");
  $("#BrianGithub").removeClass("hide");
}

function showCliffAbout() {
  $("#CliffAbout").removeClass("hide");
  $("#Shan").addClass("hide");
  $("#Kyle").addClass("hide");
  $("#Mohammad").addClass("hide");
  $("#CliffPic").removeClass("col s4");
  $("#CliffPic").addClass("col s12");
  $("button").removeClass("hide");
  $("h2").addClass("hide");
  $("#CliffGithub").removeClass("hide");
}

function showMohammadAbout() {
  $("#MohammadAbout").removeClass("hide");
  $("#Shan").addClass("hide");
  $("#Brian").addClass("hide");
  $("#Cliff").addClass("hide");
  $("#MohammadPic").removeClass("col s4");
  $("#MohammadPic").addClass("col s12");
  $("button").removeClass("hide");
  $("h2").addClass("hide");
  $("#MohammadGithub").removeClass("hide");
}

function GangsAllHere() {
  $("#Shan").removeClass("hide");
  $("#Brian").removeClass("hide");
  $("#Cliff").removeClass("hide");
  $("#Mohammad").removeClass("hide");

  $("#ShannonPic").removeClass();
  $("#ShannonPic").addClass("col s4");
  $("#BrianPic").removeClass();
  $("#BrianPic").addClass("col s4");
  $("#CliffPic").removeClass();
  $("#CliffPic").addClass("col s4");
  $("#MohammadPic").removeClass();
  $("#MohammadPic").addClass("col s6");

  $("#ShannonAbout").addClass("hide");
  $("#BrianAbout").addClass("hide");
  $("#CliffAbout").addClass("hide");
  $("#MohammadAbout").addClass("hide");

  $("#ShannonGithub").addClass("hide");
  $("#BrianGithub").addClass("hide");
  $("#CliffGithub").addClass("hide");
  $("#MohammadGithub").addClass("hide");

  $("button").addClass("hide");

  $("h2").removeClass("hide");
}

$("#Shan").on("click", function () {
  showShannonAbout();
});
$("#Brian").on("click", function () {
  showBrianAbout();
});
$("#Cliff").on("click", function () {
  showCliffAbout();
});
$("#Mohammad").on("click", function () {
  showMohammadAbout();
});
$("button").on("click", function () {
  GangsAllHere();
});

const AboutPage = () => {
  return (
    <div>
      <div className="container center-align">
        <div className="center-align team-pics">
          <button class="hide btn" id="meetTeamBtn" onClick={GangsAllHere}>
            BACK
          </button>
          <h1>ABOUT</h1>
          <div className="row">
            <div className="col s4" id="ShannonPic" onClick={showShannonAbout}>
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
            <div className="col s4" id="BrianPic" onClick={showBrianAbout}>
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
            <div className="col s4" id="CliffPic" onClick={showCliffAbout}>
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
            <div
              className="col s12"
              id="MohammadPic"
              onClick={showMohammadAbout}
            >
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
