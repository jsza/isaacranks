import React from 'react'
import P from 'prop-types'
import IP from 'react-immutable-proptypes'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {Row, Fade, Col} from 'react-bootstrap'
import VotingPanel from './VotingPanel'
import VotingItemPanel from './VotingItemPanel'

export default class VotingBooth extends React.Component {
  static propTypes =
  { onReroll: P.func.isRequired
  , left: IP.map
  , right: IP.map
  };

  render() {
    const {left, right, onReroll} = this.props
    return (
      <div>
        <Row>
          <TransitionGroup key={left.get('ballot')} component="div" className="col-md-4">
            <CSSTransition classNames="voting"
                           timeout={150}
                           exit={false}
                           appear={true}
                           in={true}>
                <VotingItemPanel ballot={left}
                                 hotkeyName="Left"
                                 hotkeyIcon="caret-square-o-left" />
            </CSSTransition>
          </TransitionGroup>
          <Col md={4}>
            <VotingPanel bsStyle="info"
                         title="?"
                         label="Reroll!"
                         onVote={onReroll}
                         hotkeyName="Up"
                         hotkeyIcon="caret-square-o-up">
              I don't know / can't decide
            </VotingPanel>
          </Col>
          <TransitionGroup key={right.get('ballot')} component="div" className="col-md-4">
            <CSSTransition classNames="voting"
                           timeout={150}
                           exit={false}
                           appear={true}
                           in={true}>
              <VotingItemPanel ballot={right}
                               hotkeyName="Right"
                               hotkeyIcon="caret-square-o-right" />
            </CSSTransition>
          </TransitionGroup>
        </Row>
      </div>
      )
  }
}
