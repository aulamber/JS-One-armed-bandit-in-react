import React from 'react';
import _ from 'lodash'

const RandomFruit = ({index, fruits}) => {
    
    const fruitLoaded = _.find(fruits, (item) => {
      return item.key === index
    })

    if (!fruitLoaded) return <i className='fa fa-spinner fa-pulse fa-5x' style={{margin: '5px'}}></i>
    else {
      const iconStyle = `fa fa-${fruitLoaded.icon} fa-5x`
      return <i className={iconStyle} style={{color:fruitLoaded.color, margin:'5px'}}></i>
    }
}

const FruitList = ({fruits}) => {
  
  const list = [{key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}]
  const displayList = _.map(list, (item) => {
    return (
      <RandomFruit key={item.key} index={item.key} fruits={fruits} />
    )
  })

  return (
    <div>
      {displayList}
    </div>
  )
}

export default FruitList
    //Load fruit #{index}
    //else return <div>Fruit= {fruitLoaded.icon}</div>
