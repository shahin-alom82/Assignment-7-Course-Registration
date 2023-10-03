import { useEffect, useState } from "react"
import profile from "../../../src/book.png"
import profiles from "../../../src/dolar.png"
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function Start
export default function Home(){

  const [allActors, setAllActors] = useState([]);
// Click Btn Handler
const [selectActors, setSelectActor] = useState([]);
// Counter Section
const [totalReamainnin, seTotalRemainning] = useState(20);
const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() =>{
    fetch("Home.json")
    .then(res => res.json())
    .then(data => setAllActors(data))
  },[])


  // Click Btn Handler
  const handleSelectActor = (actor) => { 
    const isExist = selectActors.find(item => item.id == actor.id)
    // Sum Section
    let count = actor.credit;
    if(isExist){
     return toast("Already Booked")
    }
    else{
      // Sum Section
      selectActors.forEach(item => {
        count = count + item.credit;
      });
      const totalRemainnig = 20 - count;
      if(count > 20){
        return toast(" Data No Selected")
      }
      else{
        setTotalCredit(count);
      seTotalRemainning(totalRemainnig);
      setSelectActor([...selectActors, actor]);
      }
    }
  }

    return(
<div className="flex flex-col lg:flex-row gap-5 mx-auto text-center">
<div className=" lg:w-3/4 mt-10 ">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
{
  // Cart List
  allActors.map(actor => (<div key={actor.id}  className="p-4 bg-base-100 shadow-xl rounded-xl">
  <img className="w-[400px] h-[144px]" src={actor.img} alt="Shoes" />
    <h1 className="text-start font-bold mt-3">{actor.name}</h1>
    <p className="text-start mt-2 text-sm text-gray-700">{actor.title}</p>
    <div className="flex text-start justify-between text-gray-700 items-center mt-5">
      <img className="h-6 font-bold" src={profiles} alt="" />
      <p>Price : {actor.price}</p>
      <img className="h-6 items-center font-bold" src={profile} alt="" />
      <p>Credit : {actor.credit}hr</p>
    </div>
    <button onClick={() => handleSelectActor(actor)}  className=" bg-[#2F80ED] w-64 rounded mt-6 h-10 text-white font-medium">Select</button>
    <ToastContainer position="top-center" autoClose={1500}/>
</div>
))
}
</div>
</div>
<Cart selectActors={selectActors} totalReamainnin={totalReamainnin} totalCredit={totalCredit}></Cart>
</div>
    )
 
}