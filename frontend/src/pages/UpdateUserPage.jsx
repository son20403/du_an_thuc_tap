import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { detailUser, updateProfile } from "../api/connect";
import { toast } from "react-toastify";

const UpdateUserPage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const [infoUser, setInfoUser] = useState([]);
  const id = infoUser?.id
  async function getInfoUser(id) {
    const data = await detailUser({ id })
    if (data) {
      setInfo(data?.data)
    }
  }
  useEffect(() => {
    getInfoUser(id)
  }, [id]);
  useEffect(() => {
    setInfoUser(JSON.parse(localStorage.getItem('user')))
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name || info?.name);
      formData.append('image', image);
      formData.append('id', id);
      const response = await updateProfile(formData)
      if (response && response?.status) {
        toast.success('Cập nhật tài khoản thành công')
        localStorage.setItem('user', JSON.stringify(response?.data))
        navigate('/')
      } else {
        toast.error('Không được để trống')
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-5 text-center">Cập nhật thông tin tài khoản</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label >Họ và tên:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="username"
                  name="username"
                  defaultValue={info?.name}
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setName(e.target.value || info?.name)}
                />
              </div>
              <div className="form-group">
                <label >Hình ảnh:</label>
                <input
                  type="file"
                  className="form-control"
                  placeholder=""
                  id="image"
                  name="image"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="btn btn-danger">
                  Cập nhật
                </button>
                <Link to={'/update-password'}>Đổi mật khẩu</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateUserPage;
