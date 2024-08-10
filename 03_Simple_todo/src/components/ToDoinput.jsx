import React, { useState } from "react";

const ToDoinput = ({ updater }) => {
  const [userData, setUserData] = useState({
    id: null,
    task: "",
    completed: false,
    dueDate: "",
  });
  function handleSubmit(){
    const id=userData.task+"123"
    userData.id=id;
    updater(userData);
    setUserData({id: null, task: "", completed: false, dueDate: ""});
  }
  return (
    <div className=" flex flex-col justify-center items-center mb-4">
      <input type="text" placeholder="Add a task" className="h-10 border" onChange={(e)=>{
        setUserData({...userData, task: e.target.value})
      }} />
      <span>Completed</span>
      <input type="checkbox" onChange={(e)=>{
        setUserData({...userData, completed: e.target.checked})
      }}/>
      <span>Due Date</span>
      <input type="date" onChange={(e)=>{
        setUserData({...userData, dueDate: e.target.value})
      }} />
      <button
        onClick={handleSubmit}
        className="text-gray-400 bg-[#802C6E] border p-3 rounded-md"
      >
        Add
      </button>
    </div>
  );
};

export default ToDoinput;
