import React from 'react';
import './App.css';
import Todo from './Components/InputBlock/Todo';

const App = (props) => {
  return (
    <div className='app'>
      <Todo state={props.state} dispatch={props.dispatch} />
    </div>
  )
}

export default App;
