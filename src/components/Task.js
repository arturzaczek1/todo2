import React from 'react';
import Button from '@material-ui/core/Button';



const Task = (props) => {

    let className = ""
    if (props.isImportant === true) {
        className += ' important'
    }

    if (props.edit === true) {
        return (
            <>
                <div className={className}>
                    <p>edit</p> 
                    <h5>{props.id} : {props.content}  date: {props.finishDate}</h5>
                    <Button variant="contained" color="secondary" onClick={() => props.deleteProps(props.id)}>
                        delete
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.changeProps(props.id)}>
                        edit
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.moveProps(props.id)}>
                    {props.isDone? 'mark as to do' : 'move to done'}
                    </Button><hr></hr>
                </div>
            </>
        )
    } else
        return (
            <>
                <div className={className}>
                    <h5>{props.id} : {props.content}  date: {props.finishDate}</h5>
                    <Button variant="contained" color="secondary" onClick={() => props.deleteProps(props.id)}>
                        delete
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.changeProps(props.id)}>
                        edit
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.moveProps(props.id)}>
                    {props.isDone? 'mark as to do' : 'move to done'}
                    </Button><hr></hr>
                </div>
            </>
        )
}

export default Task;