import React from 'react';
import { addElementActionCreator, removeListItemActionCreator, setClassCheckedActionCreator, updateElementActionCreator, setAllCompletedAC, disableCompletedAC, hideCompletedAC, returnHideCompleted, activeTodosAC, returnHide, setActiveFiltr, FILTRED_TYPES } from '../../redux/task-reducer';
import Counter from '../listBlock/Counter';
import ListItem from './ListItem';
import s from './Todo.module.css';

let Todo = (props) => {

  let elementFromInput = React.createRef();

  let addElementOnButtonClick = () => {
    if (props.state.newTask.length > 0) {
      props.dispatch(addElementActionCreator());
    } else {
      alert('Enter a New Task!')
    }
  }

  let updateElement = () => {
    let text = elementFromInput.current.value;
    props.dispatch(updateElementActionCreator(text))
  }

  let removeListItem = (id) => {
    props.dispatch(removeListItemActionCreator(id))
  }

  let setClassChecked = (id) => {
    props.dispatch(setClassCheckedActionCreator(id))
  }

  let onAllCompleted = () => {
    let arrayOfCompleted = props.state.tasks.every(task => {
      if (task.isChecked === true) {
        return task
      }
    })

    if (arrayOfCompleted) {
      props.dispatch(disableCompletedAC())
    } else {
      props.dispatch(setAllCompletedAC())
    }
  }

  let onSetActiveFilter = (filterName) => {
    props.dispatch(setActiveFiltr(filterName))
  }

  console.log(props.state.currentFilter)
  let filtredTodos;
  switch (props.state.currentFilter) {
    case FILTRED_TYPES.ALL:
      filtredTodos = props.state.tasks;
      break
    case FILTRED_TYPES.COMPLETED:
      filtredTodos = props.state.tasks.filter(task => {
        if (task.isChecked) {
          return true;
        } else {
          return false
        }
      })
      break
    case FILTRED_TYPES.UNMARKED:
      filtredTodos = props.state.tasks.filter(task => {
        if (!task.isChecked) {
          return true;
        } else {
          return false
        }
      })
      break
  }

  return (
    <div>
      <div className={s.inputBlock}>
        <div className={s.title}>ToDo List</div>
        <input
          value={props.state.newTask}
          onChange={updateElement}
          ref={elementFromInput}
          type="text"
          placeholder='Enter your task'
        />
        <button onClick={addElementOnButtonClick}>Click Me!</button>
      </div>
      <div className={s.listBlock}>
        <ul>
          {filtredTodos.map(task => (
            // task.isHeaden
            //   ? null :
            <ListItem
              isHeaden={task.isHeaden}
              isChecked={task.isChecked}
              setClassChecked={setClassChecked}
              removeListItem={removeListItem}
              task={task.task}
              key={task.id}
              id={task.id}
            />
          ))}
        </ul>
        <div className={s.optionBlock}>

          <Counter state={props.state} />
          <button onClick={onAllCompleted} className={s.Btn}>Complete All</button>
          <button onClick={() => onSetActiveFilter(FILTRED_TYPES.UNMARKED)} className={s.Btn}>Hide Completed</button>
          <button onClick={() => onSetActiveFilter(FILTRED_TYPES.COMPLETED)} className={s.Btn}>Hide Unmarked</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;