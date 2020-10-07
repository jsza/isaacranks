import React from 'react'
import P from 'prop-types'
import IP from 'react-immutable-proptypes'
import {Button} from 'react-bootstrap'

export default class FilterButton extends React.Component {
  static propTypes =
  { name: P.string.isRequired
  , activeFilters: IP.setOf(P.string).isRequired
  , label: P.string.isRequired
  , onToggle: P.func.isRequired
  };

  render() {
    const {name, activeFilters, label, onToggle} = this.props
    const active = activeFilters.has(name) ? true : false
    return (
      <Button className="mr-1"
              size="sm"
              variant="outline-secondary"
              active={active}
              onClick={() => onToggle(name)}>
        <span style={{color: active ? 'inherit' : 'rgb(200, 200, 200)'}}>{label}</span>
      </Button>
    )
  }
}
