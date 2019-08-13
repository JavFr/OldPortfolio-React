import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';


export default function ModalProjects (props) {
    return(
        <Modal isOpen={props.isModalOpen} toggle={props.toogle}>
            <ModalHeader toggle={props.toogle}>{props.project.title}</ModalHeader>
            <ModalBody>

            </ModalBody>
        </Modal>
    );
}