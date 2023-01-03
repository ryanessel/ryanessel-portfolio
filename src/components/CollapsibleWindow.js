import { useState } from 'react';
import { Draggable } from 'react-draggable';

function CollapsibleWindow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Draggable>


        <div>

        HELL0

        </div>




    </Draggable>
  );
}

export default CollapsibleWindow;