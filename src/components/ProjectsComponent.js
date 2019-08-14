import React, { Component } from 'react';
import {Card, CardImg, Modal, ModalHeader, ModalBody, Row, Col, CardFooter } from 'reactstrap';



class Projects extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentProject: {
                title: '',
                subtitle: '',
                description: '',
                images: ['']
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(project) {
        this.setState(prevState => ({
          isModalOpen: !prevState.isModalOpen,
          currentProject: project
        }));
    }



    render() {
        const projects = [
            {
                title: 'Primer Sitio de Presentación',
                subtitle: '',
                description: 'Desarrollado con CSS puro y Jquery. Lo diseñe de esta manera para explorar posibilidades de visualización SPA sin la utilización de frameworks. ',
                link: "https://javfr.github.io/OldPresentationSite/",
                images: [
                    require('../assets/img/OldSite-Screen1.png'),
                    require('../assets/img/OldSite-Screen2.png'),
                    require('../assets/img/OldSite-Screen3.png')
                ]
            },
            {
                title: 'Tablero de Citas',
                subtitle: 'Administrador de citas de texto',
                description: 'Actualmente estoy desarrollando la aplicación, con React Native. El flujo de los datos lo manejo con Redux y durante esta etapa utilizo como servidor Json-Server. La idea consiste en desarrollar también una aplicación web. Ambas de tipo rest, con back desarrollado en Laravel',
                link: "https://github.com/JavFr/QuoteManager-ReactWeb",
                images: [
                    require('../assets/img/QuoteManager-1.png'),
                    require('../assets/img/QuoteManager-2.png'),
                    require('../assets/img/QuoteManager-3.png')
                ]
            }

        ];
        const RenderImages = () => {
            if (this.state.currentProject.images){
                return    (this.state.currentProject.images.map((image) => {
                    return(
                    <Col className="col-12">
                        <CardImg src={image} />
                    </Col>);
            }));
        }
        }
        return(
            <div className="projects container-fluid pt-5">
                <Row id="section-3">
                    <Col className="mt-5">
                        <h2 className="text-white m-5" >Proyectos</h2>
                    </Col> 
                </Row>
                    
                <Row className="jthis.toggleModal justify-items-center p-2 mt-3">
                    <Col className="col-12 col-md-6 col-lg-6 mt-2">
                        <Card className="col-12 project-card p-0 justify-content-end" style={{height: '100%'}} onClick={() => this.toggleModal(projects[1])}>
                                <CardImg className="text-center mb-5"  alt={"Tablero de Citas - RN"} />
                                <CardFooter  className="bg-cherry">{"Tablero de Citas - RN"}</CardFooter>
                        </Card>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-6 mt-2">
                        <Card className="col-12 project-card p-0" onClick={() => this.toggleModal(projects[0])}>
                                <CardImg src={ require('../assets/img/OldSite-Screen1.png') } alt={"Mi antigua web"} />
                                <CardFooter  className="bg-cherry">{"Anterior Sitio Web"}</CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Modal className="modal-lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        {this.state.currentProject.title}
                        <a className="navbar-link ml-1" target="_blank" href={this.state.currentProject.link}><i className="fa fa-external-link"></i></a>    
                    </ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <h3>{this.state.currentProject.subtitle}</h3>
                                <p>{this.state.currentProject.description}</p>
                            </Col>
                            <Col className="col-12 col-md-6">
                                <Row>
                                    {RenderImages()}
                                </Row>
                                
                            </Col>
                        </Row>                  
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Projects;