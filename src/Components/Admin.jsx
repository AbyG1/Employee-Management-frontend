import React, { useEffect, useState } from 'react'

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import axios from 'axios'
import { Link } from 'react-router-dom';



function Admin() {

  //api fetching to get all employee details

  const base_url = 'http://localhost:8000'

  //state creation
  const [allEmployees,setAllEmployees] = useState([])

  const fetchData = async() => {
      const result = await axios.get(`${base_url}/get-all-employees`)
      console.log(result.data.employees)
      setAllEmployees(result.data.employees)
  }
  console.log(allEmployees)


  const deleteEmp = async(id) => {
    const result = await axios.delete(`${base_url}/delete-an-employee/${id}`)
    console.log(result)
    fetchData()
    alert(result.data.message)
  }




  useEffect(() => {
    fetchData()
  },[])





  return (
    <div>

        <h1 className='text-center text-primary p-3'>WorkFlowPro</h1>
      <div className="container">
        <p style={{textAlign:'justify'}}>Introducing WorkFlowPro, your go-to employee management solution. Streamline your organization's operations with our user-friendly platform that centralizes employee information, simplifies task assignments, and fosters seamless communication. From attendance tracking to performance reviews, WorkFlowPro offers a comprehensive suite of tools to enhance productivity and collaboration. Our secure and scalable system adapts to the unique needs of your business, ensuring efficient workforce management. Elevate your team's success with WorkFlowPro where simplicity meets productivity. </p>
        </div>
        <div className='d-flex justify-content-end p-5'>
          
          
          <Link to='/add'>

          <a href="" className='btn btn-success'>Add</a>
          </Link>
          
        </div>

        <div className='p-5'>

        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {

          allEmployees.map((item) => (
            <tr>
            <td>
              <div className=''>
                
            
                  <p className='fw-bold mb-1'>{item.id}</p>
                 
              
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{item.name}</p>
              
            </td>
            <td>
              {item.age}
            </td>
            <td>
            
                  <p className=' mb-1'>{item.designation}</p>
                 
                
            </td>
            <td>
             {item.salary}
            </td>
            <td>
              <div className='d-flex '>
                <i className='fa-solid fa-pen p-2'></i>
                <i onClick={() => deleteEmp(item.id)} className='fa-solid fa-trash p-2'></i>
              </div>
            </td>
          </tr>
          ))

         }
        
      </MDBTableBody>
    </MDBTable>



        </div>




    </div>
  
  )
}

export default Admin