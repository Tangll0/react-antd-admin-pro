import React from 'react'

const Picture = (props) => {
  return (
      <div>
        <img src={props.src}/>
        {props.children}
      </div>
  )
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const picture = {
      src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
    };
    return (
        <div className="shopping-lists">
          <Picture src={picture.src}>
            {/*// 这里放置的内容就是 props.children*/}
            <h1>shopping list for {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </Picture>

        </div>
    )
  }
}

export default ShoppingList