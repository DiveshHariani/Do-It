import React from 'react'

import './Task.css'

function Task(props) {
    return (
        <div className = 'custom-card'>
            <div className='custom-body'>
                <h3 className='custom-card-title'>{props.title}</h3>
                <h4 className='custom-card-subtitle'>{props.due}</h4>
                <p className='custom-card-text'>
                    {props.details}
                </p>
                <button type='button' className='btn btn-success' onClick={props.onClick}>Completed</button>
                
            </div>
        </div> 
    )
}

export default Task