import React ,{useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import CourseService from "../services/CourseService";
import swal from 'sweetalert';


const DeleteProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const confirmDelete =() =>{
    swal({
      icon:"warning",
      dangerMode: true,
      title:"Confirm",
      text: "ยืนยันการลบข้อมูล?",
      buttons: true,
  }).then((confirm)=>{
    if(confirm){
      //call delete service
      CourseService.deleteProduct(id)
      .then((res)=> navigate("/product"))
      .catch((e)=> console.log(e));
    }else{
      //กลับไปหน้า product
      navigate("/product");
    }
  });
  };
  useEffect(()=>{
    confirmDelete();
  },[]);
  return (
    <MainLayout>
      <h1 className="mt-3">Delete Product</h1>
      <hr />
    </MainLayout>
  );
};

export default DeleteProduct;