import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';



function Add() {

  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [designation, setDesignation] = useState("")
  const [salary, setSalary] = useState("")

  
  return (

     


    <div>

      <div className="container">

      <h2 className='text-center m-2'>Add Employee</h2>


      <form action="emp-form" className='p-5'>

      <MDBInput label='ID' id='form1' type='text' className='my-2'/>
      <MDBInput label='Name' id='form1' type='text' className='my-2'/>
      <MDBInput label='Age' id='form1' type='text' className='my-2'/>
      <MDBInput label='Designation' id='form1' type='text' className='my-2' />
      <MDBInput label='Salary' id='form1' type='text' className='my-2' />

      <button class='btn btn-success'>Add <i className='fa-solid fa-user-plus'></i></button>
      </form>
    




      </div>

       
    </div>
  )
}

export default Add