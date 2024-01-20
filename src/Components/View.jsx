import React, { useEffect, useState } from 'react';
import user from '../assets/user.png'
import axios from 'axios';

import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

function View() {

  const base_url = 'http://localhost:8000'
  const [employeeData,setEmployeeData] = useState({})



  const {id} = useParams()
  console.log(id)
  //get a particular employee details
  const getEmployee = async(id) => {
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.employees)
    setEmployeeData(result.data.employees)
  }
  
  useEffect(()=>{
    getEmployee(id) 
  },[id])

  return (
   


    <div className='container-fluid'>
      <div className="row d-flex justify-content-center p-5">
        <div className="col-md-5 ">
            <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src={user} className='w-75 d-block mx-auto' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardTitle>Employee Details</MDBCardTitle>
                      {
                          <MDBCardText>

                              <MDBListGroup  light small>
                                  <MDBListGroupItem>Employee ID: {employeeData.id}</MDBListGroupItem>
                                  <MDBListGroupItem>Name: {employeeData.name}</MDBListGroupItem>
                                  <MDBListGroupItem>Age: {employeeData.age}</MDBListGroupItem>
                                  <MDBListGroupItem>Designation: {employeeData.designation}</MDBListGroupItem>
                                  <MDBListGroupItem>Salary: {employeeData.salary}</MDBListGroupItem>
                            </MDBListGroup>
                        
                      </MDBCardText>

                      }
                     
                    </MDBCardBody>
            </MDBCard>
        </div>
      </div>
    </div>
  )
}

export default View