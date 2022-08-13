// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import {useState} from 'react'
import Swal from 'sweetalert2'

import { useParams } from 'react-router-dom';
const baseUrl='http://localhost:8000/api';
function AddStudyMaterial(){
    const [studyData,setstudyData] = useState({
        title       :'',
        describtion :'',
        upload      :'',
        remarks     :'',
    });
    
    const handelChange=(event)=>{
        setstudyData({
            ...studyData,
            [event.target.name]:event.target.value
        });
    }
    const handelFiledChange=(event)=>{
        window.URL = window.URL || window.webkitURL;
        var upload = document.createElement('upload');
        upload.src = URL.createObjectURL(event.target.files[0])


        setstudyData({
            ...studyData,
            [event.target.name]:event.target.files[0]
        });
    }
    // get id
    const {course_id}=useParams();
    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',course_id)
        _formData.append('title',studyData.title)
        _formData.append('describtion',studyData.describtion)
        _formData.append('upload',studyData.upload,studyData.upload.name)
        _formData.append('remarks',studyData.remarks)

        try {
            axios.post(baseUrl+'/study-materials/'+course_id,_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Data has been added',
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
                        <h5 className='card-header'>Add Study Material</h5>
                        <div className='card-body'>
                            <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="describtion" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control"  onChange={handelChange} name='describtion' id="description"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="upload" class="col-sm-2 col-form-label">Upload</label>
                        <div class="col-sm-10">
                            <input type="file"  onChange={handelFiledChange} name='upload' class="form-control" id="upload" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="Remarks" class="col-sm-2 col-form-label">Remarks</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" onChange={handelChange} name='remarks' id="Remarks" />
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

export default AddStudyMaterial;


