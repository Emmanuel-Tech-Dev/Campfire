import { HiArrowRight } from 'react-icons/hi' ;

import Tabs from './Tabs'


const Location = () => {
  return (
    <div>
       <div className="container text-[#fff] px-5 md:flex md:px-48 md:justify-between">
            <div className="content md:w-[40%]">
                <div className="title inline-flex items-center gap-5">
                <h1 className="text-2xl font-bold md:text-4xl">Meet IRL</h1> 
                <span className="font-semibold text-[12px] bg-[#40DD78] text-[#070300] px-[11.9px] py-[1.5px] rounded-xl">Coming soon</span>
                </div>
                <p className="opacity-[.5] py-5 w-[85%]">Your neighborhood will soon experience campfire. Visit coworking places across the world to meet hackathon builders, find teammates, and discover Campfire development</p>
             </div>
             <div className="location flex flex-wrap gap-2 mt-3 md:w-[40%] md:gap-5">

                <Tabs name={"New York"} image={"../images/Flame.png"}/>
                <Tabs name={'Landon'} image={"../images/Flame-3.png"}/>
                <Tabs name={'Abuja'} image={"../images/Flame-6.png"}/>
                <Tabs name={'Berlin'} image={"../images/Flame-1.png"}/>
                <Tabs name={'Accra'} image={"../images/Flame-4.png"}/>
                <Tabs name={'Singapore'} image={"../images/Flame-7.png"}/>
                <Tabs name={'Vernice'} image={"../images/Flame-2.png"}/>
                <Tabs name={'Delhi'} image={"../images/Flame-5.png"}/>
                <Tabs name={'Paris'} image={"../images/Flame-8.png"}/>
                 
             </div>
       </div>
<div className="button p-10 px-5 md:px-48 md:-mt-10">
          <a className='bg-[#FE632B] inline-flex items-center gap-5 px-[18px] py-[12px] rounded font-semibold' href="" >See all locations  <HiArrowRight size={20} /></a>

</div>
     </div>
  )
}

export default Location
