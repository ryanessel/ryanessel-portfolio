import React from 'react'
import Draggable from 'react-draggable';
import { useState } from 'react';

 function Testdrag() {

    const [isOpen, setIsOpen] = useState(false);
  return (


<Draggable>
<div className="relative border rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-3 bg-gray-800 text-white">
          <h3 className="font-bold">My Window</h3>
          <button
            onClick={() => setIsOpen(!isOpen)} onTouchStart={() => setIsOpen(!isOpen)}
            className="p-1 rounded-full hover:bg-gray-700"
          >
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {isOpen && (
          <div className="p-4">
       <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        )}
      </div>

</Draggable>
    

  )
}


export default Testdrag;