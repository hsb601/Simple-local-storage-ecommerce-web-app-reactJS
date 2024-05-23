import {useState} from "react";
const TodoCustomH =()=>
{
    const [todos, setTodo]= useState([]);

    const addTodo = (newTodo)=>{
        setTodo([...todos, newTodo]);
    };
    const removeTodo=(ind)=>
    {
        const todoArr = [...todos];
        todoArr.splice(ind,1);
        setTodo(todoArr);
    };
    const updateTodo = (index, updateTodo)=>{
        const newTodos = [...todos];
         newTodos[index] = updateTodo;
         setTodo(newTodos);    
    };
   
    return {
        todos,
        addTodo,
        removeTodo,
        updateTodo,
      };
}
export default TodoCustomH;