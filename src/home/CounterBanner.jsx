import React from "react";
import "./home.css";

const bannerItems = [
  { img: "/images/vaccinationchart.webp", text: "Vaccination Chart" },
  { img: "/images/babycare.webp", text: "बाळाची काळजी कशी घ्याल‌?" },
];

export default function CounterBanner() {
  return (
    <div className="col-12 CounterBox">
      <div className="CounterInner text-light d-flex align-items-center justify-content-evenly flex-wrap">
        {bannerItems.map((item, index) => (
          <h1 key={index}>
            <img src={item.img} alt={item.text} /> {item.text}
          </h1>
        ))}
      </div>
    </div>
  );
}
