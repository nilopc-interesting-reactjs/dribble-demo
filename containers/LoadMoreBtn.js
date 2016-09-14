import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadShots } from '../actions/shots'

const mapStateToProps = (state) => {
  const { isFetching } = state.pagination.shots
  return { isFetching }
}

class LoadMoreBtn extends Component {
  render() {
    const { loadShots, isFetching } = this.props

    return (
      <div className="load-more">
        <button
          onClick={loadShots}
          className={isFetching ? 'hide' : ''}
        >
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, { loadShots })(LoadMoreBtn)
