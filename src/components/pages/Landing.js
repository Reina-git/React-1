import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>THis is the landing page. Is it working?</h1>{" "}
          <Link to="/random-user" className="btn">
            Random User
          </Link>
        </div>
        <div className="col">
          <Link to="/tv-maze" className="btn">
            Tv Maze
          </Link>
        </div>
      </div>
    </div>
  );
}
