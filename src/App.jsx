import React from 'react'
import { useState } from 'react'

const App = () => {

  // Data
  const BioData = [
    { id: 0, name: 'mohd', age: 17 },
    { id: 1, name: 'owais', age: 16 },
    { id: 2, name: 'ansari', age: 15 },
  ]

  const [myArr, setArr] = useState(BioData);
const [element,setelem]=useState('')

  const add=()=>{
  setArr([...myArr,element])
  }

const change=(e)=>{
const x=e.target.value;
setelem(x);
}

  const clear = () => {
    setArr([]);
  }
 console.log('hi')

  const remove = (id) => {
    const mynewArr = myArr.filter((elem) => {
      return elem.id !== id;
    })

    setArr(mynewArr);
  } 


  return (
    <>
<input type="text" placeholder='write any to do' onChange={change} value={element}/>
<button onClick={add}>Add</button>
      {
        myArr.map((elem) => {
          return <h1 key={elem._id}>
            name:{elem.name} & age: {elem.age}
            <button onClick={() => remove(elem.id)}>Remove</button>
          </h1>
        }
        )
      }

      <button onClick={clear}>Clear</button>
    </>
  )
}

export default App