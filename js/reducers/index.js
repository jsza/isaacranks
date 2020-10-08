import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import ranks from './ranks'
import voting from './voting'
import changes from './changes'

export default history => combineReducers(
  { router: connectRouter(history)
  , ranks
  , voting
  , changes
  })
