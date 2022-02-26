import React, { useState } from 'react'
import '../App.css'

const UseState = () => {
    // const[counter,setCounter] = useState(0)
    // const[counter,setCounter] = useState(0)
    //  const [number,setNumber] = useState([])
    const [obj,setObj] = useState({
      firstname: "",
      lastname: ""
    })

      //  const addNumberToArray = ()=>{
      //    setNumber([...number,{
      //      id: number.length,
      //      data: Math.floor((Math.random() * 10) + 1)
      //    }])
      //  }

console.log(obj)
  return (
    <div>

    {/* simple use of useState   
    count - {counter}
    <button onClick={()=>setCounter(counter+1)}>Click me!</button> */}

    {/* useState with previous state
    count - {counter}
    <button onClick={()=>setCounter(pervCount=>pervCount+1)}>click me</button> */}

    {/* useState with array
    <button onClick={addNumberToArray}>Add a random number to array</button>
    {number.map(data=>{
      return (
        <li key={data.id}>{
          data.data
        }</li>
      )
    })} */}

  {/* useState with object */}
  <form>
 <label htmlFor="firstname">FirstName</label>
 <input 
 type="text"
 value={obj.firstname} 
 onChange={(e)=>setObj({...obj,firstname: e.target.value})} /> <br />
 <label htmlFor="lastname">LastName</label>
 <input 
 type="text"
 value={obj.lastname} 
 onChange={(e)=>setObj({...obj,lastname:e.target.value})} />

 <h1>{obj.firstname}</h1>
 <h1>{obj.lastname}</h1>

  </form>

    </div>
  )
}

export default UseState     