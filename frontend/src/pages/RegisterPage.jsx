import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", fullName);
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Registration successful
      setSuccessMessage(response.data.message);

      // Clear form fields
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle registration failure
      setErrorMessage("There was an error during registration.");

      // Log detailed error to console
      console.error("Error during registration:", error);
      
      // If available, log the server response
      if (error.response) {
        console.error('Server Response:', error.response.data);
      }
    }
  };
    
  return (
    <section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="mb-5 text-center">Đăng Ký</h2>
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
                <label>Tên đăng ký:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  id="username"
                  name="username"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
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
                <label>Mật khẩu:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  style={{ border: "1px solid rgb(158, 152, 152)" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="float-right">
                  <Link to="/Login" className="text-danger">
                    Đăng Nhập
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
