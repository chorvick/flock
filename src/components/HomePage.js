import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function HomePage() {
  return (

    <main>
      <div className="container, intro">
        <div style={{ margintop: "200px" }} className="jumbotron">
          <h2 className="display-4">Flock</h2>
          <h5 className="mt-4">a place for friends</h5>
          <Link className="btn btn-primary btn-lg mt-4" to="/Login">Sign in</Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;