
const Hero = () => {
  return (
    <div className='text-[#fff]'>
      
      <div className="content max-w-[100%] text-center p-5 mt-[33.5%] font-odd md:w-[50%] md:m-auto md:mt-[17%]">
        <h1 className='text-4xl font-bold mb-5 -mt-[20%] md:text-6xl md:-mt-[30%]'>Join Web3 hackathon, make an impact</h1>
        <p className='opacity-[.5] pb-5 md:w-[50%] md:m-auto'>Sync up with people who share your interests. to develop the decentralized techologies of the future</p>
           <a href='/' className='py-[15px] px-[20px] block text-center max-w-[60%] m-auto bg-[#D2CF45]  text-[#070300] rounded-lg'><button className='font-semibold'>Register Today</button></a>
      
        
      </div>
 <div className="heroImage h-[360px] overflow-hidden md:h-[600px]">
    <img className='w-full h-[100%] object-cover md:h-[560px] md:mt-10' src='../images/heroImage.png'/>
 </div>

    </div>
  )
}

export default Hero
