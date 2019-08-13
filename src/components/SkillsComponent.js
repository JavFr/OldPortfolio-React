import React from 'react';
import {Card, CardBody, 
    CardHeader, Row, ListGroup, ListGroupItem } from 'reactstrap';

function Skills(){
    return(
        <div className="skills container-fluid pt-5" id="section-2">
            <Row className="justify-items-center p-2 mt-3">
                    <Card className="col-12 col-sm-6 col-lg-4 offset-lg-1 p-0">
                        <CardHeader className="bg-cherry">Front End</CardHeader>
                        <CardBody className="p-0">
                            <ListGroup>
                                <ListGroupItem className="d-flex justify-content-between">
                                    HTML
                                        <div className="meter"><span style={{'width': '70%'}}></span></div> 
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    CSS
                                    <div className="meter"><span style={{'width': '80%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    Bootstrap     
                                    <div className="meter"><span style={{'width': '80%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    JS
                                    <div className="meter"><span style={{'width': '50%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    React
                                    <div className="meter justify-self-end"><span style={{'width': '50%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    React Native
                                    <div className="meter"><span style={{'width': '55%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">Redux
                                    <div className="meter"><span style={{'width': '50%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">Jquery
                                    <div className="meter"><span style={{'width': '65%'}}></span></div>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                    <Card className="col-12 col-sm-6 col-lg-4 offset-lg-2 p-0">
                        <CardHeader className="bg-cherry">Back End</CardHeader>
                        <CardBody className="p-0">
                            <ListGroup>
                                <ListGroupItem className="d-flex justify-content-between"> 
                                    PHP
                                    <div className="meter"><span style={{'width': '30%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    Laravel
                                    <div className="meter"><span style={{'width': '50%'}}></span></div>
                                </ListGroupItem>
                                <ListGroupItem className="d-flex justify-content-between">
                                    SQL    
                                    <div className="meter"><span style={{'width': '20%'}}></span></div>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>               
            </Row>         
        </div>
    );
}

export default Skills;