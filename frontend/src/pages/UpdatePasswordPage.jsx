import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword } from "../api/connect";
import { toast } from "react-toastify";

const UpdatePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [infoUser, setInfoUser] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rePassword !== newPassword) {
      setErrorMessage('Nhập lại đúng mật khẩu!')
      return;
    }
    const id = infoUser?.id
    console.log("🚀 ~ file: UpdatePasswordPage.jsx:19 ~ handleSubmit ~ id:", id)
    const email = infoUser?.email
    const data = { id, password, newPassword, email }
    try {
      const response = await updatePassword(data)
      console.log("🚀 ~ file: UpdatePasswordPage.jsx:22 ~ handleSubmit ~ response:", response)
      if (response && response?.status) {
        toast.success('Cập nhật thành công')
        navigate('/')
      } else {
        toast.error('Cập nhật thất bại')
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    setInfoUser(JSON.parse(localStorage.getItem('user')))
  }, []);
  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-5 text-center">Đổi mật khẩu</h2>
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="form-group">
                <label >Mật khẩu hiện tại:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>
              <div className="form-group">
                <label >Mật khẩu mới:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

              </div>
              <div className="form-group">
                <label >Nhập lại mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setRePassword(e.target.value)}
                />

              </div>
              <button type="submit" className="btn btn-danger">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePasswordPage;
