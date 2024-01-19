import React from 'react'
import './Header.css'
import logo from '../assets/emp-logo.png'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
        <MDBNavbar className='bg-primary  text-white'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light text-center bold' >
            <img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            />
           WorkFlowPro
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>



    </div>
  )
}

export default Header