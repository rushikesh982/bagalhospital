import React from "react";
import "./home.css";

const data = [
  {
    img: "./images/homeSErvices1.webp",
    name: "Neonatal Intensive Care Unit",
  },
  {
    img: "./images/homeSEervices2.webp",
    name: "Pediatric Intensive Care Unit",
  },
  {
    img: "./images/homeSEervices3.webp",
    name: "Premature Baby Care Unit",
  },
  {
    img: "./images/homeSEervices4.webp",
    name: "IVF",
  },
  {
    img: "./images/homeSEervices5.webp",
    name: "Ambulance Service",
  },
  {
    img: "./images/homeSEervices6.webp",
    name: "Infertility",
  },
];

export default function HomeServices() {
  return (
    <>
      <div className="container mb-5">
        <div className="row text-center">
          <div className="col-12 mb-4 text-center">
            <h1 className="serviceTitle">our services</h1>
          </div>
        {data.map((item) => {
          return (
            <>
              <div className="col-12 col-lg-4">
                <div className="card servicesCard text-center border-0">
                  <div className="card-body">
                    <img src={item.img} alt=""/>
                    <p><a href="#top" className="back-to-top text-dark text-decoration-none">{item.name}</a></p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="col-12">
            <button className="btn btn-primary mt-5 text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal">more services</button>
            
        </div>
        </div>
      </div>
    </>
  );
}
