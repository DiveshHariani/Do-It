import React, {useState} from 'react'

import './Task.css'

function Task(props) {

    const [status , setStatus] = useState(false);

    function completed(e) {
        e.preventDefault();
        console.log('Clicked')
        console.log(status);        ///PROBLEM
        setStatus(true);
        console.log(status);
    }
    return (
    
        <div className = 'card'>
            <div className='card-body customCard'>
                <h2 className='card-title'>{props.title}</h2>
                <h4 className='card-subtitle'>{props.due}</h4>
                <p className='card-text'>
                    {props.details}
                </p>
                <div className='submission'>
                   <button type='button' className='btn btn-success' onClick={completed}>Completed</button>
                </div>
            </div>
        </div> 
    )
}

export default Task