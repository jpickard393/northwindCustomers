import React, { useState, useEffect } from 'react';
import './CustomerTableStyle.css';

const CustomerList = () =>{
    const [dataList,setDataList] = useState([]);

    useEffect(() => {
        let uri = 'https://localhost:44380/api/customer/get';
        const resultSpan = document.getElementById('resultSpan');

         // get the data from the api, and store it in the dataList array of state.
        fetch(uri, {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
                }
            })
            .then(response => response.json())
            .then(data => setDataList(data)
            )
            .catch(error => resultSpan.innerText = error)
    },[]);

    const customers = dataList.map(
        function(item){
            let row = <tr><td>{item.id}</td><td>{item.companyName}</td></tr>;
            return row
        });
    
    return (
        <div>
                <table>
                    <tr><th><td>Id</td></th><th><td>Company</td></th></tr>
                    {customers}
                </table>
                <div id='resultSpan'>
                    
                </div>
            </div>
    );
    

}



export default CustomerList;