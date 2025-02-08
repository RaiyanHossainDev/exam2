import { useEffect, useState } from 'react'
import './App.css'
import app from './firebase.config'
import { getDatabase, push, ref, set, onValue, remove  } from "firebase/database";


function App() {
  const [input,setInput] = useState('')
  const [allNotes,setAllNotes] = useState([])
  const db = getDatabase();


  useEffect(()=>{
    onValue(ref(db, 'notes/'), (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        arr.push({...item.val(),key:item.key})
      })
      setAllNotes(arr)
    });
  },[])
  

  
  let handleDelete = (data)=>{
    remove(ref(db, 'notes/' + data.key))
  }

  let handleAdd = ()=>{
    if (input != '') {
      setInput('')
      set(push(ref(db, 'notes/')), {
        note: input,
      });
    }
  }
  
  return (
    <>
      <div className='holder'>
        <div className=' flex flex-col gap-[10px] items-center'>
          <input onKeyDown={(e)=>{e.key === "Enter"&&handleAdd()}} value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Write your notes' />
          <button onClick={()=>handleAdd()}>Add</button>
        </div>
        <div className=' flex flex-col gap-[10px]'>
          {
            allNotes.map((item)=>(
              <h2 key={item.key}>{item.note} <button onClick={()=>handleDelete(item)} className='bg-[red]'>delete</button></h2>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
