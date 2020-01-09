import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const Task = (props) => {

    let className = ""
    if (props.isImportant === true) {
        className += ' important'
    }
    let classes = "editable"

    if (props.edit === true) {
        return (
            <>
                <div className={className}>
                    <form className={classes} noValidate autoComplete="off">
                        <span>{props.id}</span>
                        <TextField id="standard-basic" label="info" variant="outlined" />
                        <TextField id="filled-basic" label="date" variant="outlined" />
                        <br></br>
                        <Button variant="contained" color="secondary" onClick={() => props.deleteProps(props.id)}>
                            delete
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => props.changeProps(props.id)}>
                            save
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => props.moveProps(props.id)}>
                            {props.isDone ? 'mark as to do' : 'move to done'}
                        </Button>
                        <hr></hr>
                    </form>
                </div>
            </>
        )
    } else
return (
    <>
        <div className={className}>
            <h3>{props.id} : {props.content}  date: {props.finishDate}</h3>
            <Button variant="contained" color="secondary" onClick={() => props.deleteProps(props.id)}>
                delete
                    </Button>
            <Button variant="contained" color="primary" onClick={() => props.changeProps(props.id)}>
                edit
                    </Button>
            <Button variant="contained" color="primary" onClick={() => props.moveProps(props.id)}>
                {props.isDone ? 'mark as to do' : 'move to done'}
            </Button><hr></hr>
        </div>
    </>
)
}

export default Task;