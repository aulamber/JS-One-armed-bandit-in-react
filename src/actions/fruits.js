import moment from 'moment'

export const FRUIT_LOADED = 'FRUIT_LOADED'

const fruitsOptions = {
  colors: [
    '#F34235',
    '#E81D62',
    '#9B26AF',
    '#6639B6',
    '#3E50B4',
    '#2095F2',
    '#02A8F3',
    '#00BBD3',
    '#009587',
    '#4BAE4F',
    '#FE5621',
    '#785447',
    '#9D9D9D',
    '#5F7C8A'
  ],
  icons: [
    'ambulance',
    'automobile',
    'bicycle',
    'bus',
    'cab',
    'car',
    'fighter-jet',
    'motorcycle',
    'plane',
    'rocket',
    'ship',
    'space-shuttle',
    'subway',
    'train',
    'truck'
  ],
}

export function fruitLoaded(fruit) {
  return {
    type: FRUIT_LOADED,
    fruit 
  }
}

let t0, t1

const loadFruit = () => {
  return new Promise((resolve, reject) => {
    t0 = moment()
    setTimeout(function() {
      t1 = moment()
      console.log('Temps pour requete = ', t1 - t0)
      const colorId = Math.floor((Math.random() * 14))
      const iconId = Math.floor((Math.random() * 15))
      resolve({
        color: fruitsOptions.colors[colorId],
        icon: fruitsOptions.icons[iconId],
      })
    }, Math.floor((Math.random() * 6000) + 1000))
  })
}

export function loadFruits() {
  return (dispatch, getState) => {
    const array = [{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}] 
    _.map(array, (item) => {
      loadFruit().then((fruit) => {
        fruit.key = item.key
        //console.log('fruit dans action = ', fruit)
        dispatch(fruitLoaded(fruit))
      })
    })
  }
}
