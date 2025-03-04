import React from "react";
import CounterBanner from "../home/CounterBanner";
import Servicesbanner from "./Servicesbanner";
import Servicesgallery from "./Servicesgallery";

export default function Services()
{
    return(
        <>
            <Servicesbanner/>
            <Servicesgallery/>
            <CounterBanner/>
        </>
    )
}