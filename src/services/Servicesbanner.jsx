import React from "react";
import './services.css';
import { NavLink } from "react-router-dom";



export default function Servicesbanner()
{
    return(
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 servicesbanner">
                        <p className="fw-bold title text-dark">About us</p>
                        <p className="text-capitalize">you are <here />
                        <span className="text-uppercase"><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink></span>/<span className="text-uppercase"><NavLink className={'nav-link d-inline'} to={'/about'}>servies</NavLink></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}