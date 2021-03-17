import React from "react"
import { Container, Col } from "react-bootstrap"

const Layout = ({ children }) =>  {
    return (
        <Container className="bg-light p-4" style={{width: "401px", height: "520px", marginTop: "10%", borderRadius: "24px"}}>  
                {children}
        </Container>
    )}

export default Layout