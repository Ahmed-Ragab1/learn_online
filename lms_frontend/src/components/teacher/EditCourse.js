
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';

function EditCourse(){
    const [cats,setCats]=useState([]);
    const [courseData,setcourseData] = useState({
        category    :'',
        title       :'',
        describtion :'',
        prev_img    :'',
        f_img       :'',
        techs       :'',
    });
const {course_id}=useParams();
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category')
            .then((res)=>{
                setCats(res.data)
            })
        }catch(error)
        {
            console.log(error)
        }

        //fetch current course data
        try{
            axios.get(baseUrl+'/teacher-course-detail/'+course_id)
            .then((res)=>{
                setcourseData({
                    category:res.data.category,
                    title:res.data.title,
                    describtion:res.data.describtion,
                    prev_img:res.data.featured_img,
                    f_img:'',
                    techs:res.data.techs,
                });
            });
        }catch(error){
            console.log(error);
        }

    },[]);



    const handelChange=(event)=>{
        setcourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
    }




    const handelFiledChange=(event)=>{
        setcourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
    }

    console.log(courseData.category);


    const formsubmit=()=>{
        const _formData=new FormData();
        const teacherId=localStorage.getItem('teacherId');
        _formData.append('category',courseData.category)
        _formData.append('teacher',teacherId)
        _formData.append('title',courseData.title)
        _formData.append('describtion',courseData.describtion)
        if(courseData.f_img!==''){
            _formData.append('featured_img',courseData.f_img,courseData.f_img.name);
        }
        _formData.append('techs',courseData.techs)

        try {
            axios.put(baseUrl+'/teacher-course-detail/'+course_id,_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if (res.status==200){
                    Swal.fire({
                        title:'data has been updated',
                        icon:'success',
                        toast:true,
                        timer:3000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false,
                    });
                }
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
                        <h5 className='card-header'>Edit Course</h5>
                        <div className='card-body'>
                        <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-10">
                            <select name='category' value={courseData.category} onChange={handelChange} class='formcontrol'>
                                {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                            </select>
                        </div>
                        </div>

                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" value={courseData.title} onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="describtion" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" value={courseData.describtion} onChange={handelChange} name='describtion' id="describtion"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Featured Image</label>
                        <div class="col-sm-10">
                            <input type="file" onChange={handelFiledChange} name="f_img" class="form-control" id="course_video" />
                            {courseData.prev_img &&
                               <p className='mt-2'><img src={courseData.prev_img} width='300'/></p> 
                            }
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="techs" class="col-sm-2 col-form-label">Technologies</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" value={courseData.techs} onChange={handelChange} name="techs" id="techs" placeholder='django,css'/>
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

export default EditCourse;