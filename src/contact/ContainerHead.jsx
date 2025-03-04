import React from "react";
import './contact.css'
import { NavLink } from "react-router-dom";


export default function ContactHead()
{
    return(
        <>
            <div className="container-fluid mb-3 pt-3">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-evenly">
                        <h5>contact</h5>
                        <p>
                            you are here/
                            <span>
                                <NavLink className={'nav-link d-inline'} to={'/'}>Home</NavLink>
                            </span>/
                            <span>
                                <NavLink className={'nav-link d-inline'} to={'/contact'}>contact</NavLink>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row mt-3 mb-5">
                    <div className="col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.951759490617!2d74.742649!3d19.108185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb07bd2987ca5%3A0xfd36d1c872712c31!2sBAGAL%20NURSING%20HOME!5e0!3m2!1sen!2sin!4v1739634553290!5m2!1sen!2sin" width={'100%'} height={'500px'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}