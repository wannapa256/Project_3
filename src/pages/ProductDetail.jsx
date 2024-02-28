import  React,{useState, useEffect} from "react";
import { useParams, NavLink } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import logo from "../pages/images/logo.png";
import CourseService from "../services/CourseService";
const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  let [course, setCourse] = useState({});

  const fetchCourse = (id)=>{
    CourseService.get(id)
      .then((res)=>{
        setCourse(res.data.data);
        console.log(res.data.data);
      })
      .catch((e)=>console.log(e));
  }

  useEffect(()=>{
    fetchCourse(id)
  },[]);
  
  return (
    <MainLayout>
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={logo} alt="" style={{width: '80%'}} />
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              Name:{" "}
            </label>{" "}
            {course.name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price:{" "}
            </label>{" "}
            {course.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Category:{" "}
            </label>{" "}
            {course.category}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Description:{" "}
            </label>{" "}
            {course.description}
          </p>

          <p>
            <label htmlFor="" className="lblStyle">
              ingredients:{" "}
            </label>{" "}
            {course.ingredients}
          </p>

          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <hr />
        {course.reviews &&
          course.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"⭐️".repeat(r.star)}</p>
              <p>{r.message}</p>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;