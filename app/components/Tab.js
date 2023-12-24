import React from 'react'

const Tab = ({active ,selectTab ,children}) => {
    const buttonClass = active ? 'bg-[#6f73f0] text-white px-4 py-2 rounded-full text-xl font-semibold' : 'bg-transparent border-solid border-2 border-[#6f73f0] text-slate-200 px-4 py-2 rounded-full text-xl font-semibold'
  return (
    <button onClick={selectTab}
         className=" text-white px-4 py-2 rounded-full text-xl font-semibold">
         <p className={`text-white text-xl ${buttonClass}`}>{children}
         </p>
         </button>
  )
}

export default Tab