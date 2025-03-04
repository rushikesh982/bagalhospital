import React from "react";
import "./home.css";

const data = [
  {
    'img': "./images/doctor-1.webp",
    'degree': "dr dilip bagal",
    'specialist': "(Paediatric Consultant)",
  },
  {
    'img': "./images/doctor-2.webp",
    'degree': "Dr. Nilam Bagal",
    'specialist': "(Obsterian and Gyanecologist)",
  },
];
export default function HomeDoctors() {
  return (
    <>
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1>Meet Our Doctors</h1>
          </div>
        </div>
      </div>
      <div className="doctorBox mb-5">
        {data.map((item) => {
          return (
            <>
              <div className="doctor">
                <div className="card">
                  <div className="card-body overflow-hidden">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card-footer">
                  <h5>{item.degree}</h5>
                  <p>{item.specialist}</p>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        })}
        {/* <div className="doctor2"></div>   */}
      </div>
    </>
  );
}
