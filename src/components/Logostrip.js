

import Linkden from "../pictures/icons8-linkedin.svg"
import Github from "../pictures/icons8-github.svg"

 function Logostrip() {
  return (

   <>
   
  
    <div className='flex justify-center'>

    <a href="https://www.linkedin.com/in/ryan-essel-a198b9257/">
       <img src={Linkden}/>
    </a>

    <a href="https://github.com/ryanessel">
       <img src={Github}/>
    </a>
 
  

    </div>
    <div className="text-slate-400"> App icons by <a href="https://icons8.com/" className="text-white">icons8.com</a></div>

    </>
  )
}



export default Logostrip;