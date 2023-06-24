import { useState } from "react";
import TodoForm from "./TodoForm";

const AddTodoButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
    <button onClick={handleButtonClick} className=' mx-auto rounded-full w-10 h-10 bg-green-400 text-center p-2 text-white text-xl'>
      +
    </button>
     {isPopupOpen && <TodoForm /> } 
    </>
  )
}

export default AddTodoButton
