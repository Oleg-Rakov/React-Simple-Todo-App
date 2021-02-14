const ADD_ELEMENT = 'ADD-ELEMENT';
const UPDATE_ELEMENT = 'UPDATE-ELEMENT';
const REMOVE_LIST_ITEM = 'REMOVE-LIST-ITEM';
const SET_CLASS_CHECKED = 'SET-CLASS-CHECKED';
const SET_ALL_COMPLETED = 'SET_ALL_COMPLETED';
const DISABLE_COMPLETED = 'DISABLE_COMPLETED';
const HIDE_COMPLETED = 'HIDE_COMPLETED';
const RETURN_HIDE_COMPLETED = 'RETURN_HIDE_COMPLETED';
const SET_ACTIVE_FILTR = 'SET_ACTIVE_FILTR'

export const FILTRED_TYPES = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  UNMARKED: 'UNMARKED'
}



let initialState = {
  tasks: [],
  newTask: '',
  displayedTodos: [],
  currentFilter: FILTRED_TYPES.ALL
}

let taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      let newElement = state.newTask;
      state.newTask = '';
      state.tasks.push({
        id: Date.now(), task: newElement, isChecked: false, isHeaden: false
      });
      // state.displayedTodos.push({
      //  task: newElement, isChecked: false
      // });
      return state;
    case UPDATE_ELEMENT:
      state.newTask = action.newText;
      return state;
    case REMOVE_LIST_ITEM:
      let filtred = state.tasks.filter(task => task.id !== action.id);
      state.tasks = filtred;
      return state;
    case SET_CLASS_CHECKED:
      let map = state.tasks.map(task => {
        if (task.id === action.id) {
          task.isChecked = !task.isChecked;
        }
        return task;
      })
      console.log(map)
      return state;
    case SET_ALL_COMPLETED:
      let completedArray = state.tasks.map(task => {
        task.isChecked = true;
        return task;
      })
      return {
        ...state,
        tasks: completedArray
      };
    case DISABLE_COMPLETED:
      let disabledArray = state.tasks.map(task => {
        task.isChecked = false;
        return task;
      })
      return {
        ...state,
        tasks: disabledArray
      };
    case HIDE_COMPLETED:
      state.tasks.map(task => {
        if (task.isChecked === true) {
          task.isHeaden = !task.isHeaden
        }
        return task
      })
      return state;
    case SET_ACTIVE_FILTR:
      if (state.currentFilter !== FILTRED_TYPES.ALL) {
        state.currentFilter = FILTRED_TYPES.ALL
      } else {
        state.currentFilter = action.filterName
      }
      return state;
    default:
      return state;
  }
}

export let addElementActionCreator = () => ({
  type: ADD_ELEMENT
})

export let updateElementActionCreator = (text) => ({
  type: UPDATE_ELEMENT,
  newText: text
})

export let removeListItemActionCreator = (id) => ({
  type: REMOVE_LIST_ITEM,
  id
})

export let setClassCheckedActionCreator = (id) => ({
  type: SET_CLASS_CHECKED,
  id
})

export let setAllCompletedAC = () => ({
  type: SET_ALL_COMPLETED,

})

export let disableCompletedAC = () => ({
  type: DISABLE_COMPLETED
})

export let hideCompletedAC = (id) => ({
  type: HIDE_COMPLETED,
  id
})

export let returnHide = () => ({
  type: RETURN_HIDE_COMPLETED
})

export let setActiveFiltr = (filterName) => ({
  type: SET_ACTIVE_FILTR,
  filterName
})



export default taskReducer;

// case HIDE_COMPLETED:
//   let hide = state.tasks.filter(task => task.isChecked !== true)
//   state.tasks = hide;
//   return state;