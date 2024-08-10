import React, { useState } from 'react'
import ToDoinput from './ToDoinput';

const Todolist = () => {
  const [data,setSetData]=useState([
    {
      id: 1,
      task: 'Define the Object Structure',
      completed: true,
      dueDate: '2024-08-12'
    },
    {
      id: 2,
      task: 'Initialize the Object',
      completed: false,
      dueDate: '2024-08-13'
    },
    {
      id: 3,
      task: 'Add Methods',
      completed: false,
      dueDate: '2024-08-14'
    },
    {
      id: 4,
      task: 'Update Properties',
      completed: false,
      dueDate: '2024-08-15'
    },
    {
      id: 5,
      task: 'Validate Input',
      completed: false,
      dueDate: '2024-08-16'
    },
    {
      id: 6,
      task: 'Implement Error Handling',
      completed: false,
      dueDate: '2024-08-17'
    },
    {
      id: 7,
      task: 'Test Object Functionality',
      completed: false,
      dueDate: '2024-08-18'
    },
    {
      id: 8,
      task: 'Optimize Performance',
      completed: false,
      dueDate: '2024-08-19'
    },
    {
      id: 9,
      task: 'Document the Object',
      completed: false,
      dueDate: '2024-08-20'
    },
    {
      id: 10,
      task: 'Integrate with Other Components',
      completed: false,
      dueDate: '2024-08-21'
    }
  ]




  

  )
  function updater(useInput){
    const newData=[...data,useInput]
    setSetData(newData)
  }
  function handleDelete(id){
    setSetData(data.filter(item=>item.id!==id))
  }
  function handleStatusUpdate(id){
    setSetData(data.map(item=>item.id===id?{...item,completed:!item.completed}:item))
  }

  return (
    <>
    <ToDoinput updater={updater}/>
    <div className='grid sm:grid-cols-3 grid-cols-1 md:grid-cols-5 gap-4 max-w-[70%] m-auto '>
    {data.map((item)=>{
        return(<>
        <div key={item.id} className='border p-5 bg-slate-600 text-white rounded-md shadow-lime-100 hover:scale-125 duration-500  '>
        <p>{item.task}</p>
       <span>Completed</span> <input type="checkbox" checked={item.completed} onChange={()=>setSetData(data.map(i=>i.id===item.id?{...i,completed:!i.completed}:i))} />
        <p>{item.dueDate}</p>
        <button className='text-red-600 hover:border rounded-md p-1' onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
        </>)
    })}
    </div>
    </>
  )
}

export default Todolist