import React from 'react'
import { Link } from 'react-router-dom'
import RegisterPage from './RegisterPage'
const LoginPage = () => {
  return (
    <div>  <section>
  
    <div className="container mt-5 ">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Đăng Nhập</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
                style={{ border: '1px solid rgb(158, 152, 152)' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                style={{ border: '1px solid rgb(158, 152, 152)' }}
              />
            </div>
            <div className="form-group">
              <p className="float-right">
                Chưa có tài khoản?{' '}
             
                <Link to= '/RegisterPage' className="text-danger" > Đăng kí ngay </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-danger ">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default LoginPage