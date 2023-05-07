import Tabs from "./Tabs"



const Interest = () => {
  return (
    <div>
       <div className="sideImage flex justify-between mt-14">
         <img src="../images/Ileftleaf.png"/>
        

       <div className="content text-[#fff] mt-10">
         <h1 className="text-center text-2xl font-semibold pb-5 md:text-4xl">Interest</h1>
         <div className="tabs flex flex-wrap justify-center gap-3 mt-3 md:gap-x-10 ">
            <Tabs name={'DAOs'} image={'../images/Scales.png'}  />
            <Tabs name={'Gaming'} image={'../images/GameController.png'}  />
            <Tabs name={'DEFI'} image={'../images/Circuitry.png'}  />
            <Tabs name={'Payments'} image={'../images/CreditCard.png'}  />
            <Tabs name={'Music'} image={'../images/MicrophoneStage.png'}  />
            <Tabs name={'NFTs'} image={'../images/nfts.png'}  />
          
         </div>
        <div className="button mt-10">
        <a href='/' className='py-[15px] px-[20px] block text-center max-w-[60%] m-auto bg-[#D2CF45]  text-[#070300] rounded-lg md:w-[40%]'><button className='font-semibold'>Register Today</button></a>
      
        </div>
      
       </div>
        <img className="mt-4" src="../images/Irightleaf.png"/>
       </div>
    </div>
  )
}

export default Interest
