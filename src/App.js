import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Task from './components/Task'
import AddButton from './components/AddButton'

function renderTask(task) {
  return (<Task title={task.title} due={task.due} details={task.details} />);
}
function App() {
  // const items = [{title:'Learn React',due:'Today',details:'Learn React today and complete to-do front end'},
  //                 {title:'Learn React',due:'Today',details:'Learn React today and complete to-do front end'}]
  let [items,changeItems] = useState([{title:'Learn React',due:'Today',details:'Learn React today and complete to-do front end'},
                                     {title:'Learn React',due:'Today',details:'Learn React today and complete to-do front end'}])
  function addNewItem() {
    let newItem = {
      title: ' ',
      due: ' ',
      details: ' '
    };
    newItem.title = prompt('Enter title:');
    newItem.due = prompt('Enter due:');
    newItem.details = prompt('Enter details: ');
    console.log(newItem);
    changeItems(items.push(newItem));
    console.log(items);
  }


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='App-content'>
        {items.map(renderTask)}

      </div>
      <div className='App-add'>
        <AddButton onClick = {addNewItem}/>
      </div>
    </div>
  );
}

export default App;
