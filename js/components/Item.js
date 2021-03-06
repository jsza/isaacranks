import React from 'react'
import P from 'prop-types'
import ItemIcon from './ItemIcon'

export default class Item extends React.Component {
  static propTypes =
  { index: P.number.isRequired
  , item: P.object.isRequired
  , norm: P.number.isRequired
  };

  render() {
    const {index, item} = this.props
    return (
      <tr>
        <td>{index + 1}</td>
        <td><ItemIcon isaacId={item.isaacId} href={item.wiki} title={item.name} /></td>
        <td><a href={item.wiki}>{item.name}</a></td>
        <td>"{item.description}"</td>
        <td>{item.votes}</td>
      </tr>
    )
  }
}
