import React from "react";
import {ReactComponent as Logo} from "../../icons/Grapheme.logo.svg"

const Header = () => {
 return (
    <>
    <header className="d-flex align-items-center w-100 p-4 bg-light">
        <div style={{fontSize: "34px"}}>Тестовое задание</div>
        <Logo className="ml-auto"/>
    </header>
    </>
 )
}

export default Header