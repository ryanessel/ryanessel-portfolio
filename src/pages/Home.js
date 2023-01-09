import React from 'react'
import HomePageBlurb from '../components/HomePageBlurb';
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div className='text-white'>

<div className='text-5xl bg-blue-400 p-4'> Welcome to My Portfolio</div> 
     


    

<HomePageBlurb 
homePageGreeting={"Hello Welcome to Ryan Essel's portfolio"}
aboutInfo={`Please click the "About" link in the menu above to learn a bit about me and see some projects I have created`}
contactMe={"Please send me an email via the Contact page and/or contact me via the Linkedn link at the bottom of each page"}
githubRepo={"Please take a look at my github reposity which can be accessed though the link at the bottom of each page"}





/>

    
    </div>
  )
}


export default Home;