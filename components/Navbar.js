import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div>
        <div className='bg-yellow-100 flex justify-center text-lg ' >
            🎉 Special Launch Price: 75% discount Pre-applied 🎉    
            </div>
            <div className='flex justify-between items-center my-5 mx-10'>
            <Image height={70} width={70} src="/images/logo.png" alt="Logo" />
            <button className='text-white  bg-[#ff206e] py-3 px-6 rounded-xl hover:bg-black transition duration-500 '  >ENROLL NOW</button>
            </div>
            </div>
    )
}

export default Navbar
Navbar