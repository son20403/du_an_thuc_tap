import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../api/connect';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    if (!email || !password) {
      setErrorMessage('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const info = { email, password }
    try {
      const data = await login(info);
      const dataCus = await data.data;
      console.log("🚀 ~ file: LoginPage.jsx:25 ~ handleSubmit ~ dataCus:", dataCus)
      if (dataCus) {
        toast.success('Đăng nhập thành công!');
        localStorage.setItem('user', JSON.stringify(dataCus));
        navigate('/')

        setIsLoggedIn(true);

      } else {
        setErrorMessage('Đăng nhập thất bại. Kiểm tra thông tin đăng nhập.');
      }
    } catch (error) {
      // Handle login failure
      setErrorMessage('Đăng nhập thất bại');
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
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}

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
                <div className='flex items-center justify-between'>
                  <button type="submit" className="btn btn-danger " onClick={handleSubmit}>
                    Đăng Nhập
                  </button>
                  <div className='flex flex-col items-end '>
                    <p className=" p-0 m-0">
                      Chưa có tài khoản?{' '}
                      <Link to="/register" className="text-danger">
                        Đăng kí ngay
                      </Link>
                    </p>
                    <p className="">
                      <Link to="/forgot-password" className="text-danger">
                        Quên mật khẩu
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
