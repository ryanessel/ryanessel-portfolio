

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
<div className="card w-96 bg-base-100 shadow-xl text-black lg:mt-60 md:mt-10  sm:w-9/12">
  <figure className="px-10 pt-10">
    
    <img src={''} alt="photo of me" width="200px" className="rounded-xl lg:w-64" />
  </figure>
  <div className="card-body items-right text-center">
    <h2 className="card-title ">Ryan Essel</h2>
    <p className="items-right text-left">Hello, my name is Ryan Essel. Thank you for taking the time to look at my portfolio.</p>
    <br/>
    <p className="items-right text-left">Hello, my name is Ryan Essel. Thank you for taking the time to look at my portfolio.</p>
    <div className="card-actions">
    
    </div>
  </div>
</div>
  )
}


export default ProfileCard;