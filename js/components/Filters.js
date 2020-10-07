import React from 'react'
import P from 'prop-types'
import IP from 'react-immutable-proptypes'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import FilterButton from './FilterButton'
import allFilters from '../constants/filters'


const FilterGroup = (props) => {
  return (
    <ButtonToolbar className="mb-1">
      {props.allFilters.map(([name, label]) =>
         <FilterButton name={name}
                       key={name}
                       label={label}
                       activeFilters={props.activeFilters}
                       onToggle={props.onToggle} />)}
    </ButtonToolbar>
    )
}


export default class Filters extends React.Component {
  static propTypes =
  { filters: IP.map.isRequired
  , onToggle: P.func.isRequired
  , onAll: P.func.isRequired
  , onNone: P.func.isRequired
  };

  render() {
    const {filters, onToggle, onAll, onNone} = this.props
    const filterGroups = allFilters.entrySeq().map(
      ([ft, af]) =>
      <FilterGroup key={ft.toString()}
                   allFilters={af}
                   activeFilters={filters.get(ft)}
                   onToggle={(name) => onToggle(ft, name)} />).toArray()
    return (
      <div className="mb-2">
        {filterGroups}
        <ButtonToolbar>
          <Button className="mr-1" variant="primary" size="sm" onClick={onAll}>
            All
          </Button>
          <Button variant="primary" size="sm" onClick={onNone}>
            None
          </Button>
        </ButtonToolbar>
      </div>
    )
  }
}
