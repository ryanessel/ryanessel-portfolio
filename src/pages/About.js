import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProjectsCard from '../components/ProjectsCard'
import CardTemplate from '../components/CardTemplate'

export default function About() {
  return (
    <div className='text-white' >
       <div className='text-5xl bg-yellow-600 p-4 '>About</div> 
        <div className=' flex items-center justify-center    text-white'>
      
        <ProfileCard />
        </div>
       
    
     
        
    </div>
  )
}
