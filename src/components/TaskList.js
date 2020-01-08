import React from 'react';
import Task from './Task';


const TaskList = (props)=>{

const listOfDoneTasks = props.tasksProps.filter(task=>task.isDone === true).map(task=> <Task id={task.id} content={task.content} 
    finishDate={task.finishDate} isImportant={task.isImportant} isDone={task.isDone} edit={task.edit} deleteProps={props.deleteProps} 
    moveProps={props.moveProps} changeProps={props.changeProps}
></Task>)

const listOfUndoneTasks = props.tasksProps.filter(task=>task.isDone === false).map(task=> <Task id={task.id} content={task.content} 
    finishDate={task.finishDate} isImportant={task.isImportant} isDone={task.isDone} edit={task.edit} deleteProps={props.deleteProps} 
    moveProps={props.moveProps} changeProps={props.changeProps}
></Task>)

    return (
        <>
        <p>to do:</p>
        {listOfUndoneTasks}
        
        <p>done:</p>
        {listOfDoneTasks}
        </>
    )
}

export default TaskList;