import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function StudentAssignments(){
    const[assignmentData,setassignmentData]=useState([]);
    const[assignmentStatus,setassignmentStatus]=useState('');
    const studentId=localStorage.getItem('studentId');
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/my-assignments/'+studentId).then((res)=>{
                setassignmentData(res.data);
            })
        }
        catch(error){
            console.log(error)
        }
       },[]);





       const markAsDone = (assignment_id,title,detail,student,teacher)=>{
        const _formData=new FormData();
        _formData.append('student_status',true)
        _formData.append('title',title)
        _formData.append('detail',detail)
        _formData.append('student',student)
        _formData.append('teacher',teacher)

        try {
            axios.put(baseUrl+'/update-assignment/'+assignment_id,_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status===200||res.status===201){
                    window.location.reload()
                }

            })
        } catch (error) {
            console.log(error);
        }
       }









    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>My Assignments</h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Detail</th>
                        <th>Teacher</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {assignmentData.map((row,index)=>
                    <tr>
                    <td>{row.title}</td>
                    <td>{row.detail}</td>
                    <td><NavLink to={`/teacher-detail/`+row.teacher.id}>{row.teacher.full_name}</NavLink></td>
                    <td>
                        { row.student_status === false &&
                            <button onClick={()=>markAsDone(row.id,row.title,row.detail,row.student.id,row.teacher.id)} className='btn btn-success btn-sm'> Mark As Done </button>
                        }
                        { row.student_status === true &&
                            <span className='badge bg-primary'> Completed </span>
                        }
                    </td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    </div>
            </section>
        </div>
    </div>
       

    )
}
export default StudentAssignments;