import http from "../http-common.js"

const getAll = () => {
  return http.get("/course");
}

const get = (id) => {
  return http.get("/course/" + id);
}

const create =(course) =>{
  return http.post("/course", course);
}

const deleteProduct = (id) =>{
  return http.delete("/course/"+ id);
}

const updateProduct = (id, course)=> {
  return http.put("/course/"+id, course);
}

const CourseService = {
  getAll,
  get,
  create,
  deleteProduct,
  updateProduct
}

export default CourseService