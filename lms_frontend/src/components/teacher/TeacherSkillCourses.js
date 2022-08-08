import Card from 'react-bootstrap/Card';
import { NavLink, useParams } from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function TeacherSkillCourses(){
  const [courseData,setCourseData]=useState([]);
  const{skill_name,teacher_id}=useParams();
  useEffect(()=>{
    try{
      axios.get(baseUrl+'/course/?skill_name='+skill_name+'&teacher'+teacher_id)
      .then((res)=>{
        setCourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);
    return(
<div className='container mt-3'>
        {/* latest course */}
        <h3 className='pb-1 mb-4 mt-3'>{skill_name}</h3>
        <div className="row mb-4">
        {courseData && courseData.map((course,index)=>
            <div className="col-md-3 mb-4">
              <Card >
                < NavLink to={`/detail/${course.id}`}><Card.Img variant="top" src={course.featured_img} /></NavLink>
                <Card.Body>
                  <Card.Title><NavLink to={`/detail/${course.id}`}>{course.title}</NavLink></Card.Title>
                </Card.Body>
              </Card>
            </div>
       )}

 </div>      
  
        {/*end latest course */}   
        {/* Pagination  */}
        {/* <nav aria-label="Page navigation example mt-5">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> */}
                {/* Pagination  */}

        </div>
    )

}
export default TeacherSkillCourses;