import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'

export const YoutubeVideo = () => {
  return( 
  <div>
     <Link to="/"><button onClick={() => <h1>helo</h1>}>Go Back to Menu Page</button></Link>
    <h1 align="center"> Video</h1>
    <br/><br/>
    
    <div style={{marginLeft:"400px",marginRight:"800px", align:"center",marginTop:"50px"}}>
            <ReactPlayer controls  url="https://youtu.be/QFaFIcGhPoM" width="1000px" height="400px" />
        </div>
        <br/><br/>

    <p style={{marginLeft:"550px",marginRight:"550px"}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nulla quam velit,vulputate eu pharetra nec,elit. Nulla quam velit,vulputate eu pharetra nec,</p>
    </div>)
};
