import React from "react";
import "./home.css";

const data = [
  {
    img: "./images/choose-us-img1.webp",
  },
  {
    img: "./images/choose-us-img2.webp",
  },
  {
    img: "./images/choose-us-img3.webp",
  },
  {
    title: "Great Infrastructure",
    logo: "ri-hospital-line",
    desc: "Hospitals are designed to keep a child involved and calm with bright decor and play areas",
  },
  {
    title: "Qualified Doctors",
    logo: "ri-nurse-fill",
    desc: "Our team of dedicated doctors is highly qualified and committed to excellence in providing an aesthetically pleasing environment to ensure quality in medical care.",
  },
  {
    title: "Emergency Support",
    logo: "fa fa-ambulance",
    desc: "We support treatment to the ones who are in need of critical medical treatment.",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <div className="WhyChooseUsBox">
        <div className="container-md container-fluid mb-5">
          <div className="row">
            <div className="col-12 text-center mt-5">
              <h1 className="text-capitalize">why choose us</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-ride="carousel" // Enables auto-slide
                data-bs-interval="3000" // Sets slide interval to 3 seconds
                data-bs-touch="false"
              >
                <div className="carousel-inner">
                  {data.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img src={item.img} className="d-block w-100" alt="..." />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 right-box">
              {data.slice(3).map((item, index) => (
                <div key={index} className="mb-3">
                  <i className={item.logo}></i>
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
