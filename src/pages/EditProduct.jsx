import React, { useState, useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import CourseService from "../services/CourseService";

const EditProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [course, setCourse] = useState({});

  const fetchCourse = (id) => {
    CourseService.get(id)
      .then((res) => {
        setCourse(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchCourse(id);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };
  const saveCourse = (e) => {
    e.preventDefault();
    console.log(course);
    CourseService.updateProduct(id,course)
      .then((res)=>{
        swal({
          icon: "success",
          text: "แก้ไขข้อมูลสำเร็จ",
          title: "ผลการทำงาน"
        });
        navigate("/product");
      })
      .catch((e)=>swal({
        icon: "error",
        text: "update failed",
        title: "Result"
      })
      );

  }
  return (
    <MainLayout>
      <h1 className="mt-3">Edit Product</h1>
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
                  value={course.name}
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
                  value={course.price}
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
                  value={course.category}
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

export default EditProduct;