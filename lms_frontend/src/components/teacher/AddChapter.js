
import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import {useState} from 'react'
import { useParams } from 'react-router-dom';
const baseUrl='http://localhost:8000/api';
function AddChapter(){
    const [chapterData,setChaptereData] = useState({
        title       :'',
        describtion :'',
        video       :'',
        remarks       :'',
    });
    
    const handelChange=(event)=>{
        setChaptereData({
            ...chapterData,
            [event.target.name]:event.target.value
        });
    }
    const handelFiledChange=(event)=>{
        setChaptereData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
        });
    }
    const {course_id}=useParams();
    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',course_id)
        _formData.append('title',chapterData.title)
        _formData.append('describtion',chapterData.describtion)
        _formData.append('video',chapterData.video,chapterData.video.name)
        _formData.append('remarks',chapterData.remarks)

        try {
            axios.post(baseUrl+'/chapter/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                window.location.href='/add-chapter/1'
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
                        <h5 className='card-header'>Add Chapter</h5>
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
                        <label for="course_video" class="col-sm-2 col-form-label">Video</label>
                        <div class="col-sm-10">
                            <input type="file"  onChange={handelFiledChange} name='video' class="form-control" id="course_video" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="technologies" class="col-sm-2 col-form-label">Remarks</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" onChange={handelChange} name='remarks' id="technologies" placeholder='This video focuses on specific topic'/>
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

export default AddChapter;