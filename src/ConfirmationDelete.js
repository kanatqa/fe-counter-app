import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';

export default function ConfirmationDelete(props) {
    const [isDisabledDeleteConfirmaitionButton, setIsDisabledDeleteConfirmaitionButton] = useState(true);



    const modalConfirmationUserInputChange =(e) =>{
        const inputText = e.target.value;
        setIsDisabledDeleteConfirmaitionButton(inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());

    };
    const deleteButtonClick = () => {
        setIsDisabledDeleteConfirmaitionButton(true)
        props.onSuccess();
    }
    const cancelButtonClick = () => {
        setIsDisabledDeleteConfirmaitionButton(true)
        props.onCancel();
    }

    return(
    <Modal isOpen={Boolean(props.name)} toggle={props.onCancel}>
        <ModalHeader >Delete confirmation</ModalHeader>
        <ModalBody>
            <p>
                Enter counter name <strong>{props.name}</strong> to
                delete it.
            </p>
            <FormGroup>
                <Input type="email"
                       name="email"
                       id="exampleEmail"
                       placeholder="with a placeholder"
                       onChange={modalConfirmationUserInputChange}
                />
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="danger"
                    onClick={deleteButtonClick}
                    disabled={isDisabledDeleteConfirmaitionButton}>Delete</Button>{' '}
            <Button color="secondary" onClick={cancelButtonClick}>Cancel</Button>
        </ModalFooter>
    </Modal>
)
}