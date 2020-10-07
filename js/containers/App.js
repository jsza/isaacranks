import React from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import Vote from './Vote'
import Ranks from './Ranks'
import Donate from './Donate'
import Changes from './Changes'


@connect(state => ({routerState: state.router}))
class App extends React.Component {
    static propTypes =
        { children: PropTypes.node
        };

    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                  <Navbar.Brand href="/">Isaac Ranks</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse>
                    <Nav>
                      <NavDropdown title="Vote" id="nav-dropdown-vote">
                        <LinkContainer to="/afterbirthplus/vote"><NavDropdown.Item>Afterbirth+</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/afterbirth/vote"><NavDropdown.Item>Afterbirth</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/rebirth/vote"><NavDropdown.Item>Rebirth</NavDropdown.Item></LinkContainer>
                      </NavDropdown>
                      <NavDropdown title="Ranks" id="nav-dropdown-ranks">
                        <LinkContainer to="/afterbirthplus/ranks"><NavDropdown.Item>Afterbirth+</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/afterbirth/ranks"><NavDropdown.Item>Afterbirth</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/rebirth/ranks"><NavDropdown.Item>Rebirth</NavDropdown.Item></LinkContainer>
                      </NavDropdown>
                      <LinkContainer to="/donate"><Nav.Link>Donate</Nav.Link></LinkContainer>
                      <LinkContainer to="/changes"><Nav.Link>News</Nav.Link></LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <div className="container pt-4">
                <Route path="/:version/vote" component={Vote} />
                <Route path="/:version/ranks" component={Ranks} />
                <Route path="/donate" component={Donate} />
                <Route path="/changes" component={Changes} />
                <footer>
                  Website © 2014 <a href="mailto:mithrandi@mithrandi.net">Tristan Seligmann</a> — I do not hold the copyright to any content from <a href="http://bindingofisaac.com/">The Binding of Isaac</a> — Special thanks to <a href="https://www.reddit.com/r/bindingofisaac/">/r/bindingofisaac</a> and <a href="http://platinumgod.co.uk/">platinumgod.co.uk</a> — Come hang out in <a href="https://www.reddit.com/r/isaacranks">/r/isaacranks</a>!
                </footer>
              </div>
            </div>
        )
    }
}


export default App
