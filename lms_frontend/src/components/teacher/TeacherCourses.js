import { Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function TeacherCourses(){
   const[courseData,setCourseData]=useState([]);
   const teacherId=localStorage.getItem('teacherId');
   useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher-courses/'+teacherId).then((res)=>{
            setCourseData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);

   console.log(teacherId);


    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>My Courses</h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Total Enrolled</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData.map((course,index)=>
                    <tr>
                    <td>
                        <Link to={'/all-chapters/'+course.id} >{course.title}</Link>
                        <hr/>
                        {course.course_rating && <span>Rating:{course.course_rating}/5</span>}
                        {!course.course_rating && <span>Rating:0/5</span>}
                    </td>

                    <td><img src={course.featured_img} width="80" className='rounded' alt={course.title}/></td>
                    <td><NavLink to={'/enrolled-students/'+course.id}>{course.total_enrolled_students}</NavLink></td>
                    <td>
                        <NavLink className='btn btn-info btn-sm' to={'/edit-course/'+course.id} >
                            Edit
                        </NavLink>
                        <NavLink className='btn btn-success btn-sm active ms-2' to={'/add-chapter/'+course.id} >
                            Add Chapter
                        </NavLink>
                        <button className='btn btn-danger btn-sm ms-2 active'>Delete</button>
                       
                    </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
            </section>
        </div>
    </div>
       

    )
}
export default TeacherCourses;