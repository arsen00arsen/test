import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Arrow} from "../../icons/arrow.svg"

const FormsNav = () => {
 return (
    <>
    <NavLink to="/" className="mr-3" >
         Доставка
    </NavLink>
    <Arrow/>
     <NavLink to="/payment" className="ml-3" >
         Оплата
    </NavLink>
    </>
 )
}

export default FormsNav