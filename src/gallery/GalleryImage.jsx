import React from "react";
import "./gallery.css";

const data = [
  {
    'img': "./images/Bgal nursing gallery1.webp",
  },
  {
    'img': "./images/Bgal nursing gallery2.webp",
  },
  {
    'img': "./images/Bgal nursing gallery3.webp",
  },
  {
    'img': "./images/Bgal nursing gallery4.webp",
  },
  {
    'img': "./images/Bgal nursing gallery5.webp",
  },
  {
    'img': "./images/Bgal nursing gallery6.webp",
  },
];

export default function GalleryImage() {
  return (
    <>
      <div className="container-md container-fluid mb-5 mt-5">
        <div className="row gallerybox">
          {data.map((item) => {
            return (
              <>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card ">
                        <div className="card-body overflow-hidden">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
