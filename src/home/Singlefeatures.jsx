import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

export default function Singlefeatures() {
  return (
    <>
      <div className="container-fluid singlefeature">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 singlefeatueinner text-center text-light">
            <i className="ri-flask-line"></i>
            <h1>About us</h1>
            <p>
              We believe every child deserves the best medical attention, so we
              are equipped with the best infrastructure, and our treatments are
              as gentle as your love for your child.
            </p>
            <button className="button-57" role="button">
              <NavLink className={'nav-link d-inline'} to={'/about'}><span className="text">Read More</span>
              <span>Read More</span></NavLink>
            </button>
          </div>
            <div className="featurecard col-12 col-md-12 col-lg-4">
              <div className="icon">🕒</div>
              <h2>OPENING HOURS</h2>
              <p className="text-muted">Hospital OPD Time</p>

              <div className="doctor">
                <span>
                  <strong>Dr. Neelam Bagal</strong>
                </span>
                <span>Mon - Sat</span>
                <span>11:00 AM - 5:00 PM</span>
              </div>

              <div className="doctor">
                <span>
                  <strong>Dr. Dilip Bagal</strong>
                </span>
                <span>Mon - Sat</span>
                <span>11:00 AM - 3:00 PM</span>
              </div>

              <div className="doctor">
                <span></span>
                <span></span>
                <span>6:00 PM - 8:00 PM</span>
              </div>

              <p className="emergency">
                🏥 Hospital 24x7 Emergency Service Available
              </p>
            </div>
          <div className="col-12 col-md-12 col-lg-4 text-center singlefeatueinner text-light">
          <i className="ri-hospital-line"></i>
          <h1>Appointment</h1>
          <p>Book online Appointment </p>
          <p>or</p>
          <p>Call us 9403820779 </p>
          <button className="btn btn-outline-primary text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
}
