import { faHandPeace, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { faHand, faHandHoldingHeart, faRightFromBracket, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../actions/auth'

export const ProfileLogout = ({lModal,setlModal}) => {
    const {user} = useSelector(state=> state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleProfile = ()=>{
      setlModal(!lModal)
      console.log(lModal)
    }
    const handleLogOut = (event)=>{
      const name = event.target.name
      if(name === 'profile'){
      setlModal(!lModal)
      }
      else{
        dispatch(logOut())
        setlModal(!lModal)
        // navigate('/login')
      }
    }
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{opacity: 0, scale:0.5}}
    transition={{ duration: 0.3 }}
    className='flex text-white justify-center items-center z-50 absolute top-[8.5rem] md:top-[3.2rem] h-[92vh] w-full bg-black/90'>
    <div className='rounded-md'>
    <div className='min-w-[20rem] bg-[#1B203A] flex justify-start gap-10 md:gap-7 items-center flex-col min-h-[20rem] rounded-md'>
       <div className='w-full px-2 border-b-2'> <motion.button
              onClick={handleProfile}
       whileTap={{ scale: 0.7 }}
       ><FontAwesomeIcon icon={faTimes}/></motion.button> </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[70px] rounded-full flex gap-2 bg-[#FF6E91] justify-center items-center border-2 h-[70px] text-3xl'> <span>
                 {user.email ? user.firstName[0]+user.lastName[0]: ''}
                </span> </div>
            <div className='text-sm md:text-lg font-medium'>HELLO!</div>
            <div className='text-sm md:text-lg font-medium'>{user.email ? user.userName:''}</div>
            <div className='font-poppins'>{user.email}</div>
        </div>
        <div className='flex gap-2 flex-col'>
        <Link to='/userProfile'>
        <motion.button
        name='profile'
            onClick={handleLogOut}
            whileTap={{ scale: 0.7 }}
            className='relative px-4 py-1 rounded-md text-sm md:text-base font-medium flex gap-3 bg-[#2EB9AC] justify-center items-center '>VIEW PROFILE <FontAwesomeIcon icon={faUser}/>
            </motion.button>
        </Link>
            <motion.button
            name='logOut'
            onClick={handleLogOut}
            whileTap={{ scale: 0.7 }}
            className='relative px-4 py-1 rounded-md text-sm md:text-base font-medium flex gap-3 bg-[#2EB9AC] justify-center items-center hover:before:content-["BYE????"] before:absolute hover:before:bg-white before:w-0 before:overflow-hidden before:left-0 before:grid before:place-items-center before:rounded-md hover:before:w-full before:transition-all before:h-full before:text-[#1B203A]'>LOG OUT <FontAwesomeIcon icon={faRightFromBracket}/>
            </motion.button>
        </div>
    </div>
    </div>
    </motion.div>
  )
}

