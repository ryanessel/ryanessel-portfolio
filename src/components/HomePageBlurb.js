import React from 'react'

 function HomePageBlurb({homePageGreeting, aboutInfo, contactMe, githubRepo}) {
  return (
    <div  className=' flex items-center justify-center'>

 

        <div className="card w-96 bg-base-100 shadow-xl text-black  lg:w-1/3 mb-4  mt-20 sm:mt-5 md:mt-10   sm:w-9/12">
  
  
  <figure className="px-10 pt-10 text-6xl">
    
  {homePageGreeting}
  </figure>

  
  <div className="card-body items-right text-center">


  <div>
        
    </div>
    
    <br/>
   
    <ul className="text-left">
      <span className="font-bold underline">Brief Guide</span>
      <li className='mt-3 list-disc'>
       {homePageGreeting}
      </li>

      <li className='mt-3 list-disc'>
      {aboutInfo}
      </li>

      <li className='mt-3 list-disc'>
      {contactMe}
      </li>

      <li className='mt-3 list-disc'>
      {githubRepo}
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