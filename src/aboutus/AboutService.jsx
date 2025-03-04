import React from "react";
import "./about.css";

const data = [
  {
    img: "./images/aboutService1.webp",
    desc: "We believe every child deserves the best medical attention, so we are equipped with the best infrastructure, and our treatments are as gentle as your love for your child. Dedicated to ensuring the well-being of newborns, infants, children and adolescents, our Neonatologist & pediatricians offer comprehensive general and preventive care, as well as care for children with complex or chronic health issues. Bagal Nursing Home is the best childcare hospital in Ahmednagar and pediatricians and pediatric specialists see more than 9000 pediatric visits each year. With access to leading-edge diagnostic and treatment resources, as well as a total commitment to family-centered care, our primary care paediatricians and paediatric professionals are well-equipped to diagnose and treat common, everyday illnesses, as well as serious childhood diseases and conditions like congenital deformities, hernia, respiratory diseases, phimosis, surgical interventions, bow legs, diabetes and congenital heart disease.",
  },
  {
    img: "./images/aboutService2.webp",
    desc: " The Obstetrics & Gynaecology department offers the most advanced comprehensive care for all Gynaecological health conditions for patients of all ages. The department is known for its highly skilled maternity service with antenatal, postnatal and family planning clinics added. The expert neonatologists at the department are devoted to rendering their Best Service at any time. The labor ward is well equipped with modern delivery beds, cardiotocogram, ultrasound machines, etc Specialists in obstetrics and gynecology at Clinic have deep experience treating people with a wide range of diseases and conditions of the gynecologic and urinary systems ",
  },
];
export default function AboutService() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-capitalize mt-5 mb-5 text-center">
            <h1>begal nursing home</h1>
          </div>
        </div>
        <div className="row text-center">
          {data.map((item) => {
            return (
              <>
                <div className="col-12 mt-3 col-xl-4 overflow-hidden imgBox d-flex align-items-center ustify-content-center">
                  <img src={item.img} alt="" />
                </div>
                <div className="col-12 col-xl-8">
                  <p>{item.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
