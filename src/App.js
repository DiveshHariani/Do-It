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
                  status:[],
                  isLoaded: true
                  };
    }
  

  componentDidMount() {
    let i = 0;
    fetch('http://localhost:5000/tasks')
    .then( res => res.json() )
    .then( json => this.setState( {items:json.map( (ele) => {ele.id = i++; return ele}),status: Array(json.length).fill(0), isLoaded: true} ))
    .catch( err => console.log(err));
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
    fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body : JSON.stringify(newTask)
    }).then(console.log('POST complete')).catch( err => console.log(err) );
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

  
  handleComplete = (id,title) => {
    console.log(id);
    const statusArr = this.state.status.slice();
    statusArr[id] = 1;
    const itemsArr = this.state.items;
    fetch('http://localhost:5000/tasks/' + title,{
      method: 'DELETE'
    }).then('Completed').catch(err => console.log(err));
    this.setState({
      items: itemsArr,
      status: statusArr
    });
  }

  renderTask = (task) => {
    if(this.state.status[task.id] === 0) {
      return (<Task key={task.id} title={task.title} due={task.due} details={task.details} onClick={() => this.handleComplete(task.id,task.title)} />);
    }
  }


  render() {
    const {items, status, isLoaded} = this.state;
    console.log(items)
    if(!isLoaded)
    {
      return <h2>Loading...</h2>
    }
    return (
    <div>
      {console.log('In return')}
      {console.log(items)}
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
