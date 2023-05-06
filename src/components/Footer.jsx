import { FaInstagram  } from 'react-icons/fa'
import {FiTwitter } from 'react-icons/fi'
import {AiOutlineLinkedin } from 'react-icons/ai'
import {RxDiscordLogo } from 'react-icons/rx'

const Footer = () => {

    const links = [

        { name: "Ideas", link: '/' },
        { name: "Find a team", link: '/' },
        { name: "FAQs", link: '/' },
        { name: "Resources", link: '/' },
    ]

    return (
        <div className="mt-32">

            <hr className='bg-[#141414] h-[1px] outline-none border-none' />

            <footer className="p-5 text-[#fff]">
                <img src="../images/leaf.png" className="px-10 -mt-14 md:px-56" />
                <div className="links text-[#fff] py-10 ">
                    <ul className="flex flex-col gap-6 md:w-[30%] md:flex-row md:justify-between md:m-auto">
                        {links.map((link) => {
                            return (
                                <li key={link.name}><a href={link.link}>{link.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <hr className='bg-[#141414] h-[1px] outline-none border-none' />
               <img src="../images/leaf-1.png" className="px-10 -mt-4 float-right md:px-52" />
        
           <div className="wrapper md:hidden">  
           
             <div className="input mt-10 w-[90%] ">
                 <p className="text-[#fff] opacity-[.5] pb-5">Stay updated on the Campfire news and announcements.</p>
                
                  <div className="text flex w-[100%] bg-[#94949407] items-center rounded-md">
   <input className="border-none bg-transparent  px-5 py-2 w-[90%] " type="text" placeholder="example@gmail.com" aria-label="Email" />
<a href="#">
    <img className="w-[24px] h-[24px]" src="../images/send-2.png" />
</a>

                  </div> 
                   
               </div>

               <div className="socails mt-10">
                 <h4 className="opacity-[.5]">Socials</h4>
                 <div className="icons flex gap-5 mt-5">
                    <a href=''><RxDiscordLogo size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FiTwitter size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FaInstagram size={24} color={'#C6C6C6'}/></a>
                    <a href=''><AiOutlineLinkedin size={24} color={'#C6C6C6'}/></a>
                 </div>
               </div>

<div className="copyright">
     <div className="logo mt-14">
        <img src='../images/logo.png' className='w-[139px]'/>
        <p className='opacity-[.5] w-[150px] py-5'>All rights reserved, © 2023 Camfire</p>
     </div>
</div>
</div> 

{/* Larger Screen Footer with Socials, input , copyright */}

           <div className="wrapper hidden  md:flex md:items-center md:gap-24 md:justify-center md:w-[90%] md:m-auto">  
           
          <div className="copyright">
     <div className="logo mt-14">
        <img src='../images/logo.png' className='w-[139px]'/>
        <p className='opacity-[.5] w-[150px] py-5'>All rights reserved, © 2023 Camfire</p>
     </div>
</div>

             <div className="input mt-10 w-[90%] md:w-[35%]">
                 <p className="text-[#fff] opacity-[.5] pb-5 md:w-[50%]">Stay updated on the Campfire news and announcements.</p>
                
                  <div className="text flex w-[100%] bg-[#94949407] items-center rounded-md md:w-[100%]">
   <input className="border-none bg-transparent  px-5 py-2 w-[90%] md:w-[90%] " type="text" placeholder="example@gmail.com" aria-label="Email" />
<a href="#">
    <img className="w-[24px] h-[24px]" src="../images/send-2.png" />
</a>

                  </div> 
                   
               </div>

               <div className="socails mt-10">
                 <h4 className="opacity-[.5]">Socials</h4>
                 <div className="icons flex gap-5 mt-5">
                    <a href=''><RxDiscordLogo size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FiTwitter size={24} color={'#C6C6C6'}/></a>
                    <a href=''><FaInstagram size={24} color={'#C6C6C6'}/></a>
                    <a href=''><AiOutlineLinkedin size={24} color={'#C6C6C6'}/></a>
                 </div>
               </div>


</div> 



            </footer>
  <img src='../images/BOTleaf.png'/>

        </div>
    )
}

export default Footer
