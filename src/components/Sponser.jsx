
const Sponser = () => {
  return (
    <div>
      
      <div className="container text-[#fff] p-5 mt-10">
         <div className="items">
            <h1 className="text-3xl font-semibold text-center pb-10 md:text-4xl">Sponsors</h1>
            <div className="icons flex flex-wrap items-center justify-center gap-7 ">
                <img className="w-[120px]" src = "../images/quotient.png" />
                <img className="w-[120px]" src = "../images/catalog.png" />
                <img className="w-[120px]" src = "../images/discord.png" />
                <img className="w-[120px]" src = "../images/notion.png" />
                <img className="w-[120px]" src = "../images/solana.png" />
            </div>
         </div>
      </div>
    <div className="bgIaages flex justify-between">
        <img className=" w-[70px]" src="../images/leftLeaf.png"/>
        <img className="mt-10 w-[70px]" src="../images/rightLeaf.png"/>
    </div>
    </div>
  )
}

export default Sponser
