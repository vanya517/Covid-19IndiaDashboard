import React, { useEffect , useState } from 'react';
import '../statewise/Statewise.css'

const StatewiseData = () => {
    const [data, setData] = useState([]);
    

    const getCovidData = async () => {
     const res = await fetch('https://data.covid19india.org/data.json');
     const actualData = await res.json();
     setData(actualData.statewise);
}

    useEffect(()=>{
        getCovidData();
    },[]);


  return (
    <>
    
    <div className='container-fluid mt-5'>
        <div className='main-heading'>
          <h1 className='mb-5 text-center fw-bolder' > <span>INDIA COVID-19 DASHBOARD</span></h1>
        </div>
    </div>

    <div className='table-responsive'>
       <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> Recovered </th>
                <th> Deaths </th>
                <th> Active </th>
                <th> Updated </th>
            </tr>
        </thead>
        
        <tbody>
           { data.map((ele,i)=>{
                return (
                    <tr key={i}>
                    <td> {ele.state} </td>
                    <td> {ele.confirmed} </td>
                    <td> {ele.recovered} </td>
                    <td> {ele.deaths} </td>
                    <td> {ele.active} </td>
                    <td> {ele.lastupdatedtime} </td>
                </tr>

                )
            })}
       

        </tbody>

       </table>

    </div>

    
    
    
    </>
  )
}

export default StatewiseData