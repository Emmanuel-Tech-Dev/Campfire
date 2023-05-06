

const Prizes = () => {
  return (
    <div>
        <div className="container text-[#fff] p-5 mt-5">
            <div className="content text-center">
                <h1 className="text-2xl font-semibold p-3 md:text-4xl">Prizes</h1>
                <p className="opacity-[.5] md:w-[30%] md:m-auto">Send out your project now! the top performers will recieve honors, rewards, and glory</p>
            </div>

            <div className="prizes flex flex-wrap gap-x-20 justify-center items-center text-center md:w-[50%] md:m-auto md:gap-x-36">
                <div className="option mt-10 ">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 1.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$80k</h3>
                </div> 
                <div className="option mt-10">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 2.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$60k</h3>
                </div> 
                <div className="option mt-10">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 3.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$40k</h3>
                </div>
                 <div className="option mt-10">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 4.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$20k</h3>
                </div>
                 <div className="option mt-10">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 5.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$10k</h3>
                </div> 
                <div className="option mt-10">
                    <img className="w-[76px] md:w-[100%]" src="../images/trophy 6.png"/>
                    <h3 className="text-[18px]  mt-3 font-semibold">$5k</h3>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Prizes
