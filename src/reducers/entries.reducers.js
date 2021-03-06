/* eslint-disable import/no-anonymous-default-export */
const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch(action.type) {
    case 'ADD_ENTRY':
      newEntries = state.concat(action.payload)
      return newEntries;
    case 'REMOVE_ENTRY':
      newEntries = state.filter(entry => entry.id !== action.payload.id)
       return newEntries;
    case 'UPDATE_ENTRY':
      newEntries = [...state]
      const index = newEntries.findIndex(entry => entry.id === action.payload.id);
      newEntries[index] = {...action.payload.entry};
      return newEntries;
    default: 
      return state;
  }
}

export default reducer;

var initialEntries = [
  {

    id: 1,
    description: 'Expense',
    value: 10.00,
    isExpense: true
  },
  {
    id: 2,
    description: 'Rent',
    value: 100.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'income',
    value: 1000.00,
    isExpense: false
  },
  {
    id: 4,
    description: 'income',
    value: 10.00,
    isExpense: false
  },
  {
    id: 5,
    description: 'income',
    value: 10.00,
    isExpense: false
  },

]