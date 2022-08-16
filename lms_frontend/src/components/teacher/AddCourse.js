
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';

const baseUrl='http://localhost:8000/api';

function AddCourse(){
    const [cats,setCats]=useState([]);
    const [courseData,setcourseData] = useState({
        category    :'',
        title       :'',
        describtion :'',
        f_img       :'',
        techs       :'',
    });

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


    

    const formsubmit=()=>{
        
        const _formData=new FormData();
        const teacherId=localStorage.getItem('teacherId');
        _formData.append('category',courseData.category)
        _formData.append('teacher',teacherId)
        _formData.append('title',courseData.title)
        _formData.append('describtion',courseData.describtion)
        _formData.append('featured_img',courseData.f_img,courseData.f_img.name)
        _formData.append('techs',courseData.techs)

        try {
            axios.post(baseUrl+'/course/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                window.location.href='/add-course'
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
                    <div className='card' style={{backgroundColor:' #f2f2f2'}}>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                        <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Category</label>
                        <div class="col-sm-10">
                            <select name='category' onChange={handelChange} class='form-control'>
                                {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                            </select>
                        </div>
                        </div>

                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="describtion" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" onChange={handelChange} name='describtion' id="describtion"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Featured Image</label>
                        <div class="col-sm-10">
                            <input type="file" onChange={handelFiledChange} name="f_img" class="form-control" id="course_video" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="techs" class="col-sm-2 col-form-label">Technologies</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" onChange={handelChange} name="techs" id="techs" placeholder='django,css'/>
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

export default AddCourse;


// jjjjjjjjjjjjj