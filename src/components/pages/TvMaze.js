import React from "react";

export default function TvMaze() {
  return (
    <div className="container-md">
      <div className="row bg-$gray-700">
        <div className="col-12 d-flex p-2 ml-2">
          <div className="col-4">
            <h5>Episode Switcher</h5>
          </div>
          <div className="col-4">
            <input
              className=" form-control form-control-sm"
              type="text"
              placeholder="Search for a word"
              id="search-input"
            />
          </div>
          <div className="col-4">
            <button
              className="btn btn-secondary btn-block btn-sm"
              onClick={() => this.filterByInput()}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <h5>testing</h5>
        </div>
      </div>
    </div>
  );
}
