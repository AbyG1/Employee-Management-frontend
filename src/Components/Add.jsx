import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'


function Add() {

  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [designation, setDesignation] = useState("")
  const [salary, setSalary] = useState("")
  
  

  const base_url='http://localhost:8000/add-an-employee'
  const addEmployee = async(e) => {
     e.preventDefault()
    //add employee - api call
    console.log(id,name,age,designation,salary)
  

  
    //api call to add employee details to the mongodb
    const body = {id,name,age,designation,salary}
    console.log('Before Axios request');
    const result = await axios.post(base_url,body)
    console.log('After Axios request', result.data);
  } 




  return (

     


    <div>

      <div className="container">

      <h2 className='text-center m-2'>Add Employee</h2>


      <form action="emp-form" className='p-5'>

      <MDBInput onChange={(e) => setId(e.target.value)} label='ID' id='form1' type='text' className='my-2'/>
      <MDBInput onChange={(e) =>setName(e.target.value)} label='Name' id='form1' type='text' className='my-2'/>
      <MDBInput onChange={(e) => setAge(e.target.value)} label='Age' id='form1' type='text' className='my-2'/>
      <MDBInput onChange={(e) => setDesignation(e.target.value)}label='Designation' id='form1' type='text' className='my-2' />
      <MDBInput onChange={(e) => setSalary(e.target.value)} label='Salary' id='form1' type='text' className='my-2' />

      <button className='btn btn-success' onClick={(e) => addEmployee(e)}>Add <i className='fa-solid fa-user-plus'></i></button>
      </form>
    




      </div>

       
    </div>
  )
}

export default Add