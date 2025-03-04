import React from "react";
import "./home.css";

export default function MeetDoctors() {
  return (
    <>
      <div className=" d-flex align-items-center justify-content-evenly flex-wrap mb-5">
        <div className="mt-1">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/GBvQvi79Fw4?si=zL65gl72D22ORmrY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-1">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/nkC-HDGMdUM?si=-VY_3VBfbDLjR9lJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-1">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/a3fTkawDCyY?si=kFFMJfz0vFaa3dLl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
