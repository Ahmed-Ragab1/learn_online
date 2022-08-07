
import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react'
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";
function AddCourse(){
    const [cats,setCats]=useState([])
    useEffect=(()=>{
        try{
            axios.get(baseUrl+'category/')
            .then((res)=>{
                console.log(res.data)
                if(res.data.bool==true){
          console.log(res.data)
                }
            })
    
        }catch(error)
        {
            console.log(error)
        }
    },[])
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <form>
                            <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Category</label>
                        <select name='category' className='form-control'>

                        </select>
                        </div>

                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="description"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Featured Image</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control" id="course_video" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="techs" class="col-sm-2 col-form-label">Technologies</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="techs" placeholder='django,css'/>
                        </div>
                        </div>
                       <button type='submit'className='btn btn-primary'>Submit</button>
                       </form>
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default AddCourse;