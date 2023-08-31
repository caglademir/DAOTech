import React from 'react'

 export default function Model({setIsOpen}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ' >
        <div className='w-[60%] h-[70%] bg-black border-2 flex flex-col'>
        <button onClick={()=>{setIsOpen(false)}} className=' text-white h-[10%] place-self-end w-[5%] m-2' >X</button>
        </div>
        </div>
  )
}
