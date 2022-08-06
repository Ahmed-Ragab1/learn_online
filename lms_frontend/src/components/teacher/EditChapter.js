
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const baseUrl='http://localhost:8000/api';
function EditChapter(){
    const [chapterData,setChaptereData] = useState({
        course      :'',
        title       :'',
        describtion :'',
        prev_video  :'',
        video       :'',
        remarks     :'',
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
    const {chapter_id}=useParams();
    
    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',chapterData.course)
        _formData.append('title',chapterData.title)
        _formData.append('describtion',chapterData.describtion)
        if(chapterData !==''){
            _formData.append('video',chapterData.video,chapterData.video.name)
        }
        _formData.append('remarks',chapterData.remarks)

        try {
            axios.put(baseUrl+'/chapter/'+chapter_id+'/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200){
                    Swal.fire({
                        title: 'Data has been updated',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                }
                }
            )}catch (error) {
                console.log(error);
            }
            
    }
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/chapter/'+chapter_id).then((res)=>{
                setChaptereData({
                    course:res.data.course,
                    title:res.data.title,
                    describtion:res.data.describtion,
                    prev_video:res.data.prev_video,
                    video:'',
                    remarks:res.data.remarks,
                });
            })
        }
        catch(error){
            console.log(error)
        }
       },[]);

    return(

        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>Update Chapter</h5>
                    <div className='card-body'>
                        <form>
                    <div class="mb-3 row">
                    <label for="title"  class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input type="text" value={chapterData.title} onChange={handelChange} name='title' class="form-control" id="title"  />
                    </div>
                    </div>
                    <div class="mb-3 row">
                    <label for="describtion" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <textarea class="form-control"  value={chapterData.describtion} onChange={handelChange} name='describtion' id="description"/>
                    </div>
                    </div>
                    <div class="mb-3 row">
                    <label for="course_video" class="col-sm-2 col-form-label">Video</label>
                    <div class="col-sm-10">
                        <input type="file"  onChange={handelFiledChange} name='video' class="form-control" id="course_video" />
                        { chapterData.prev_video &&
                            <video width="100%" height="240" controls className='mt-2'>
                            <source src={chapterData.prev_video} type="video/mp4" />
                            </video>
                        }
                    </div>
                    </div>
                    <div class="mb-3 row">
                    <label for="technologies" class="col-sm-2 col-form-label">Remarks</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" onChange={handelChange} value={chapterData.remarks} name='remarks' id="technologies" placeholder='This video focuses on specific topic'/>
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

export default EditChapter;




