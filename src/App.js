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
 date.setDate(date.getDate()+count);

  function handleStepMinus(){
    setStep((s)=>s-1);
  }
 function handleStepPlus(){
   setStep((s)=>s+1);
 }
 
 function handleCountMinus(){
  setCount((s)=>s-=step)
}

 function handleCountPlus(){
  setCount((s)=>s+=step)
}

return <div>
     <div>

      <button onClick={handleStepMinus}>&minus;</button>
      <span>Step:{step}</span>
      <button onClick={handleStepPlus}>&#43;</button>
     </div>
     <div>
      <button onClick={handleCountMinus}>&minus;</button>
      <span>Count:{count}</span>
      <button onClick={handleCountPlus}>&#43;</button>
     </div>
   
     <span>{
      count===0?"today is ": count>0? `${count} days from today is `:`${Math.abs(count)} days ago  `
     } </span>
     <span>{date.toDateString()}</span>

  </div>
}