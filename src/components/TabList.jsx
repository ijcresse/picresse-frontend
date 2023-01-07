import { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AxiosContext, { baseUrl } from '../context/AxiosContext';

const TabList = () => {
    const { axiosInstance } = useContext(AxiosContext);
    const [puzzleList, setPuzzleList] = useState(null);
    const [pageSize, setPageSize] = useState(50);
    const [offset, setOffset] = useState(0);

    // useEffect(() => {
    //     fetchList();
    // }, [puzzleList]);

    const fetchList = () => {
        console.log(baseUrl + "/picresse/puzzle/list?page=" + pageSize + "&offset=" + offset)
        axiosInstance.get(baseUrl + "/picresse/puzzle/list?page=" + pageSize + "&offset=" + offset)
            .then((res) => {
                console.log(res);
                setPuzzleList(res.data);
            }).catch((err) => {
                console.error(err);
                setPuzzleList([]);
                //set error toast
            });
    }

    const renderListItems = () => {
        /*
        axios call to BE with pagesize, offset.
        may overload this with search tab tools... or have search tab on left side or something
        */
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

        <div>
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
        <Button onClick={() => fetchList()}>asdf</Button>
        </div>
        
    )
}

export default TabList;