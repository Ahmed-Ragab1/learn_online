// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import {useState} from 'react'
import Swal from 'sweetalert2'

import { useParams } from 'react-router-dom';
const baseUrl='http://localhost:8000/api';
function AddAssignment(){
    const [assignmentData,setassignmentData] = useState({
        title       :'',
        detail :'',
    });
    
    const handelChange=(event)=>{
        setassignmentData({
            ...assignmentData,
            [event.target.name]:event.target.value
        });
    }

    // get id
    const {student_id}=useParams();
    const {teacher_id}=useParams();



    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('teacher',teacher_id)
        _formData.append('title',assignmentData.title)
        _formData.append('detail',assignmentData.detail)
        _formData.append('student',student_id)

        try {
            axios.post(baseUrl+'/student-assignment/'+teacher_id+'/'+student_id,_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'assignment has been added',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                }
                window.location.reload()
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Assignment</h5>
                        <div className='card-body'>
                    <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="detail" class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                                <textarea class="form-control"  onChange={handelChange} name='detail' id="detail"/>
                            </div>
                        </div>
                       <button type='button' onClick={formsubmit} className='btn btn-primary'>Submit</button>
                       </form>
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default AddAssignment;