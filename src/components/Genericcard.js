import React from 'react'
import ryanMainHeadShot from "../pictures/ryan-main-headshot.jpg"

export default function Genericcard() {
  return (
    <div>Genericcard
<div className="card w-96 bg-base-100 shadow-xl text-black lg:mt-60 md:mt-10  sm:w-9/12">
  <figure className="px-10 pt-10">
    
    <img src={ryanMainHeadShot} alt="Shoes" width="200px" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Ryan Essel</h2>
    <p>Hello, my name is Ryan Essel. Thank you for taking the time to look at my portfolio.</p>
    <div className="card-actions">
    
    </div>
  </div>
</div>

    </div>
  )
}
