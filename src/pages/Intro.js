import React from "react";


function Intro(margin) {
  return (
    <main>
      <div className="container, intro">
        <div style={{margintop: "200px"}} className="jumbotron">
          <h1 className="display-4">
            The Flock </h1>
          <h4 className="mt-4">Friends</h4>
          <a className="btn btn-primary btn-lg mt-4" href="login.html" role="button">Log In</a>
        </div>
      </div>
    </main>

  );
}

export default Intro;