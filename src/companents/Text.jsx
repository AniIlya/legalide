import React from 'react'

const Text = (props) => {
    const { h1,p,start } = props
  return (
   start? <div className='text-start w-[70%] m-auto py-[5%]' >
        <h1 className='text-[#252B42] font-bold text-3xl mb-[2%]'>{h1}</h1>
        <p  className='text-[#737373] font-normal'>{p}</p>
    </div>:<div className='text-center w-[50%] m-auto py-[5%]' >
        <h1 className='text-[#252B42] font-bold text-3xl mb-[2%]'>{h1}</h1>
        <p  className='text-[#737373] font-normal'>{p}</p>
    </div>
  )
}

export default Text