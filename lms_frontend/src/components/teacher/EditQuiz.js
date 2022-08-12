
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const baseUrl='http://localhost:8000/api';

function EditQuiz(){
    const [quizData,setquizData] = useState({
        title       :'',
        detail :'',
    });
const teacherId=localStorage.getItem('teacherId');
const {quiz_id}=useParams();
useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher-quiz-detail/'+quiz_id)
            .then((res)=>{
                setquizData({
                    title:res.data.title,
                    detail:res.data.detail,

                });
            });
        }catch(error){
            console.log(error);
        }

    },[]);



    const handelChange=(event)=>{
        setquizData({
            ...quizData,
            [event.target.name]:event.target.value
        });
    }   
    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('teacher',teacherId)
        _formData.append('title',quizData.title)
        _formData.append('detail',quizData.detail)

        try {
            axios.put(baseUrl+'/teacher-quiz-detail/'+quiz_id,_formData,{
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
                        <h5 className='card-header'>Edit Quiz</h5>
                        <div className='card-body'>
                        <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" value={quizData.title} onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="detail" class="col-sm-2 col-form-label">Detail</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" value={quizData.detail} onChange={handelChange} name='detail' id="detail"/>
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

export default EditQuiz;