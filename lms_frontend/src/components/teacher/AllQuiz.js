import { Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function AllQuiz(){
   const[totalResult,settotalResult]=useState([0]);
   const[quizData,setquizData]=useState([]);
   const teacherId=localStorage.getItem('teacherId');
   useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((res)=>{
            setquizData(res.data);
            // {res.data.map((course,index)=>
            //     setCourseData(course)
            //     )}
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);

   


   const Swal = require('sweetalert2')
   const handelDeleteClick = (quiz_id)=>{
    Swal.fire({
        title: 'Confirm',
        text: 'Do you want to delete this data ?',
        icon: 'info',
        confirmButtonText: 'continue',
        showCancelButton : true
      }).then((result)=>{
        if(result.isConfirmed){
            try{
                axios.delete(baseUrl+'/quiz/'+quiz_id)
                .then((res)=>{
                    Swal.fire('success','data has been deleted');
                    try{
                        axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((res)=>{
                           setquizData(res.data);
                           settotalResult(res.data.length);
                        })
                    }
                    catch(error){
                        console.log(error);
                    }
                });
            }catch(error){
                Swal.fire('error','data has not been deleted');
            }
        }else{
            Swal.fire('error','data has not been deleted')
        }
      })
}

    useEffect(()=>{
        document.title='all quizes'
    });

    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>All Quizes</h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                {/* {courseData.map((course,index)=>
                               <h1>{course.teacher.full_name}</h1> 
                             )} */}


                    {quizData.map((row,index)=>
                    <tr>
                    <td>
                        <Link to={'/all-questions/'+row.id} >{row.title}</Link>
            
                    </td>


                    <td>
                        <NavLink className='btn btn-info btn-sm' to={`/edit-quiz/`+row.id} >
                            Edit
                        </NavLink>
                        <NavLink className='btn btn-success btn-sm active ms-2' to={'/add-quiz-question/'+row.id} >
                            Add Question
                        </NavLink>
                        <button  onClick={()=>handelDeleteClick(row.id)} className='btn btn-danger btn-sm ms-2 active'>Delete</button>
                       
                    </td>
                    </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
            </section>
        </div>
    </div>
       

    )
}
export default AllQuiz;