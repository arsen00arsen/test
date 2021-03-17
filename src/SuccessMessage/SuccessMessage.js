import React from "react";
import {ReactComponent as Verified} from "../icons/verified.svg"

const SuccessMessage = () => {
 return (
        <div className="d-flex flex-column justify-content-center align-items-center">
        <Verified/>
        <div className="mt-10">Спасибо!</div>
        </div>
 )
}

export default SuccessMessage