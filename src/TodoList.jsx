//create a small todo with giving meterialui id styling

import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'; //uuid for add key for each value of array ,, and now we add them as an array of abject ,, [{}]
import Button from '@mui/material/Button';  //import button from meterial ui 
import DeleteIcon from '@mui/icons-material/Delete'; //import icon from meterial ui
import SendIcon from '@mui/icons-material/Send';  //import icon from meterial ui
import TextField from '@mui/material/TextField'; //inport input from ,,,  ,,


export default function () {

    let [todos, setTodos] = useState([
        { task: "sample task", id: uuidv4(), isDone: false } //array of an object
    ]);

    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }] //copy of new array
        }); //settodo

        setNewTodo(""); 
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); //call back ,, new value depends on old one
    };


    // to update all element in array
    let markAllAsDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {

                return {
                    ...todo,
                    isDone: true,
                };

            })
        ));
        console.log(newArr);
    }

    // to update one element in array
    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {

                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }

            })
        ));
    }
    

    return (
        
        <div>

            <TextField 
                id="filled-basic"   
                label="Add new Todo" 
                variant="filled" 
                fullWidth 
                value = { newTodo }
                onChange = { updateTodoValue }
            />

            <br /><br />
            <Button
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                onClick={addNewTask}
            >
                Add Task
            </Button>

            <br /><br /><br />
            <hr />
            <h2  style={{ color: "#1976d2" }} >Tasks Todo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} >
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}> {todo.task} </span>
                        &nbsp; &nbsp; &nbsp;
                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            startIcon={<DeleteIcon />}
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </Button>
                        &nbsp;
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => markAsDone(todo.id)}
                        >
                            Mark As Done
                        </Button>

                        <br />   <br />
                    </li>
                ))}
            </ul>
            <br /><br />
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    )
}