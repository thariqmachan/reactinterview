import React from "react";

function Cart() {
  return (
    <div
      style={{
        paddingTop: "200px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection:'column'
      }}
    >
      <div
        className="text-center"
        style={{
          height: "80px",
          width: "300px",
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
        }}
      >
        <img
          style={{ height: "80xp", width: "82px", alignItems: "start" }}
          className="img-fluid"
          src="https://i.postimg.cc/x1BHYh4x/cartsfood1.png"
          alt=""
        />
        <h6 className="mt-4 ms-3 text-start" style={{fontFamily:'raleway'}}>Paruppu Vada  <br /> 15  ₹</h6> 
        
      </div>
     
     
      <div
        className="text-center mt-5"
        style={{
          height: "80px",
          width: "300px",
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
        }}
      >
        <img
          style={{ height: "80xp", width: "82px", alignItems: "start" }}
          className="img-fluid"
          src="https://i.postimg.cc/x1BHYh4x/cartsfood1.png"
          alt=""
        />
        <h6 className="mt-4 ms-3 text-start" style={{fontFamily:'raleway'}}>Paruppu Vada  <br /> 15  ₹</h6> 
        
      </div>

      <div className='mt-4 mb-0 pb-0 fixed-bottom' style={{width:'100%', height:'68px',background:'#718341',display:'flex',alignItems:'center',}}>
        <h4 className='ps-3 text-white'>Total ₹ 45</h4>
        <button className='ms-auto me-3'  style={{borderRadius:'50px',background:'#fff',width:'129px',height:'38px',border:'0px'}}>Place order</button>
    </div>
    
    </div>
  );
}

export default Cart;
