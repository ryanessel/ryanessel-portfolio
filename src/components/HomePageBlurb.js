import React from 'react'

 function HomePageBlurb({homePageGreeting, aboutInfo, contactMe, githubRepo, myProjects}) {
  return (
    <div  className=' flex items-center justify-center'>

 

        <div className="card w-11/12 md:w-2/3 bg-base-100 shadow-xl text-black  xl:w-[45rem] mb-4  mt-20 sm:mt-5 md:mt-10  ">
  
  
  <figure className="px-10 pt-10 text-4xl">
    
  {homePageGreeting}
  </figure>

  
  <div className="card-body items-right text-center pt-0">


  <div>
        
    </div>
    
    <br/>
   
    <ul className="text-left">
      <span className="font-bold underline">Brief Guide</span>

      <li className='mt-3 list-disc'>
      {aboutInfo}
      </li>

      <li className='mt-3 list-disc'>
      {myProjects}
      </li>

      <li className='mt-3 list-disc'>
      {githubRepo}
      </li>

      <li className='mt-3 list-disc'>
      {contactMe}
      </li>


    </ul>
  
    
    <div className="card-actions">
    
    </div>
  </div>
</div>




    </div>
  )
}



export default HomePageBlurb;