import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TabSearch = () => {
    const formSections = ['ID', 'Name', 'Creator', 'Width', 'Length', 'Code'];

    const submitForm = () => {
        
    }

    const createForm = () => {
        const formGroups = [];
        for (var i = 0; i < formSections.length; i++) {
            formGroups.push(<Form.Group key={formSections[i]}>
                <Form.Label>{formSections[i]}</Form.Label>
                <Form.Control type="text" />
            </Form.Group>)
        }
        return <>{formGroups}</>;
    }

    return(
        <Form>
            {createForm()}
            <Button variant="primary" type="submit" onClick={() => submitForm()} > Search </Button>
        </Form>
    )
}

export default TabSearch;