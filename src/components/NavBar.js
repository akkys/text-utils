import React, { useState } from "react";

function NavBar(props) {
  var modes = props.mode === "light" ? "dark" : "light";
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{ borderBottom: "1px solid white" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h3>{props.title}</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={props.handleModes}
              />
              <label
                className={`form-check-label text-${modes}`}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.btnText}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
