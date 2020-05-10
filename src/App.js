import React from 'react';
import './App.css';
import Header from './components/Header'
import Task from './components/Task'
import AddButton from './components/AddButton'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
                  items: [],
                  status:[]
                  };
    }  
  
  addNewItem = (event) => {
    event.preventDefault();
    var newTask = {
      id: this.state.items.length,
      title: '',
      due:'',
      details:''
    };
    newTask.title = prompt('Enter title:');
    newTask.due = prompt('Enter due:');
    newTask.details = prompt('Enter details: ');
    this.state.items.push(newTask);
    this.state.status.push(0)
    const newArr = this.state.items;
    const statusArr = this.state.status;
    console.log(newArr);
    this.setState(
      {
        items: newArr,
        status: statusArr
      }
    );
    console.log(this.state.items);
  }

  
  handleComplete = (id) => {
    console.log(id);
    const statusArr = this.state.status.slice();
    statusArr[id] = 1;
    const itemsArr = this.state.items;
    this.setState({
      items: itemsArr,
      status: statusArr
    });
  }

  renderTask = (task) => {
    if(this.state.status[task.id] === 0) {
      return (<Task key={task.id} title={task.title} due={task.due} details={task.details} onClick={() => this.handleComplete(task.id)} />);
    }
  }


  render() {
    const {items} = this.state;
    return (
    <div>
      {console.log('In return')}
      <div>
        <Header />
      </div>
      <div className='App-content'>
        {items.map(this.renderTask)}
      </div>
      <div className='App-add'>
        <AddButton onClick={this.addNewItem} />
      </div>
    </div>
    );
  }
}

export default App;
