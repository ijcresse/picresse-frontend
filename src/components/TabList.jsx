import { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import AxiosContext, { baseUrl } from '../context/AxiosContext';

const TabList = () => {
    const { axiosInstance } = useContext(AxiosContext);
    const [puzzleList, setPuzzleList] = useState();
    const [pageSize, setPageSize] = useState(50);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        fetchList();
    }, []);

    const fetchList = () => {
        axiosInstance.get('//' + baseUrl + "/picresse/puzzle/list?page=" + pageSize + "&offset=" + offset)
            .then((res) => {
                setPuzzleList(res.data[0]['list']);
            }).catch((err) => {
                console.error(err);
                setPuzzleList([]);
                //set error toast
            });
    }

    const renderListItems = () => {
        return puzzleList.map(puzzle => {
            return(
                <tr key={puzzle[0]}>
                    <td>{puzzle[0]}</td>
                    <td>{puzzle[1]}</td>
                    <td>{puzzle[2]}</td>
                    <td>{puzzle[3]}</td>
                    <td>{puzzle[4] + 'x' + puzzle[5]}</td>
                    <td>{puzzle[6]}</td>
                    <td>button placeholder</td>
                </tr>
            )
        })
    }

    return(
        puzzleList ? 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Puzzle Name</th>
                        <th>Creator Name</th>
                        <th>Code</th>
                        <th>Dimensions</th>
                        <th>Date Created</th>
                        <th>button placeholder section</th>
                    </tr>
                </thead>
                <tbody>
                    { puzzleList ?  renderListItems() : <></> }
                </tbody>
            </Table> : <>No Results</>
    )
}

export default TabList;