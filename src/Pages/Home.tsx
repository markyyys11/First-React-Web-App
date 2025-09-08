import React from "react";

export default function Home() {
  return (
    <div className="container list-group gap-2">
      <div className="card" style={{ width: 100 + "%" }} aria-hidden="true">
        <div className=" p-3 ">
          <div className="card-body row">
            <div className="col-9">
              <h1 className="card-title">Strength</h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body col-1">
              <div className="list-group gap-1" style={{ width: 40 + "px" }}>
                <a className="btn btn-primary" style={{ width: 100 + "%" }}>
                  +
                </a>
                <input style={{ width: 100 + "%" }}></input>
                <a className="btn btn-primary" style={{ width: 100 + "%" }}>
                  -
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
