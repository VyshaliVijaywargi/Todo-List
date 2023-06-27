import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
//import { ClassNames } from '@emotion/react';
const ToDoList = (props) => {
    
        return (
        <>
        <div className='todo_style'>
       <div className='fa-times' onClick={()=>{
        props.onSelect(props.id)
       }}> <CloseOutlinedIcon/> </div>
        <li>{props.text}</li>
        </div>
        </>
        
        );
};

export default ToDoList
