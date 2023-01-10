import { useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosContext from '../context/AxiosContext';

const TabAdd = () => {
    const { axiosInstance, baseUrl } = useContext(AxiosContext);

    // const verifyBase64Correctness = () => {
    //     ReactDOM.findDOMNode(puzzleCode);
    // }

    const nameInput = useRef(null);
    const creatorInput = useRef(null);
    const codeInput = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            'name' : nameInput.current.value,
            'creator' : creatorInput.current.value,
            'code' : codeInput.current.value
        }
        //axiosInstance.post('//' + baseUrl + "/picresse/puzzle/create", )
        console.log(data);
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
                    <Form.Label>Puzzle Creator</Form.Label>
                    <Form.Control type="text" placeholder="Puzzle Creator" ref={creatorInput} />
                    <Form.Text>That's you!</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Puzzle Code</Form.Label>
                    <Form.Control type="text" placeholder="Puzzle Code" ref={codeInput} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={e => submitForm(e)}> Add Puzzle </Button>
            </Form>
        </div>
    )
}

export default TabAdd;