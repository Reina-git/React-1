import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div>
      <h1>THis is the landing page. Is it working?</h1>{" "}
      <Link to="/random-user" className="btn">
        Random User
      </Link>
    </div>
  );
}
