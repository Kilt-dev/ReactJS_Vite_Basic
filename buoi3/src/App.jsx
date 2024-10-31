import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [items, setItems] = useState([
    { id: 1, name: "Item 1",status :"Doing" },
    {
      id: 2, name: "Item 2",status :"Done" 
    }
  ])

  const handleAddNew = () => {
    const newItem = {
      id :Math.random(),
      name :name,
      status : "Do"

    }

    setItems([newItem, ...items])
  }
const handleOnClick = (id) =>{
  const newItems = items.map(function(item) {
    if (id === item.id) {
      item.status = item.status === "Do" ?"Doing" : item.status ==="Doing" ?"Done" : ""
    }
    return item;
  })
  setItems(newItems)
}
  
  return (
    <>
    <input
          type="text"
          placeholder="Enter First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
     <button onClick={handleAddNew} type="button"> Add new</button>

     <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            {item.status}
           {
            item.status !== "Done" ? <button 
            type="button" 
            style={item.status === "Do" ? {color : "grey"} :{color : "red"} }
            onClick={ ()=> handleOnClick(item.id, item.status)} >
            
          { item.status === "Do" ?"Doing" : item.status ==="Doing" ?"Done" : ""}</button>   
           
          
           :null}

          </li>
        ))}
      </ul>
    </>
  )
}

export default App

