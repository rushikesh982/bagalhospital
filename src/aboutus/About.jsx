import React from "react";
import WhyChooseUs from "../home/WhyChooseUs";
import AboutBanner from "./AboutBanner";
import AboutService from "./AboutService";

export default function About()
{
    return(
        <>
            <AboutBanner/>
            <AboutService/>
            <WhyChooseUs/>
        </>
    )
}