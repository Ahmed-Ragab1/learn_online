import { Link, NavLink,useParams} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function UserList(){
   const[studentData,setStudentData]=useState([]);
   const teacherId=localStorage.getItem('teacherId');
   useEffect(()=>{
    try{
        axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId).then((res)=>{
            

            setStudentData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);


   console.log(studentData)

    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>All Student List </h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Interesed Categories</th>
                        <th>Course Name</th>
                        <th className='ms-3 ps-5'>Assignment</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((row,index)=>
                    
                    <tr> 
                    <td>{row.student.full_name}</td>
                    <td>{row.student.email}</td>
                    <td>{row.student.username}</td>
                    <td>{row.student.interesed_categories}</td>
                    <td>{row.course.title}</td>
                    <td>
                        <Link to={`/show-assignment/${teacherId}/${row.student.id}`} className='btn btn-warning d-felx justify-content-center mb-2 ms-2'>Assignments</Link>
                        <Link to={`/add-assignment/${teacherId}/${row.student.id}`} className='btn btn-success d-felx justify-content-center mb-2 ms-2'>Add Assignments</Link>
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
export default UserList;