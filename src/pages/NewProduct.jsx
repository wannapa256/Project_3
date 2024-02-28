import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import CourseService from "../services/CourseService";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const NewProduct = () => {
  let navigate = useNavigate();
  let [course,setCourse] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };
  const saveCourse = (e)=>{
    e.preventDefault();
    CourseService.create(course)
    .then((res)=>{
      swal({
        icon: "success",
        title: "เพิ่มคอร์สเรียนสำเร็จ",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/product");
    })
    .catch((e)=>swal({
      icon: "Error",
      text: "ลองใหม่อีกครั้ง",
      title: "Error"
    }));
  }
  return (
    <MainLayout>
      <h1 className="mt-3">New Product</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={saveCourse}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Price
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Category
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Category"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
export default NewProduct