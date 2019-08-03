import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      diemToan: 0,
      diemLy: 0,
      diemHoa: 0,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary my-4"
          data-toggle="modal"
          data-target="#myModal">
          Thêm Sinh Viên
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Thêm Sinh Viên</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label >Mã sinh viên:</label>
                    <input type="text" name="maSinhVien" className="form-control" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label >Tên sinh viên:</label>
                    <input type="text" name="tenSinhVien" className="form-control" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label >Email:</label>
                    <input type="email" name="email" className="form-control" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label >Điểm Toán:</label>
                    <input type="number" name="diemToan" className="form-control" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label >Điểm Lý:</label>
                    <input type="number" name="diemLy" className="form-control" onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <label >Điểm Hoá:</label>
                    <input type="number" name="diemHoa" className="form-control" onChange={this.onChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Thêm Sinh Viên</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
