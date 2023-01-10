import React from 'react'
import dungeonGame from "../pictures/dungeon.png"
import gamefaqsClone from "../pictures/gamefaqs-clone.png"
import erpExample from "../pictures/ERP example website.png"

 function ProjectsCard() {
  return (
    <div className='flex items-center justify-center'>


<div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10  ">
  
  
  <figure className="px-10 pt-10 text-4xl underline">
    {/* title goes here */}
    Projects
  </figure>



  

  <div className="card-body flex items-center text-left">

 {/* put stuff here */}
 <div className='projectsInnerDiv'>


  <section id="dungeon-game" className='mb-10'>

 
 <a href='https://ryanessel.github.io/IH-first-project-game-repository/'>

    <div className='text-2xl text-amber-600 underline '>Simple/Dungeon Game</div>
    <img src={dungeonGame} alt="photo of me" width="200px" className="rounded-xl lg:w-64"/>
  </a>
    <li className='mt-3 list-disc' >Simple Dungeon RPG game created with HTML, CSS and JS. </li>
 </section>

<section id="gamefaqs-clone" className='mb-10'>

<a  href='https://game-form-app.onrender.com/'>
    <div className='text-2xl text-amber-600 underline'>Game Message Board</div>
    <img src={gamefaqsClone} alt="photo of me" width="200px" className="rounded-xl lg:w-64"/>
    </a>
    <ul>
      <li className=' mt-3 list-disc'>Game forum website like gamefaqs</li>
      <li className='mt-3 list-disc'>Sign up and login Make, and delete Threads specific to your poster ID</li>
      <li className='mt-3 list-disc'>Sign up and login Comment and delete comments specific to your Poster ID</li>
      <li className='mt-3 list-disc'>All threads viewable when not logged in. Just can't post</li>
    </ul>
    </section>

<section id="quote-system" className='mb-10'>

<a href='https://ih-final-front-end.onrender.com/login'>
    <div className='text-2xl text-amber-600 underline'>Quote, Parts, Datbase System</div>
    <img src={erpExample} alt="photo of me" width="200px" className="rounded-xl lg:w-64"/>
    </a>
    <ul>
      <li className='mt-3 list-disc'>Replicates some aspects of an ERP</li>
      <li className='mt-3 list-disc'>Sign up and login to add parts and make quotes</li>
      <li className='mt-3 list-disc'>Quotes Made are automatically listed in the quote list page</li>
      <li className='mt-3 list-disc'>All threads viewable when not logged in. Just can't post</li>
    </ul>
    </section>

    
</div>
  </div>




</div>


        
        
        
    </div>
  )
}



export default ProjectsCard;
