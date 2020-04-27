import React from 'react'
import './AddButton.css'

function AddButton(props) {
    return (
        <button type="button" className='Add-btn' onClick = {props.onClick}><p className='add-text'>+</p></button>
    )
}

export default AddButton;