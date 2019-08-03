import React, { Component } from 'react';
import Student from "../Student";

export default class StudentList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Sinh Viên</th>
            <th>Tên Sinh Viên</th>
            <th>Email</th>
            <th>ĐTB</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Student />
          <Student />
          <Student />
        </tbody>
      </table>
    )
  }
}
