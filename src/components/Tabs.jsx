

const Tabs = ({ image ,  name }) => {
  return (
    <div>
      
  <span className="inline-flex items-center gap-2 bg-[#94949407] px-[25px] py-[10px] rounded-[22px] cursor-pointer">
                    <img src={image} />
                    {name}
                    </span> 

    </div>
  )
}

export default Tabs
