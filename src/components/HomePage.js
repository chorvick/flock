import React from "react";


function HomePage() {
  return (

    <main>
      <div className="container, intro">
        <div style={{ margintop: "200px" }} className="jumbotron">
          <h2 className="display-4">Flock</h2>
          <h5 className="mt-4">a place for friends</h5>
          <a className="btn btn-primary btn-lg mt-4" href="login.html" role="button">Log In</a>
        </div>
      </div>
    </main>
  );
}

export default HomePage;