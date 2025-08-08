import React , { useState , useEffect } from 'react'

function TestOne() {
    const [count, setCount] = useState(0)
   const modiFyme=()=>{

    //alert("test ok");
    setCount(count+1);
   }

   useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={modiFyme}>click me</button>
    </div>
  )
}

export default TestOne
