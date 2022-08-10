import { Link, NavLink,useParams} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function EnrolledStudents(){
   const[studentData,setStudentData]=useState([]);
   let {course_id}=useParams();
   useEffect(()=>{
    try{
        axios.get(baseUrl+'/fetch-enrolled-students/'+course_id).then((res)=>{
            console.log(studentData)

            setStudentData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);

    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>Enrolled Student List </h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Interesed Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((row,index)=>
                    
                    <tr> 
                    <td>{row.student.full_name}</td>
                    <td>{row.student.email}</td>
                    <td>{row.student.username}</td>
                    <td>{row.student.interesed_categories}</td>
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
export default EnrolledStudents;