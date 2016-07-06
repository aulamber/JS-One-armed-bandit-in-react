import {createSelector} from 'reselect'

const fruits = state => state.fruits

export const banditSelector = createSelector(fruits, (fruits) => {
  return {
    fruits,
  }
})
