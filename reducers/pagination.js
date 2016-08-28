import merge from 'lodash/merge'
import union from 'lodash/union'
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions'
import * as categoryActions from '../actions/category'

const pagination = (state = {
  categories: {
    sort: 'all', list: 'all', timeframe: 'all'
  },
  page: 1,
  ids: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case ActionTypes.SHOTS_REQUEST:
      return merge({}, state, { isFetching: true })
    case ActionTypes.SHOTS_SUCCESS:
      return merge({}, state, {
        ids: union(state.ids, action.response.result),
        page: state.page + 1,
        isFetching: false
      })
    case categoryActions.UPDATE_CATEGORY:
      const { categories } = state
      const { type, key } = action.category
      const newCate = merge({}, categories, { [type]: key })
      return Object.assign({}, state, {
        categories: newCate,
        ids: [],
        page: 1,
        isFetching: false
      })
    default:
      return state
  }
}

export default pagination