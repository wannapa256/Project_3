import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import UserService from "../services/CourseService";
import MainLayout from "../layouts/MainLayout";
import swal from "sweetalert";

const Register = () => {
    const navigate = useNavigate();
  let [register, setRegister] = useState({});

  const saveRegister = (e) => {
    e.preventDefault();
    if (UserService && typeof UserService.register === "function") {
      console.log(register)
      UserService.register(register)
        .then((res) => {
          swal({
            icon: "success",
            text: "Register complete",
            title: "Result",
          });
          navigate("/login");
        })
        .catch((e) => {
          swal({
            icon: "error",
            text: "Register failed",
            title: "Result",
          });
          console.log(e);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };
  return (
    <MainLayout>
      <h1 className="mt-3">Register</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveRegister}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                First Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="first_name"
                  placeholder="Please enter your first name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Last Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  id="last_name"
                  placeholder="Please enter your last name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Phone Number
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Please enter your phone number"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                E-gmil
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="xxx@yyy.com"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Password
              </label>
              <div className="col-8">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Please set a password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
