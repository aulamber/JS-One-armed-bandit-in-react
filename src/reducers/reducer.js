import {FRUIT_LOADED} from '../actions/fruits'

const initialState = {
  fruits: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FRUIT_LOADED':
      return {
        ...state,
        fruits: [...state.fruits, action.fruit]
      }
    default:
      return state
  }
}
