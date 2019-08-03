import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Tên Sinh Viên" />
        <div className="input-group-append">
          <span className="input-group-text">Search</span>
        </div>
      </div>
    )
  }
}
