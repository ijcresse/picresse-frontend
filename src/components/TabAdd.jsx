import { useRef, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosContext, { baseUrl } from '../context/AxiosContext';

const TabAdd = () => {
    const { axiosInstance } = useContext(AxiosContext);

    const verifyBase64Correctness = () => {
        try {
            atob(codeInput.current.value);
        } catch (error) {
            console.error("Could not verify code as valid base64: " + codeInput.current.value);
            //create error toast in this case
            return false;
        }
        return true;
    }

    const nameInput = useRef(null);
    const creatorInput = useRef(null);
    const codeInput = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        if (!verifyBase64Correctness()) {
            return; //don't execute!
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const data = {
            'name' : nameInput.current.value,
            'creator' : creatorInput.current.value,
            'puzzle' : codeInput.current.value
        }
        axiosInstance.post('//' + baseUrl + "/picresse/puzzle/create", data, { headers: headers })
            .then((res) => {
                console.log(res.status);
                //create toast
            }).catch((err) => {
                console.error(err.response.status);
                console.error(err.response.data);
                //create toast
            })
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