import React,{useState} from 'react'

export const Hamburger = ({setToggle}) => {
    const [button, setButton] = useState(true)
    const hamburger =()=>{
        button === false ? setButton(true) : setButton(false)
        button === false ? setToggle(false) : setToggle(true)

    }
    
  return (
    <div onClick={hamburger} className='space-y-2 md:hidden hover:cursor-pointer'>
      <div className={`${button === true ? 'w-[35px]' : 'w-[35px]'} h-[3px] dark:bg-[#edf2f4] bg-[#14213d] rounded-md transition-all duration-200 ease-linear`}></div>
      <div className={`${button === true ? 'w-[35px]' : 'w-[15px]'} h-[3px] dark:bg-[#edf2f4] bg-[#14213d] rounded-md transition-all duration-200 ease-linear`}></div>
      <div className={`${button === true ? 'w-[35px]' : 'w-[35px]'} h-[3px] dark:bg-[#edf2f4] bg-[#14213d] rounded-md transition-all duration-200 ease-linear`}></div>
    </div>
  )
}