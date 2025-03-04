import React from "react";
import "./contact.css";

export default function Forms() {
  return (
    <>
      <div className="container formbox">
        <div className="row">
          <div className="col-12 col-lg-8">
            <form>
              <div class="form-text mb-3 fw-bold">
                Fill out all required Field to send a Message. Please don't
                spam,Thank you!
              </div>

              <div class="mb-3">
                <input
                  type="texxt"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="your name..."
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  placeholder="your mail.."
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <input
                  type="texxt"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="subject"
                />
              </div>
              <div class="mb-3">
                <textarea
                  rows={"5"}
                  cols={"15"}
                  class="form-control formText"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <div className="card border-0">
              <div className="card-body">
                <h5>Bagal Nursing Home.</h5>
                <ul className="list-group">
                  <li className="list-group-item border-0"><i class="ri-home-line"></i>Viraj Estate, Near Tarakpur Bus Stand, Ahmednagar </li>
                  <li className="list-group-item border-0">
                    <a className="text-dark text-decoration-none" href="tel:+91 9403820779"><i class="ri-phone-line ml-2"></i>9403820779</a>
                  </li>
                  <li className="list-group-item border-0">
                    <a className="text-dark text-decoration-none" href="mailto:bagalnursinghome@yahoo.com">
                    <i class="ri-mail-line ml-2"></i>bagalnursinghome@yahoo.com
                    </a>
                  </li>
                </ul>
                <h3>Social Media</h3>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-evenly">
              <i class="p-3 text-light bg-primary ri-facebook-line"></i>
              <i class="p-3 text-light bg-primary ri-twitter-line"></i>
              <i class="p-3 text-light bg-primary fa-brands fa-pinterest"></i>
              <i class="p-3 text-light bg-primary ri-google-fill"></i>
              <i class="p-3 text-light bg-primary ri-linkedin-box-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
