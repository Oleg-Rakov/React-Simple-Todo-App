import React from 'react';
import TodoContainer from '../InputBlock/Todo';
import s from './Counter.module.css';




let Counter = (props) => {
  let count = 0;

  props.state.tasks.forEach(task => {
    if (!task.isChecked) {
      count++;
    }
  });

  return (
    <span className={s.counter}>Left to complete: {count}</span>
  )
}

export default Counter;

