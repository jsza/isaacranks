import React from 'react'
import P from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Jumbotron, Card, Col} from 'react-bootstrap'
import {Changes as ChangesRecord} from '../reducers/changes'
import * as ChangesActions from '../actions/Changes'
import ErrorAlert from '../components/ErrorAlert'

function mapStateToProps(state) {
  return {'changes': state.changes}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(ChangesActions, dispatch)}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Changes extends React.Component {
  static propTypes =
  { actions: P.objectOf(P.func).isRequired
  , changes: P.instanceOf(ChangesRecord).isRequired
  };

  componentDidMount() {
    this.props.actions.loadChanges()
  }

  render() {
    const {changes: {loading, error, changes}, actions} = this.props
    const header = (
      <Jumbotron>
        <h1>News / Changelog</h1>
        <p>See the latest changes to the site here.</p>
      </Jumbotron>
      )
    var content = null
    if (loading) {
      content = <div><i className="fa fa-refresh fa-spin" /></div>
    } else if (error) {
      content = <ErrorAlert title="Unable to load changelog:" error={error} onReset={actions.loadChanges} />
    } else if (changes) {
      const changelog = changes.map(entry =>
        <>
          <Col as="dt" md="2" className="text-right">
            {entry.get(0)}
          </Col>
          <Col as="dd" md="10">
            <ul>{entry.get(1).map(line => <li>{line}</li>)}</ul>
          </Col>
        </>)
      content = (
        <Card>
          <Card.Body>
            <dl className="row">
              {changelog}
            </dl>
          </Card.Body>
        </Card>
        )
    }
    return <div>{header}{content}</div>
  }
}
