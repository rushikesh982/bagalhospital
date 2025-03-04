import React from "react";
import './services.css'



const data =[
    {
        'img':'./images/servicesgallery/adolscent.webp',
        'title':'guidence for adolecent'
    },
    {
        'img':'./images/servicesgallery/ambulance.webp',
        'title':'ambulance'
    },
    {
        'img':'./images/servicesgallery/central oxygen system.webp',
        'title':'central oxygen system'
    },
    {
        'img':'./images/servicesgallery/general ward.webp',
        'title':'general ward'
    },
    {
        'img':'./images/servicesgallery/highrisk.webp',
        'title':'high risk'
    },
    {
        'img':'./images/servicesgallery/kangaroo mother.webp',
        'title':'kangaroo mother'
    },
    {
        'img':'./images/servicesgallery/LED phototherapy.webp',
        'title':'LED phototherapy'
    },
    {
        'img':'./images/servicesgallery/medicalstore.webp',
        'title':'medicalstore'
    },
    {
        'img':'./images/servicesgallery/multipara monitor.webp',
        'title':'multipara monitor'
    },
    {
        'img':'./images/servicesgallery/nicu.webp',
        'title':'nicu'
    },
    {
        'img':'./images/servicesgallery/outpatient.webp',
        'title':'out patient'
    },
    {
        'img':'./images/servicesgallery/picu.webp',
        'title':'picu'
    },
    {
        'img':'./images/servicesgallery/premature.webp',
        'title':'premature'
    },
    {
        'img':'./images/servicesgallery/radient warmer.webp',
        'title':'radient warmer'
    },
    {
        'img':'./images/servicesgallery/special treatment.webp',
        'title':'special treatment'
    },
    {
        'img':'./images/servicesgallery/surfactant facility.webp',
        'title':'surfactant facility'
    },
    {
        'img':'./images/servicesgallery/trained & experienced staff.webp',
        'title':'trained & experienced staff'
    },
    {
        'img':'./images/servicesgallery/vaccinations.webp',
        'title':'vaccinations'
    },
    {
        'img':'./images/servicesgallery/ventilator.webp',
        'title':'ventilator'
    },

]
export default function Servicesgallery()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1>Pediatrics Services</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((item)=>{
                            return(
                                <>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="card text-center border-0">
                                            <div className="card-body">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}