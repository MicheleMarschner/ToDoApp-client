import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function AddToDo() {
    const [newToDo, setNewToDo] = useState({});
    const { addToDo, deleteAll } = useContext(GlobalContext);

    const handleChange = (e) => {
       setNewToDo({...newToDo, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newToDo === "") {
            return window.alert("The usefulness of a cup is in its emptiness (old chinese proverb). And the usefulness of a todo lies in its text! Please type something in the input field.");
        }

        setNewToDo({...newToDo, "markAsCompleted": "false"})
        let toDo = newToDo;
        addToDo(toDo);
        
        setNewToDo({});
    }

    return (
        <form className="pt-3 newToDo" onSubmit={handleSubmit}>
            <input type="text" className="form-control my-4 rounded-pill" name="text" placeholder="Write your ToDo here" value={newToDo.text || ""} onChange={handleChange}/>
            <div className="ButtonGroup text-center">
                <button className="btn primary-button mr-3 hvr-ripple-out" type="submit">Add</button>
                <button className="btn deleteAll primary-button hvr-ripple-out" type="button" onClick={deleteAll}>Delete All</button>
            </div>
        </form>
    )
}
