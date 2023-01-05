import React from 'react'

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
 
 <a href='https://ryanessel.github.io/IH-first-project-game-repository/'>
  
    <div className='text-2xl text-amber-600 underline '>Simple/Dungeon Game</div>
</a>

<a href='https://github.com/ryanessel/Ry-Game-Forum-App-Project-2'>
    <div className='text-2xl text-amber-600 underline'>Game Message Board</div>
</a>

<a href='https://ih-final-front-end.onrender.com/login'>
    <div className='text-2xl text-amber-600 underline'>Quote, Parts, Datbase System</div>
</a>
    
</div>
  </div>




</div>


        
        
        
    </div>
  )
}



export default ProjectsCard;
