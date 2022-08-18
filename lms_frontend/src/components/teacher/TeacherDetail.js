import React from "react";
import { NavLink,Link } from "react-router-dom";
import {useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl='http://127.0.0.1:8000/api';

export default function TeacherDetail() {
  const[courseData,setcourseData] =useState([]);
  const[teacherData,setteacherData] =useState([]);
  const[skilllist,setskilllist]=useState([]);

  let {teacher_id}=useParams();


  console.log(teacherData);


  useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher/'+teacher_id).then((res)=>{
          setteacherData(res.data);
          setcourseData(res.data.teacher_courses);
          setskilllist(res.data.skill_list);

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
            src={teacherData.profile_img}
            className="img-thumbnail"
            alt="Teacher"
            height="300px"
          />
        </div>
        <div className="col-8">
          <h3 style={{fontFamily: "cursive"}}>{teacherData.full_name}</h3>
          <p>
          {teacherData.detail}
          </p>
          <p className="fw-bold">
            Skills:&nbsp;
             {skilllist.map((skill,index)=>
                    <>
<NavLink to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`} className='badge badge-pill bg-warning text-dark'> {skill.trim()}</NavLink>&nbsp;
</>
                    )}
   
          </p>
          <p className="fw-bold">Recent Courses: <NavLink to="/category/php"> node js</NavLink></p>
          <p className="fw-bold">mobile:<span className="text-primary"> {teacherData.mobile_no}</span> </p>
          <p className="fw-bold">qualification:<span className="text-primary"> {teacherData.qualification}</span> </p>
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
