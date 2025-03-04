import React from "react";
import ContactHead from "./ContainerHead";
import { Form } from "react-router-dom";
import Forms from "./Forms";

export default function Contact()
{
    return(
        <>
            <ContactHead/>
            <Forms/>
        </>
    )
}