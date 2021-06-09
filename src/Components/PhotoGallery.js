import React from 'react'
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 250, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

export const PhotoGallery = () => {
    return (
        <>
       <Link to="/"><button onClick={() => <h1>helo</h1>}>Go Back to Menu Page</button></Link>
    
      <h1 style={{ textAlign: "center" ,marginBottom:"64px"}}>Photo Gallery</h1>
      <h2 style={{marginLeft:"50px"}}>Canola flowering stages </h2>
      <div style={{marginLeft:"32px", marginRight:"32px"}}>
        </div>
      <div style={{marginLeft:"32px", marginRight:"32px"}}>
      <h2 style={{marginLeft:"50px"}}>Sclerotinia symptoms</h2>
        </div>
        <div style={{marginLeft:"32px", marginRight:"32px"}}>
        <h2 style={{marginLeft:"50px"}}>Apothecia and sclerotia</h2>
        </div>
        <div style={{marginLeft:"32px", marginRight:"32px"}}>
        <h2 style={{marginLeft:"50px"}}>Sclerotinia life cycle</h2>
        </div>

    </>

       
    )
}



