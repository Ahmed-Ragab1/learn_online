import React from "react";
import { NavLink,Link } from "react-router-dom";
import {useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl='http://127.0.0.1:8000/api';

export default function TeacherDetail() {
  const[courseData,setcourseData] =useState([]);
  const[teacherData,setteacherData] =useState([]);
  const[skill_list,setskill_list]=useState([]);
  let {teacher_id}=useParams();


  useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher/'+teacher_id).then((res)=>{
          setteacherData(res.data);
          setcourseData(res.data.teacher_courses);
          setskill_list(res.data.skill_list);

        })
    }
    catch(error){
        console.log(error)
    }
   },[]);


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img
            src="/logo512.png"
            className="img-thumbnail"
            alt="Teacher"
          />
        </div>
        <div className="col-8">
          <h3>{teacherData.full_name}</h3>
          <p>
          {teacherData.detail}
          </p>
          <p className="fw-bold">
            Skills:&nbsp;
            {skill_list.map((skill,index)=>
            <>
<NavLink className='badge badge-pill text-dark bg-warning mx-1' to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`}>
    {skill.trim()}
</NavLink>&nbsp;        
       </>     )}
          
          </p>
          <p className="fw-bold">Recent Courses: <NavLink to="/category/php"> node js</NavLink></p>
          <p className="fw-bold">rating: 3/5</p>
        </div>
      </div>

      {/* course video */}
      <div className="card mt-4">
        <h5 className="card-header">Course List</h5>
        <div className="list-group list-group-flush">
        {courseData?.map((course,index)=>
            <Link to={`/detail/${course.id}`} className="list-group-item list-group-item-action">{course.title}</Link>
        )}
        </div>
      </div>
    </div>
  );
}
