import React from 'react'
import P from 'prop-types'
import {Col, Card, Button, OverlayTrigger, Tooltip} from 'react-bootstrap'

const HotkeyOverlay = (props) => {
  if (props.icon) {
    const iconClass = `fa fa-lg fa-${props.icon}`
    const overlay = (
      <Tooltip id="keyboard-binding">
        Keyboard binding: <i className={iconClass} aria-hidden={true} />
        <span className="sr-only">{props.name}</span>
      </Tooltip>)
    return (
      <OverlayTrigger placement="bottom" overlay={overlay}>
        {props.children}
      </OverlayTrigger>
      )
  } else {
    return props.children
  }
}

export default class VotingPanel extends React.Component {
  static propTypes =
  { 'href': P.string
  , 'title': P.string.isRequired
  , 'bsStyle': P.string
  , 'label': P.string
  , 'onVote': P.func
  , 'children': P.node
  , 'hotkeyName': P.string
  , 'hotkeyIcon': P.string
  };

  render() {
    const {href, title, bsStyle, label, onVote, children, hotkeyName, hotkeyIcon, ...props} = this.props
    const link = href
               ? (<a className="text-reset" href={href}>{title}</a>) : title
    const header = (link)
    const footer = onVote ? (
      <HotkeyOverlay icon={hotkeyIcon} name={hotkeyName}>
        <Button variant="dark" onClick={onVote}>{label}</Button>
      </HotkeyOverlay>
      ) : null
    return (
      <Card className="text-center mb-3"
            border="primary">
        <Card.Header className="bg-gradient-primary" as="h5">
          {header}
        </Card.Header>
        <Card.Body>
          <p>{children}</p>
        </Card.Body>
        <Card.Footer>
          {footer}
        </Card.Footer>
      </Card>
      )
  }
}
