import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UpdateUserPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phonenumber, setPhonenumber] = useState();

  const handleSubmit = async (e) => {
    e.prevenDefaut();

    try {
      const reponse = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phonenumber }),
      });
      if (reponse.ok) {
        console.log("Successfully");
      } else {
        console.log("Error");
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
                <label >Tên đăng nhập:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="username"
                  name="username"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
               
              </div>
              <div className="form-group">
                <label >Số điện thoại:</label>
                <input
                  type="phonenumber"
                  className="form-control"
                  id="phonenumber"
                  name="phonenumber"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setPassword(e.target.value)}
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

export default UpdateUserPage;
