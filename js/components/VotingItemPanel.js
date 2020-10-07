import React from 'react'
import P from 'prop-types'
import IP from 'react-immutable-proptypes'
import VotingPanel from './VotingPanel'
import ItemIcon from './ItemIcon'

export default class VotingItemPanel extends React.Component {
  static propTypes =
  { 'ballot': IP.map
  , 'hotkeyName': P.string
  , 'hotkeyIcon': P.string
  };

  render() {
    const {ballot, hotkeyIcon, hotkeyName, ...props} = this.props
    if (!ballot.get('ballot'))
      return (
        <VotingPanel bsStyle="primary" title="...">
          <i className="fa fa-refresh fa-spin" />
        </VotingPanel>
        )
    return (
      <VotingPanel bsStyle="primary"
                   href={ballot.get('wiki')}
                   title={ballot.get('name')}
                   label="Choose"
                   onVote={ballot.get('onVote')}
                   hotkeyName={hotkeyName}
                   hotkeyIcon={hotkeyIcon}
                   {...props}>
        <ItemIcon isaacId={ballot.get('isaacId')} href={ballot.get('wiki')} title={ballot.get('name')} />
        "{ballot.get('description')}"
      </VotingPanel>
      )
  }
}
