import React from "react";
import "./home.css";

const bannerItems = [
  { img: "/images/vaccinationchart.webp", text: "Vaccination Chart" },
  { img: "/images/babycare.webp", text: "बाळाची काळजी कशी घ्याल‌?" },
  { img: "/images/nutrition.webp", text: "Nutrition Guide" },
  { img: "/images/growth.webp", text: "Child Growth Stages" },
  { img: "/images/extra.webp", text: "Extra Item (Won't Show)" }, // Will be ignored
];

export default function CounterBanner() {
  // Restrict to a maximum of 4 items
  const limitedItems = bannerItems.slice(0, 4);

  return (
    <div className="col-12 CounterBox">
      <div className="CounterInner text-light d-flex align-items-center justify-content-evenly flex-wrap">
        {limitedItems.map((item, index) => (
          <h1 key={index}>
            <img src={item.img} alt={item.text} /> {item.text}
          </h1>
        ))}
      </div>
    </div>
  );
}
