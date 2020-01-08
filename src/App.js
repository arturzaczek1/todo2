import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';

class App extends Component {

  state = {
    tasks: [{
      id: 1,
      content: 'first task',
      finishDate: '2020-02-01',
      isImportant: true,
      isDone: false,
      edit: true
    },
    {
      id: 2,
      content: 'second task',
      finishDate: '2020-01-31',
      isImportant: false,
      isDone: false,
      edit: false
    },
    {
      id: 3,
      content: 'third task',
      finishDate: '2020-02-11',
      isImportant: false,
      isDone: false,
      edit: false
    },
    {
      id: 4,
      content: 'fourth task',
      finishDate: '2020-02-15',
      isImportant: true,
      isDone: true,
      edit: false
    }]
  }

  deleteTask = (id) => {
    console.log('method delete invoked from app, id: ' + id);
    let listToEdit = this.state.tasks;
    const idToDelete = listToEdit.findIndex(task => task.id === id);
    listToEdit.splice(idToDelete, 1)
    this.setState({
      tasks: listToEdit
    })
  }

  moveToDoneTask = (id) => {
    console.log('method move to done invoked from app, id: ' + id);
    let listToEdit = this.state.tasks;
    const idToEdit = listToEdit.findIndex(task => task.id === id);
    if(listToEdit[idToEdit].isDone ===true){
      listToEdit[idToEdit].isDone = false
    }else{
      listToEdit[idToEdit].isDone = true
    }
    this.setState({
      tasks : listToEdit
    })
  }

  changeTask = (id) => {
    console.log('method change task invoked from app, id: ' + id);
    let listToEdit = this.state.tasks;
    const idToEdit = listToEdit.findIndex(task => task.id === id);
    if(listToEdit[idToEdit].edit ===true){
      listToEdit[idToEdit].edit = false
    }else{
      listToEdit[idToEdit].edit = true
    }
    this.setState({
      tasks : listToEdit
    })
  }

  render() {
    return (
      <div className="App">
        <TaskList tasksProps={this.state.tasks} deleteProps={this.deleteTask}
          moveProps={this.moveToDoneTask} changeProps={this.changeTask} ></TaskList>
      </div>
    )
  }
}

export default App;
