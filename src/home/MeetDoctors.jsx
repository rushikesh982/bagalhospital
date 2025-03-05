import React from "react";
import "./home.css";

const data = [
  { video: "https://www.youtube.com/embed/GBvQvi79Fw4?si=zL65gl72D22ORmrY" },
  { video: "https://www.youtube.com/embed/nkC-HDGMdUM?si=-VY_3VBfbDLjR9lJ" },
  { video: "https://www.youtube.com/embed/a3fTkawDCyY?si=kFFMJfz0vFaa3dLl" },
  { video: "https://www.youtube.com/embed/a3fTkawDCyY?si=kFFMJfz0vFaa3dLl" },
];

export default function MeetDoctors() {
  // Limit the videos to 3
  const limitedVideos = data.slice(0, 3);

  return (
    <div className="d-flex align-items-center justify-content-evenly flex-wrap mb-5">
      {limitedVideos.map((item, index) => (
        <div key={index} className="mt-1">
          <iframe
            width="360"
            height="215"
            src={item.video}
            title={`YouTube video player ${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
