import taskReducer, { FILTRED_TYPES } from "./task-reducer";

// let getInitialTasks = () => {
//   let savedTodos = localStorage.getItem('myTodos');
//   if (savedTodos) {
//     return JSON.parse(savedTodos);
//   } else {
//     return [];
//   }
// }

let store = {
  _state: { //getInitialTasks()
    tasks: [],
    newTask: '',
    displayedTodos: [],
    currentFilter: FILTRED_TYPES.ALL
  },
  _callSubscriber() {
    console.log('State Changed')
  },

  getState() {
    return this._state;
  },

  subscire(observer) {
    this._callSubscriber = (newState) => {
      observer(newState);
      // localStorage.setItem('myTodos', JSON.stringify(newState.tasks));
    };
  },

  dispatch(action) {
    this._state = taskReducer(this._state, action);
    this._callSubscriber(this._state);
  }
}



export default store;
window.store = store;