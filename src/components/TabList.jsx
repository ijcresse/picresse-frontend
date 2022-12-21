import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const TabList = () => {
    const [puzzleList, setPuzzleList] = useState(null);
    const [pageSize, setPageSize] = useState(50);
    const [offset, setOffset] = useState(0);

    // useEffect(() => {
    // }, [puzzleList]);

    const renderListItems = () => {
        /*
        axios call to BE with pagesize, offset.
        may overload this with search tab tools... or have search tab on left side or something
        */

        console.log("tablist.renderlistitems");
        return(
            <tr>
                <td>1</td>
                <td>shami</td>
                <td>hazashami</td>
                <td>1x1</td>
                <td>abcd</td>
                <td>false</td>
                <td>nothin here</td>
            </tr>  
        );
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Puzzle Name</th>
                    <th>Creator Name</th>
                    <th>Dimensions</th>
                    <th>Code</th>
                    <th>Completed</th>
                    <th>button placeholder section</th>
                </tr>
            </thead>
            <tbody>
                {renderListItems()}
            </tbody>
        </Table>
    )
}

export default TabList;