import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState(''); // Change from `username` to `email`
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful login
      console.log('Login successful:', response.data);

      // Redirect or perform other actions
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="mb-4 text-center">Đăng Nhập</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label> {/* Change label from 'Tên đăng nhập' to 'Email' */}
                  <input
                    type="text"
                    className="form-control"
                    id="email"  // Change from 'username' to 'email'
                    name="email"  // Change from 'username' to 'email'
                    required
                    style={{ border: '1px solid rgb(158, 152, 152)' }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Mật khẩu:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    style={{ border: '1px solid rgb(158, 152, 152)' }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <p className="float-right">
                    Chưa có tài khoản?{' '}
                    <Link to="/register" className="text-danger">
                      Đăng kí ngay
                    </Link>
                  </p>
                </div>
                <button type="submit" className="btn btn-danger " onClick={handleSubmit}>
                  Đăng Nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
