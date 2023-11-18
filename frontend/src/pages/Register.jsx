import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()

  const handleSubmit = (e) => {
    e.prevenDefaut()
  }
  return (
     
   <section>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-5 text-center">Đăng Ký</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên đăng ký:</label>
              <input
                type="text"
                className="form-control"
                placeholder=''
                id="username"
                name="username"
                required
                style={{ border: '1px solid rgb(158, 152, 152)' }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                style={{ border: '1px solid rgb(158, 152, 152)' }}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
                     <p className="float-right">
      
             
                <Link to= '/LoginPage' className="text-danger" > Đăng Nhập </Link>
              </p>
            </div>
            
      
            <button type="submit" className="btn btn-danger">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RegisterPage;