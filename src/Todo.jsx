import React from 'react'
import { useState } from 'react'


const Todo = () => {
  const [inputValue, setinputValue] = useState("")
  const [inputs, setinputs] = useState([])

  const addValue = () => {
    if(inputValue.trim() === "") return;
    setinputs([...inputs, inputValue]);
    setinputValue("");
  }

  const deleteValue =(index) =>{
    const newValue = inputs.filter((_, i) => i !== index);
    setinputs(newValue)
  };

  const clearValue = () => {
    setinputs([]);
  };

  return (
    <div className=" mt-20 p-4 h-auto flex flex-col items-center  justify-center rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
      <div className="w-auto h-auto flex items-center justify-center">
        <input
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          className="w-80 h-14 p-4 border border-gray-300 rounded-l-lg focus:outline-none"
          type="text"
          placeholder="Enter Todo"
        />
        <button
          onClick={addValue}
          className="bg-amber-950 text-white m-2 w-16 h-14 rounded-r-lg hover:bg-amber-800 duration-500"
        >
          Add
        </button>
      </div>

      <hr className="my-4 w-4/4 border-gray-300" />

      <ul className="space-y-2 w-80">
        {inputs.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-transparent border p-2 rounded-lg"
          >
            <span>{t}</span>
            <button
              onClick={() => deleteValue(index)}
              className="text-amber-950 hover:text-amber-800 font-semibold"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {inputs.length > 0 && (
        <button
          onClick={clearValue}
          className="mt-4 bg-amber-950 text-white py-2 px-6 rounded-lg hover:bg-amber-800 duration-500"
        >
          Clear All
        </button>
      )}
    </div>
  );
};
export default Todo
