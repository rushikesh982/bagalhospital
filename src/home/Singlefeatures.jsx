import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

export default function Singlefeatures() {
  return (
    <>
      <div className="container-fluid singlefeature">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 singlefeatueinner text-center text-light">
            <i class="ri-flask-line"></i>
            <h1>About us</h1>
            <p>
              We bel5eve every child deserves the best medical attention, so we
              are equipped with the best infrastructure, and our treatments are
              as gentle as your love for your child.
            </p>
            <button class="button-57" role="button">
              <NavLink className={'nav-link d-inline'} to={'/about'}><span class="text">Read More</span>
              <span>Read More</span></NavLink>
            </button>
          </div>
            <div class="featurecard col-12 col-md-12 col-lg-4">
              <div class="icon">🕒</div>
              <h2>OPENING HOURS</h2>
              <p class="text-muted">Hospital OPD Time</p>

              <div class="doctor">
                <span>
                  <strong>Dr. Neelam Bagal</strong>
                </span>
                <span>Mon - Sat</span>
                <span>11:00 AM - 5:00 PM</span>
              </div>

              <div class="doctor">
                <span>
                  <strong>Dr. Dilip Bagal</strong>
                </span>
                <span>Mon - Sat</span>
                <span>11:00 AM - 3:00 PM</span>
              </div>

              <div class="doctor">
                <span></span>
                <span></span>
                <span>6:00 PM - 8:00 PM</span>
              </div>

              <p class="emergency">
                🏥 Hospital 24x7 Emergency Service Available
              </p>
            </div>
          <div className="col-12 col-md-12 col-lg-4 text-center singlefeatueinner text-light">
          <i class="ri-hospital-line"></i>
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
