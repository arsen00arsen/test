import React from "react";
import {Form, Col, Button} from "react-bootstrap"

const InfoForms = () => {
    return(
        <>
        <div className="mt-3 mb-3" style={{fontSize: "26px", color: "#101D94"}}>Информация для доставки</div>
        <Form>
    <Form.Group controlId="validationCustomUsername">
         <Form.Label style={{fontSize: "16px", color: "#101D94"}}>Получатель</Form.Label>
         <Form.Control type="text" placeholder="ФИО" />
    </Form.Group>

    <Form.Group controlId="formGridAddress">
         <Form.Label style={{fontSize: "16px", color: "#101D94"}}>Адрес</Form.Label>
         <Form.Control placeholder="Город" className="mb-3" />
         <Form.Control placeholder="Адрес" className="mb-3" />

         <Form.Row>
         <Form.Group as={Col} controlId="formGridState">
                 <Form.Control as="select" defaultValue="Страна">
                     <option>Choose</option>
                     <option>Choose</option>
                 </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
             <Form.Control type="text" placeholder="Индекс" />
        </Form.Group>
        </Form.Row>
    </Form.Group>
    
        <Button variant="success" type="submit" className="pl-4 pr-4">
             Продолжить
       </Button>
</Form>
        </>
    )
}

export default InfoForms