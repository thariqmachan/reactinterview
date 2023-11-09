import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Details() {
  return (
    <div>
      <h1 className='text-center mt-5'>Details</h1>

    <div className='d-flex align-items-center justify-content-center'>
     
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.postimg.cc/4dX97Bdg/details.png" className='pb-0 mb-0' />
          <Card.Body>
            <Card.Title className='pb-0 mb-0' style={{fontFamily:'Raleway',letterSpacing: '-0.28px',lineHeight:'24px',fontWeight:'600',fontSize:'16px',fontStyle:'normal'}}>Parippu vada</Card.Title>
            <Card.Title className='mt-0 pt-0'  style={{fontFamily:'Raleway',letterSpacing: '-0.28px',lineHeight:'24px',fontWeight:'400',fontSize:'16px',fontStyle:'normal'}}>15 rs</Card.Title>
            <Card.Text style={{fontFamily:'Raleway',letterSpacing: '-0.28px',lineHeight:'24px',fontWeight:'400',fontSize:'16px',fontStyle:'normal'}}>
            Eponymous star projector can show the twinking stars on the ceiling and bedroom. 
            </Card.Text>
          </Card.Body>
        </Card>
    </div>


    <div className='mt-4 mb-0 pb-0 fixed-bottom' style={{width:'100%', height:'68px',background:'#718341',display:'flex',alignItems:'center',}}>
        <h4 className='ps-3 text-white'>Total ₹ 45</h4>
        <button className='ms-auto me-3'  style={{borderRadius:'50px',background:'#fff',width:'129px',height:'38px',border:'0px'}}>Place order</button>
    </div>

    </div>
  )
}

export default Details
