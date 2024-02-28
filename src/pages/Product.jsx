import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import CourseService from "../services/CourseService";


const Product = () => {
  const [course, setCourse] = useState ([]);

  const fetchCourse = () => {
    CourseService.getAll()
      .then((res)=>{
        console.log(res.data.data)
        setCourse(res.data.data)
      })
      .catch((e)=>{
        console.log(e);
      });
  }

  useEffect(()=>{
    fetchCourse()
  },[]);

  return (
    <MainLayout>
      <h1 className="mt-3">Course</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Product
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {
          course.map((menu)=>(
            <CourseCard menu={menu}/>
            
            
          ))
        }
      </div>
    </MainLayout>
  );
};

const CourseCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <img src="./images/logo.png"
   alt="" style={{ width: "130px", height: "130px" }}/>
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat, saepe!
              </p>
              <h5>${props.menu.price}</h5>
              <h6>{props.menu.category}</h6>
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "}
              <NavLink
                to={"/product/edit/" + props.menu._id}
                className="btn btn-warning"
              >
                Edit
              </NavLink>{" "}
              <NavLink
                to={"/product/delete/" + props.menu._id}
                className="btn btn-danger"
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;