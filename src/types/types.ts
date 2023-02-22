import { ReactElement } from "react";

export interface SidebarLink{
    icon:ReactElement;
    text:string;
    href:string;
}

export interface paymentDetailsProps {
    schoolEmail: string,
    country: string,
    state: string,
    zipCode: number | "",
    city: string,
    address: string,
}
export interface InputFields {
    placeholder:string;
    name:string;
    value: string | number;
    type: string;
    label:string;
}