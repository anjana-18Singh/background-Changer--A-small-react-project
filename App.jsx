import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>


      <div className="fixed flex wrap flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shawdow-lg bg-white px-2 py-3 rounded-2xl"><button className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"red"}}>red</button>

        <button  onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"green"}}>Green</button>

        <button onClick={()=> setColor("Blue")}className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"Blue"}}>blue</button>

        <button onClick={()=> setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"purple"}}>Purple</button>


        <button onClick={()=> setColor("gray")}className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"gray"}}>Gray</button>


        <button onClick={()=> setColor("black")}className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"black"}}>black </button>

        
        <button onClick={()=> setColor("olive")}className="outline-none px-4 py-1 rounded-full text-white"
        style={{backgroundColor:"olive"}}>Reset </button>


        
        
        
        </div>
      </div>
      
      
    </div>
  )
}

export default App
