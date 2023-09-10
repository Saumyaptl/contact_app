import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/Ai'
const Modal = ({ close ,children}) => {
  return createPortal(
    <div className='max-w-[370px] mx-auto'>
      <div className='min-h-[200px] max-w-[80%] bg-white p-4  z-50 relative m-auto'>
        <div className=' flex justify-end'>
          <AiOutlineClose className='text-2xl' onClick={close} />
         
        </div>
        {children}
      </div>
      <div className=' absolute top-0 h-screen w-screen backdrop-blur z-40 ' onClick ={close}>

</div>
    </div>, document.getElementById("modal")
  )
}

export default Modal
