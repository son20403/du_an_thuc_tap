import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({ username: '',email:'', password: '' });
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây, ví dụ: gọi API đăng ký
    console.log('Đăng ký', registerData);
  };
  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-5 text-center">Đăng Ký</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label >Tên đăng ký:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="username"
                  name="username"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                value={registerData.username} onChange={handleRegisterChange}
                />
              </div>
              <div className="form-group">
                <label >Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  value={registerData.email}
                  onChange={handleRegisterChange}
                />
              </div>
              <div className="form-group">
                <label >Mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  value={registerData.password} onChange={handleRegisterChange}
                />
                <p className="float-right">
                  <Link to="/LoginPage" className="text-danger">
                    {" "}
                    Đăng Nhập{" "}
                  </Link>
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
  );
};

export default RegisterPage;
