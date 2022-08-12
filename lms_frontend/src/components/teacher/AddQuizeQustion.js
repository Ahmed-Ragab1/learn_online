
// import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import {useState} from 'react'
import Swal from 'sweetalert2'

import { Link, useParams } from 'react-router-dom';
const baseUrl='http://localhost:8000/api';

function AddQuizeQustion(){
    const [QuestionData,setQuestionData] = useState({
        quiz       :'',
        questions :'',
        ans1       :'',
        ans2     :'',
        ans3     :'',
        ans4     :'',
        right_ans     :'',
    });

    
    const handelChange=(event)=>{
        setQuestionData({
            ...QuestionData,
            [event.target.name]:event.target.value
        });
    }


    // get id
    const {quiz_id}=useParams();
    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('quiz',quiz_id)
        _formData.append('questions',QuestionData.questions)
        _formData.append('ans1',QuestionData.ans1)
        _formData.append('ans2',QuestionData.ans2)
        _formData.append('ans3',QuestionData.ans3)
        _formData.append('ans4',QuestionData.ans4)
        _formData.append('right_ans',QuestionData.right_ans)

        try {
            axios.post(baseUrl+'/quiz-questions/'+quiz_id,_formData,{
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
                        <h5 className='card-header'>Add question <Link className='btn btn-success btn-sm float-end' to={'/all-questions/'+quiz_id}>all Questions</Link></h5>
                       
                        <div className='card-body'>
                            <form>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='questions' class="form-control" id="title"  />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">ans 1</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='ans1' class="form-control" id="title"  />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">ans 2</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='ans2' class="form-control" id="title"  />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">ans 3</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='ans3' class="form-control" id="title"  />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">ans 4</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='ans4' class="form-control" id="title"  />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">right answer</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={handelChange} name='right_ans' class="form-control" id="title"  />
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

export default AddQuizeQustion;