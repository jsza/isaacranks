import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

@connect(state => ({routerState: state.router}))
export default class App extends React.Component {
  static propTypes =
  { children: PropTypes.node
  };

  render() {
    return (
      <div>
        <Navbar brand={<a href="/">Isaac Ranks</a>} toggleNavKey={0} inverse fixedTop>
          <Nav navbar eventKey={0}>
            <LinkContainer to="/afterbirth/vote">
              <NavItem>Vote (Afterbirth)</NavItem>
            </LinkContainer>
            <LinkContainer to="/afterbirth/ranks">
              <NavItem>Ranks (Afterbirth)</NavItem>
            </LinkContainer>
            <LinkContainer to="/rebirth/vote">
              <NavItem>Vote (Rebirth)</NavItem>
            </LinkContainer>
            <LinkContainer to="/rebirth/ranks">
              <NavItem>Ranks (Rebirth)</NavItem>
            </LinkContainer>
            <LinkContainer to="/donate">
              <NavItem>Donate</NavItem>
            </LinkContainer>
            <LinkContainer to="/changes">
              <NavItem>News</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
          <footer>
            Website © 2014-2015 <a href="mailto:mithrandi@mithrandi.net">Tristan Seligmann</a> — I do not hold the copyright to any content from <a href="http://bindingofisaac.com/">The Binding of Isaac: Rebirth</a> or The Binding of Isaac: Afterbirth — Special thanks to <a href="https://www.reddit.com/r/bindingofisaac/">/r/bindingofisaac</a> and <a href="http://platinumgod.co.uk/">platinumgod.co.uk</a> — Come hang out in <a href="https://www.reddit.com/r/isaacranks">/r/isaacranks!</a>
          </footer>
        </div>
      </div>
      )
  }
}