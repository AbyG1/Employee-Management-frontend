
import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate, useNavigation, useParams } from 'react-router-dom';

function Edit() {

  //get a particular id from the url
  const{id} = useParams()
  console.log(id)//4


  const base_url = 'http://localhost:8000'

  //to hold updated values
  const [eid,setEid] = useState("")
  const [ename,setEname] = useState("")
  const [eage,setEage] = useState("")
  const [edesignation, setEdesignation] = useState("")
  const [esalary, setEsalary] = useState("")

 //get a particular employee details
      const getEmployee = async(id) => {
      const result = await axios.get(`${base_url}/get-an-employee/${id}`)//employee details
      console.log(result.data.employees)
  
    setEid(result.data.employees.id)
    setEname(result.data.employees.name)
    setEage(result.data.employees.age)
    setEdesignation(result.data.employees.designation)
    setEsalary(result.data.employees.salary)
  }

    useEffect(() => {
      getEmployee(id)
    },[])

    const location = useNavigate()

    //Update function

    //api call to update an employee details
  
  const updateEmployee = async(e) => {
    e.preventDefault()
    const body = {
      id:eid,
      name:ename,
      age:eage,
      designation:edesignation,
      salary:esalary
    }

      const result = await axios.post( `${base_url}/update-an-employee/${id}`,body)
      console.log(result)
      alert(result.data.message)
      location('/')//back to admin
  }



  return (
    <div>
        <div className="container">

        <h2 className='text-center m-2'>Edit Employee Details</h2>


<form action="emp-form" className='p-5'>

<MDBInput readOnly onChange={(e) => setEid(e.target.value)} value={eid} label='ID' id='form1' type='text' className='my-2'/>
<MDBInput onChange={(e) => setEname(e.target.value)}  value={ename}    label='Name' id='form1' type='text' className='my-2'/>
<MDBInput onChange={(e) => setEage(e.target.value)}  value={eage}    label='Age' id='form1' type='text' className='my-2'/>
<MDBInput onChange={(e) => setEdesignation(e.target. value)}  value={edesignation}   label='Designation' id='form1' type='text' className='my-2' />
<MDBInput onChange={(e) => setEsalary(e.target.value)}  value={esalary}    label='Salary' id='form1' type='text' className='my-2' />

<button className='btn btn-success' onClick={(e) => updateEmployee(e)}>Edit Details <i className='fa-solid fa-pen'></i></button>
</form>





</div>



    </div>
  )
}

export default Edit