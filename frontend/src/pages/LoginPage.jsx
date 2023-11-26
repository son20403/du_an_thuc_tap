import React , {useState}from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  // Trạng thái cho thông tin đăng nhập và đăng ký
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
    const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây, ví dụ: gọi API đăng nhập
    console.log('Đăng nhập', loginData);
  };
  return (
    <div>  <section>
  
    <div className="container mt-5 ">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Đăng Nhập</h2>
          <form onSubmit={ handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
              
                style={{ border: '1px solid rgb(158, 152, 152)' }}
                value={loginData.username} onChange={handleLoginChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginData.password} onChange={handleLoginChange} 
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