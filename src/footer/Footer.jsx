import React from "react";
import './footer.css'


export default function Footer()
{
    return(
        <>
            <div className="container-fluid container-md footerbox text-start border-top pt-4 border-2">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5>about us</h5>
                        <p>We believe every child deserves the best medical attention, so we are equipped with the best infrastructure, and our treatments are as gentle as your love for your child. Dedicated to ensuring the well-being of newborns, infants, children and adolescents, our Neonatologist & pediatricians offer comprehensive general.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 ourServies">
                        <h5>our services</h5>
                        <ul>
                            <li><i class="ri-check-fill"></i> Neonatal Intensive Care Unit</li>
                            <li><i class="ri-check-fill"></i> Pediatric Intensive Care Unit</li>
                            <li><i class="ri-check-fill"></i> Premature Baby Care Unit</li>
                            <li><i class="ri-check-fill"></i> All types of Vaccinations</li>
                            <li><i class="ri-check-fill"></i> Ambulance Service</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 tags">
                        <h5>tags</h5>
                        <ul>
                            <li>24 hourse nicu</li>
                            <li>children hospital</li>
                            <li>immunization</li>
                            <li>picu</li>
                            <li>trained and experienced staff</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 contactInfo">
                        <h5>contact info</h5>
                        <ul>
                            <li className="fw-bold">Bagal Nursing Home</li>
                            <li>Viraj Estate, Near Tarakpur Bus Stand, Ahmednagar</li>
                            <li><a href="tel:+91 9403820779" className="text-black text-decoration-none"><i class="ri-phone-line"></i>9403820779</a></li>
                            <li><a className="text-black text-decoration-none" href="mailto:bagalnursinghome@yahoo.com"><i class="ri-mail-line"></i>bagalnursinghome@yahoo.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}