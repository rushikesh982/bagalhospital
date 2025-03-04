import React from "react";
import './home.css'


export default function PatientSaid()
{
    return(
        <>
            <div className="container patientBox mb-5">
                <div className="row">
                    <div className="col-12 mb-5 text-center">
                        <h1>What our patients said</h1>
                    </div>
                    <div className="col-12 text-center">
                        <div className="imgBox">
                        <img src="./images/patients.webp" alt="" />
                        </div>
                        <p>I strongly recommend this doctor because, Do not rush in, Clearly explains the problem to parents, Listens to us patiently, Does his profession with love and passion, Do not panic us and much more. Visit him, all parents will feel that difference! We visited him around 10.45pm at night. During that time also he listened to us slowly and explained us everything in detail. He is kind of person with great humanity, because he looks after children who come after 10pm also. Keep it up your good work doctor!</p>
                    </div>
                </div>
            </div>
        </>
    )
}