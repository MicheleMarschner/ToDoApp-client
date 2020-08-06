import React, { useContext, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdClear } from 'react-icons/md';

import { GlobalContext } from '../Context/GlobalState';

export default function ToDo({toDo}) {
    const { deleteToDo, editToDo } = useContext(GlobalContext);
    const [ showIcon, setShowIcon ] = useState(false);

    const handleFocusOut = (e) => {
        const text = e.target.innerHTML;
        if(!text) {
            return alert('Please add some text!');
        }
        editToDo(toDo._id, {"text": text});
    }

    const markAsCompleted = (e) => {
        toDo.isCompleted = !toDo.isCompleted;
        editToDo(toDo._id, {"isCompleted": toDo.isCompleted});
    }

    return (
        <li className="toDo row" key={toDo._id}>
            <div className="inputContainer col"> 
                <input id="check" type="checkbox" defaultChecked={toDo.isCompleted} onChange={(e) => markAsCompleted(e)} />
                <label 
                    contentEditable="true" 
                    onInput={(e) => handleFocusOut(e)} 
                    onMouseEnter={() => setShowIcon(true)} 
                    onMouseLeave={() => setShowIcon(false)}>
                        {toDo.text}
                </label> 
                {showIcon && <FaPencilAlt />}
            </div>
           
            <div className="col-1 p-0"> 
            <button  className="deleteToDoBtn float-right" onClick={() => deleteToDo(toDo._id)}><MdClear /></button>    
    
            </div>  
        </li>
    )
}

//<date> ${new Date().toLocaleDateString()} </date>