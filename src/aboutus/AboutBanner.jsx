import React from "react";
import './about.css';
import { NavLink } from "react-router-dom";



export default function AboutBanner()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 banner">
                        <p className="fw-bold title text-dark">About us</p>
                        <p className="text-capitalize">you are <here />
                        <span className="text-uppercase"><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink></span>/<span className="text-uppercase"><NavLink className={'nav-link d-inline'} to={'/about'}>about</NavLink></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}