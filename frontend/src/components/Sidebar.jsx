import React from 'react'
import SearchInput from './SearchInput'
import Users from './Users'

const Sidebar = () => {
  return (
    <div className='flex bg-white w-full md:w-2/5 flex-col'>
        <div className="navbar text-center justify-center  bg-warning mb-2">
            <span className='text-xl font-semibold font-sans'>Aanglo</span>
        </div>
        <SearchInput/>
        <div className='divider my-0'></div>
        <Users/>
        <div className='mt-2'>Logout</div>
        

    </div>
  )
}

export default Sidebar