import React from "react";
import {Form, Col, Button} from "react-bootstrap"

const CardForms = () => {

    
    return(
        <>
        <div className="mt-3 mb-3" style={{fontSize: "26px", color: "#101D94"}}>Оплата</div>
        <Form>
           <Form.Group controlId="validationCustomUsername">
                 <Form.Label style={{fontSize: "16px", color: "#101D94"}}>Имя на карте</Form.Label>
                 <Form.Control type="text" placeholder="Konstantin Ivanov" />
           </Form.Group>
           <Form.Group>
                 <Form.Label style={{fontSize: "16px", color: "#101D94"}}>Номер карты</Form.Label>
                 <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX XXXX" />
           </Form.Group>

           <Form.Row>
           <Form.Group as={Col}>
                 <Form.Label style={{fontSize: "16px", color: "#101D94"}}>Срок</Form.Label>
                 <Form.Control type="text" placeholder="MM / YY" />
           </Form.Group>
           <Form.Group as={Col}>
                 <Form.Label style={{fontSize: "16px", color: "#101D94"}}>CVV</Form.Label>
                 <Form.Control type="text"/>
           </Form.Group>
           </Form.Row>

           <Button variant="success" type="submit" className="pl-4 pr-4">
                Оплатить
           </Button>
        </Form>
        </>
    )
}

export default CardForms

