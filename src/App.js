import { useState } from "react"

export default function App(){
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter(){
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(0);
 const date= new Date();
//  console.log(date.getDate())  

function handleReset(){
  setCount(0);
  setStep(1);
}
 date.setDate(date.getDate()+count);
 
 function handleCountMinus(){
  setCount((s)=>s-=step)
}

 function handleCountPlus(){
  setCount((s)=>s+=step)
}

return <div>
     <div>
      <input type="range" min="0" max="10" value={step} onChange={(e)=>setStep(+e.target.value)} />
      <span>Step:{step}</span>
     </div>
     <div>
      <button onClick={handleCountMinus}>&minus;</button>
      <input type="text" value={count} onChange={e=>setCount(+e.target.value)}/>
      <button onClick={handleCountPlus}>&#43;</button>
     </div>
   
     <span>{
      count===0?"today is ": count>0? `${count} days from today is `:`${Math.abs(count)} days ago  `
     } </span>
     <span>{date.toDateString()}</span>

     {count !==0 || step!==1 ? ( <div>
      <button onClick={handleReset}>Reset</button>
     </div>):null}
    

  </div>
}