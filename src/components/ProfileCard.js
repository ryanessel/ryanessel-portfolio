

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import ryanMainHeadShot from "../pictures/ryan-main-headshot.jpg"
import IronhackCert from "./IronhackCert";
 function ProfileCard() {
  return (
<div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
<div className="px-10 pt-10 text-4xl underline">
    {/* title goes here */}
    About me
  </div>
  <figure className="px-10 pt-10">

    
    <img src={ryanMainHeadShot} alt="photo of me" width="200px" className="rounded-xl lg:w-64" />
  </figure>

  
  <div className="card-body items-right text-center">
   
    <p className="items-right text-left">Hello, my name is Ryan Essel. Thank you for taking the time to look at my portfolio website. I like skateboarding and running.</p>
    <div className="px-10 pt-10 text-2xl underline">
    {/* title goes here */}
    Ironhack Bootcamp Certification
  </div>
    {/* <IronhackCert/> */}
    <br/>
    <p className="items-right text-left">My skill set includes the following:</p>
    <ul className="text-left">
      <span className="font-bold underline">MERN Stack</span>
      <li>
      ・Mongodb & Mongodb Compass
      </li>

      <li>
      ・Express
      </li>

      <li>
      ・React
      </li>

      <li>
      ・Node.js
      </li>
    </ul>
    
    <div className="items-right text-left">
    <ul className="text-left">
    <span className="font-bold underline">Other Skills</span>
      <li>
      ・HTML
      </li>

      <li>
      ・Javascript
      </li>

      <li>
      ・CSS
      </li>

      <li>
      ・DOM manipulation
      </li>

      <li>
      ・Handlebars
      </li>

      <li>
      ・Github
      </li>

      <li>
      ・Gitbash
      </li>

      <li>
      ・Visual Studio Code
      </li>
      <li>
      ・Microsoft Visual Studio
      </li>
      <li>
      ・C#
      </li>
      <li>
      ・ASP.NET
      </li>

      <li>
      ・MS SQL
      </li>

      <li>
      ・Some experience with Java
      </li>



    </ul>
      
    <IronhackCert/>

    </div>
    
    <div className="card-actions">
    
    </div>
  </div>
</div>
  )
}


export default ProfileCard;