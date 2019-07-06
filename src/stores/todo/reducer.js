export const initialState = {
  toDo: {
    items: [],
    count: 0,
  },
  inProgress: {
    items: [],
    count: 0,
  },
  completed: {
    items: [],
    count: 0,
  },
}

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      const newItems = [...state.toDo.items, action.payload]
      return {
        ...state,
        ...{
          toDo: { items: newItems, count: state.toDo.count + 1 },
        },
      }

    case 'DELETE_TO_DO':
      const currentItems = [...state.toDo.items]
      if (action.payload > -1) {
        currentItems.splice(action.payload, 1)
        return {
          ...state,
          ...{
            toDo: { items: currentItems, count: state.toDo.count - 1 },
          },
        }
      }
      return state

    default:
      return state
  }
}

export default ToDoReducer
