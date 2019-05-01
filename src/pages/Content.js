import React from 'react'

import ShoppingList from './ShoppingList'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ShoppingList name="张三"/>
    )
  }
}

export default Content