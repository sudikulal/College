import React from "react";

export default function Horizontal() {
  return (
    <div>
      <div className="row align-items-start">
        <div className="col">
          <ul className="list-group" style={{color:"grey"}}>
            <li className="list-group-item" style={{padding:"11px"}}>HOME</li>
            <li className="list-group-item" style={{padding:"11px"}}>DEPARTMENT</li>
            <li className="list-group-item" style={{padding:"11px"}}>FACILITIES</li>
            <li className="list-group-item" style={{padding:"11px"}}>ADMISSION</li>
            <li className="list-group-item" style={{padding:"11px"}}>PLACEMENT</li>
          </ul>
        </div>
        <div className="col" style={{color:"green",border:"2px solid grey"}} >
          <h5 style={{color:"purple", borderBottom:"2px solid grey",padding:"10px",textAlign:"center"}}>Contact-us</h5>
          <p style={{textAlign:"center"}}>address:<br/>NH-66, Kottara Chowki,<br/> Mangaluru, 575006.<br/>phone:<br/>
            + 91(824)2862200
              <br/>email:<br/>mngclg@gmail.com
          </p>
        </div>
        <div className="col">
          <p> </p>

        </div>
      </div>
    </div>
  );
}
