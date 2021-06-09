import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Slider} from '@material-ui/core'
import Popup from './Emailpopup'




export const EconomicCalculator = (props) => {

 
//metric button slider mark and label
  const mark=[
    {value:0,label:"0"},{value:20,label:"20"},{ value:40,label:"40"},{value:60,label:"60"},{value:80,label:"80"},{value:100, label:"100"}
]
const mark1=[
  {value:0.20,label:"0.20"},{value:0.30,label:"0.30"},{value:0.40,label:"0.40"},{value:0.50,label:"0.50"},{value:0.60,label:"0.60"},{value:0.70,label:"0.70"}
]
const mark2=[
  {value:25,label:"25"},{value:43.80,label:"43.80"},{value:62.60,label:"62.60"},{value:81.40,label:"81.40"},{value:100.20,label:"100.20"}
]
const mark3=[
  {value:800,label:"800"},{value:1540,label:"1540"},{value:2280,label:"2280"},{value:3020,label:"3020"},{value:3760,label:"3760"},{value:4500,label:"4500"}
]
const mark4=[
  {value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"},{value:150,label:"150"},{value:200,label:"200"},{value:250,label:"250"}
]


//metric button state management to access slider values

  const[valve,setValve] = useState([mark,mark1,mark2,mark3,mark4])
  const[info,setInfo] = useState([mark,mark1,mark2,mark3,mark4])
  const[scale,setScale] = useState([mark,mark1,mark2,mark3,mark4])
  const[into,setInto] = useState([mark,mark1,mark2,mark3,mark4])
  const[all,setAll] = useState([mark,mark1,mark2,mark3,mark4])




// const[email,setEmail] = useState("")

  const [emailPopup,setEmailPopup] = useState(false)

  let getSliderValuesMetric = function () {
    console.log("slider values:" ,valve)
    console.log("slider values:" ,info)
    console.log("slider values:" ,scale)
    console.log("slider values:" ,into)
    console.log("slider values:" ,all)
    console.log("Yield loss($/ha):" ,valve/100*0.5*into*info)
    console.log("Fungicide advantage/disadvantage($/ha):" ,valve/100*0.5*into*info-scale)
    console.log("Production profit/loss($/ha) without disease but fungicide applied:" ,(into*info)-(scale+all))
    console.log("Production profit/loss($/ha) without disease but no fungicide applied:", (into-into*valve*0.5*0.01)*info-all)
    }
   
 
 return (
    <div>
      <Link to="/"><button onClick={() => <h1>helo</h1>}>Go Back to Menu Page</button></Link>
      <h1 align="center">Economic Calculator</h1>
      <br/>
      <h2>Adjust the five variables to allow calculation of the expected yield and the profit/loss of applying a fungicide.<br/>
      Select imperial of metric</h2>
      <br/><br/>
      <button onClick={e=>getSliderValuesMetric()}>Imperial</button>
      <button style={{marginLeft:"6px"}} onClick={e=>getSliderValuesMetric()}>Metric</button>
      <br/><br/>

 <h3>% infected stems expected at harvest</h3>
      <br/><br/>
      <div style={{width:300,margin:20}}>
      <Slider 
      defaultValue={20}
      valueLabelDisplay="auto"
      // step={20}
      min={0}
      marks={mark}
      max={100}
      onChange={(_, value)=>
      setValve(value)}
    
      />
      </div>
 <br/><br/>
      <h3>Expected seed sales price ($/Kilogram)</h3>
      <br/><br/>
      <div style={{width:300,margin:20}}>
      <Slider
      defaultValue={0.47}
      step={0.010}
      valueLabelDisplay="auto"
      marks={mark1}
      min={0.20}
      max={0.70}
      onChange={(_, value)=>
        setInfo(value)}
      />
      </div>
      <br/><br/>
      <h3>Fungicide cost ($/hectare)</h3>
      <br/><br/>
      <div style={{width:300,margin:20}}>
      <Slider
      defaultValue={62.60}
      valueLabelDisplay="auto"
      step={1}
      marks={mark2}
      min={25}
      max={100.20}
      onChange={(_, value)=>
        setScale(value)}
      />
      </div>
      <br/><br/>
      <h3>Expected yield (Kilogram/hectare)</h3>
      <br/><br/>
      <div style={{width:300,margin:20}}>
      <Slider
      defaultValue={3760}
      // step={2}
        valueLabelDisplay="auto"
        marks={mark3}
        min={800}
        max={4500}
        onChange={(_, value)=>
          setInto(value)}
      />
      </div>
      <br/><br/>
      <h3>All other input costs ($/hectare)</h3>
      <br/><br/>
      <div style={{width:300,margin:20}}>
      <Slider
      defaultValue={80}
       valueLabelDisplay="auto"
      // step={50}
      marks={mark4}
      max={250}
      onChange={(_, value)=>
        setAll(value)}
      />
      </div>
      <br/><br/>
      <label>Estimated value of yield loss due to sclerotinia disease if no fungicide is applied<input type="text" ></input></label><br/>
      <label>Estimated crop value with fungicide application<input type="text" ></input></label><br/>
      <label>Estimated crop value  if no fungicide is applied<input type="text" ></input></label>
      <br/><br/>
     
        <div>
          <form onSubmit={(e) => {e.preventDefault()}}>
                <Popup trigger={emailPopup}>
                  <input  type="email" placeholder="Enter Email Address" name="email"    required></input>
                    <button onClick={()=>{console.log("emailsend")}}>Send Email</button>
                    </Popup></form>
                      </div>
                      <button >Recommend</button>
                      <button >Reset form</button>
                     <button onClick={()=> setEmailPopup(true)} >Email</button>
      
      <div>
          <h3>
            {/* <img src="img/title-icon.png"></img> */}
            Disclaimer
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit , vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet</p>
           </div>
    </div>
  );
};
