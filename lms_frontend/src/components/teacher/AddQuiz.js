
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import {useState} from 'react';
import axios from 'axios';

const baseUrl='http://localhost:8000/api';

function AddQuiz(){
    const [quizData,setquizData] = useState({
        title       :'',
        detail :'',

    });
    const handelChange=(event)=>{
        setquizData({
            ...quizData,
            [event.target.name]:event.target.value
        });
    }

    const formsubmit=()=>{
        
        const _formData=new FormData();
        const teacherId=localStorage.getItem('teacherId');
        _formData.append('teacher',teacherId)
        _formData.append('title',quizData.title)
        _formData.append('detail',quizData.detail)

 

        try {
            axios.post(baseUrl+'/quiz/',_formData,{
           
            })
            .then((res)=>{
                window.location.href='/add-quiz'
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
                <div className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Quiz</h5>
                        <div className='card-body'>
                        <form>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" onChange={handelChange} name='title' class="form-control" id="title"  />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="Detail" class="col-sm-2 col-form-label">Detail</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" onChange={handelChange} name='detail' id="Detail"/>
                        </div>
                        </div>
                    
                       <button type='button' onClick={formsubmit} className='btn btn-primary'>Submit</button>
                       </form>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
            
    )
}

export default AddQuiz;


// jjjjjjjjjjjjj