import React, { useState, useEffect } from 'react';
import './CustomerTableStyle.css';
import { Table, Container } from 'reactstrap';

const CustomersList = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        let uri = 'https://localhost:5001/api/customer/get';
        const resultSpan = document.getElementById('resultSpan');

        // get the data from the api, and store it in the dataList array of state.
        fetch(uri, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => setDataList(data)
            )
            .catch(error => resultSpan.innerText = error)
    }, []);

    const customers = dataList.map(
        function (item) {

            let row = <tr><td>{item.id}</td><td>{item.companyName}</td></tr>;
            return row
        });

    return (
        <div>
            <Container fluid>
                <h1>Customers</h1>
            </Container>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th class="tblHeaderId" scope="row">Id</th>
                        <th class="tblHeader">Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {customers}
                </tbody>
            </Table>
            <div id='resultSpan'>

            </div>

        </div>
    );


}



export default CustomersList;