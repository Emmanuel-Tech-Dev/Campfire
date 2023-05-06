import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
 import { IoClose } from 'react-icons/io5';

 import { FaInstagram  } from 'react-icons/fa'
import {FiTwitter } from 'react-icons/fi'
import {AiOutlineLinkedin } from 'react-icons/ai'
import {RxDiscordLogo } from 'react-icons/rx'


const Navbar = () => {

  const [ nav , setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


    const links = [
       
        { name : "Ideas" , link : '/' },
        { name : "Find a team" , link : '/' },
        { name : "FAQs" , link : '/' },
        { name : "Resources" , link : '/' },
    ]


  return (
    <div>
      <header className='text-[#fff] p-5 font-odd '>
       
        <nav className='nav  flex items-center border border-[#d2d04560] justify-between p-3 rounded-md md:px-14'>
         <label><img className='w-[100px] md:w-[130px] ' src='../images/logo.png' /></label>
         <ul className='hidden  md:flex gap-16'>
             {links.map((link)  => {
                 return (
                     <li className='' key={link.name}><a className='' href={link.link}>{link.name}</a></li>
                )
             })}       
         </ul>

         <a href='/' className=' hidden  py-[17px] px-[29px] bg-gradient-to-b from-[#CAFF87] to-[#FFE5A2] text-[#070300] rounded-lg md:block'><button className='font-semibold'>Connect wallet</button></a>
       
         <button onClick={handleNav}  className={ !nav ? ' cursor-pointer md:hidden absolute right-8  ' : 'fixed z-40 right-7 bg-[#0f0f0f] rounded-[50%] p-1.5' }  >
            {!nav ? <HiOutlineMenu size={24}/> : <IoClose size={24}/> }       
         </button>
       
        {/* MObile Menu */}

               <div className={!nav ? ' fixed  top-[-100%]  ' :'fixed left-0 top-0 w-full  bg-[#070300] z-10  ease-in-out duration-500 '  }>
               <label><img className=' m-5 mt-10 w-[100px] md:hidden' src='../images/logo.png' /></label>
             
           <img src="../images/leaf.png" className="px-10 absolute left-[40%] mt-10" />   
                <ul className='flex mt-2 p-6 flex-col justify-start gap-8 md:hidden'>
               
                
                  {links.map((link)  => {
                 return (
                     <li className='' key={link.name}><a className='' href={link.link}>{link.name}</a></li>
                )
             })}  

           <a href='/' className='py-[17px] px-[29px] bg-gradient-to-b from-[#CAFF87] to-[#FFE5A2] text-[#070300] text-center rounded-lg'><button className='font-semibold'>Connect wallet</button></a>
       
         <div className="icons flex justify-center gap-5 m-5">
                    <a href=''><RxDiscordLogo size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FiTwitter size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FaInstagram size={24} color={'#C6C6C6'}/></a>
                    <a href=''><AiOutlineLinkedin size={24} color={'#C6C6C6'}/></a>
                 </div>
<img  src="../images/leaf-2.png" className="px-10 absolute top-[72%] " />

                 </ul>
<img src='../images/BOTleaf.png'/>
          
                </div>



        </nav>
      
      </header>
    </div>
  )
}

export default Navbar
