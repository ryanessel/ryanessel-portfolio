import React from 'react'
import HomePageBlurb from '../components/HomePageBlurb';
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div className='text-white'>

<div className='text-5xl bg-blue-400 p-4'> Welcome to My Portfolio</div> 
     


    

<HomePageBlurb 
homePageGreeting={"Hello Welcome to Ryan Essel's portfolio"}
aboutInfo={`Please click the "About" link in the menu above to learn a bit about me`}
myProjects={'Click on the "Projects" link to see my projects'}
contactMe={`Please send me an email via the "Contact" page or shoot me an email at spucti19@gmail.com`}
githubRepo={"Please take a look at my github repository which can be accessed though the link at the bottom of each page"}





/>

    
    </div>
  )
}


export default Home;