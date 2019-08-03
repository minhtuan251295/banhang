import React, { Component } from 'react'
import Modal from "./Modal";
import Search from "./Search";
import StudentList from "./StudentList";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: []
    }
  }
  render() {
    return (
      <div className="container" >
        <h1 className="text-center">QUẢN LÝ SINH VIÊN</h1>
        <Modal />
        <Search />
        <StudentList />
      </div>
    )
  }
}
