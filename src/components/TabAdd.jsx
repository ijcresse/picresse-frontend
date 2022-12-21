import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TabAdd = () => {

    // const verifyBase64Correctness = () => {
    //     ReactDOM.findDOMNode(puzzleCode);
    // }

    const nameInput = useRef(null);
    const codeInput = useRef(null);

    const submitForm = () => {

    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Puzzle Name</Form.Label>
                    <Form.Control type="text" placeholder="Puzzle Name" ref={nameInput} />
                    <Form.Text>Pick something descriptive! These will be the reveal for players attempting your puzzle.</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Puzzle Code</Form.Label>
                    <Form.Control type="text" placeholder="Puzzle Code" ref={codeInput} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => submitForm()}> Add Puzzle </Button>
            </Form>
        </div>
    )
}

export default TabAdd;