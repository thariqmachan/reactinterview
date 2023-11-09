import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Landing() {
  return (
    <div className='text-center' >
   <img style={{width:"944px" , height:"272px"}} src="https://i.postimg.cc/LsxD5B0W/Vector-Smart-Object-1.png" alt="" />
   {/* <h1>Welcome</h1> */}

  <Row>
<Container className='w-50 text-center'>
      <Form>
          <Form.Group className="mb-3 text-start  opacity-75" controlId="formBasicEmail">
            <Form.Label >Email Address</Form.Label> <br />
            <Form.Control type="email" placeholder="sajin tamang figma @.com" />
           
          </Form.Group>
    
          <Form.Group className="mb-3 text-start opacity-75" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label> <br />
            <Form.Control style={{borderBottom:'2px solid grey'}} type="password" placeholder="***********" />
          </Form.Group>
          
          <Button style={{borderRadius:'50px',background:'#718341',color:'#fff',border:'0px'}} className='ps-5 pe-5'   type="submit">
           Login
          </Button>
        </Form>
</Container>
       
  </Row>

<div style={{overflow:'hidden' }} className='mb-5 pb-5'>  <img src="https://i.postimg.cc/VNBGMZYs/house.png" alt="" /></div>
    </div>
  )
}

export default Landing
