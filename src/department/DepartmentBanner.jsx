import React from "react";
import './department.css';
import { NavLink } from "react-router-dom";



export default function DepartmentBanner()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 depbanner">
                        <p className="fw-bold title text-dark">department</p>
                        <p className="text-capitalize">you are <here />
                        <span className="text-uppercase"><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink></span>/<span className="text-uppercase"><NavLink className={'nav-link d-inline bannerinfo'} to={'/about'}>department</NavLink></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}