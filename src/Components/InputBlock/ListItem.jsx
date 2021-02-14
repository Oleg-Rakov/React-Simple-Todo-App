import React from 'react';
import store from '../../redux/store';
import s from './ListItem.module.css';

let ListItem = (props) => {

  let { id, task, removeListItem, setClassChecked, isChecked, isHeaden } = props; // Диструкция объектов, оператор Rest и Spread
  return (
    
    <div className={s.container} key={id}>
      <li className={isChecked ? s.checked : s.liItem}
        onClick={() => setClassChecked(id)}
        >{task}
      </li>
      <div
        onClick={() => removeListItem(id)}
        className={s.closeIcon}
      >
        X
      </div>
    </div>
  )
}





export default ListItem;