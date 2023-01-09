

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import ryanMainHeadShot from "../pictures/ryan-main-headshot.jpg"

 function ProfileCard() {
  return (
<div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10 ">
  <figure className="px-10 pt-10">
    
    <img src={ryanMainHeadShot} alt="photo of me" width="200px" className="rounded-xl lg:w-64" />
  </figure>

  
  <div className="card-body items-right text-center">
    <h2 className="card-title ">Ryan Essel</h2>
    <p className="items-right text-left">Hello, my name is Ryan Essel. Thank you for taking the time to look at my portfolio.</p>
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
      ・VSCODE
      </li>
      
      <li>
      ・Some experince with Java
      </li>



    </ul>
      
      

    </div>
    
    <div className="card-actions">
    
    </div>
  </div>
</div>
  )
}


export default ProfileCard;