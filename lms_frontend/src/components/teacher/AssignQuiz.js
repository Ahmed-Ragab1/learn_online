import { Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CheckQuizinCourse from './CheckQuizinCourse';

const baseUrl='http://127.0.0.1:8000/api';

function AssignQuiz(){
   const[quizData,setquizData]=useState([]);
   const[courseData,setcourseData]=useState([]);
   const teacherId=localStorage.getItem('teacherId');
   const {course_id}=useParams();




   useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((res)=>{
            setquizData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }


    // fetch courses
    try{
        axios.get(baseUrl+'/course/'+course_id).then((res)=>{
            setcourseData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
    

   },[]);


//    console.log(quizData);
    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>Assign Quiz <span className='text-primary'>({courseData.title})</span>  </h5>
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
                                <CheckQuizinCourse quiz={row.id} course={course_id} />
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
export default AssignQuiz;

















// assign the quiz CheckQuizinCourse
{/* <td>
{ row.assign_status == 0 &&
    <button  onClick={()=>assignQuiz(row.id)} className='btn btn-success btn-sm ms-2 active'>Assign Quiz</button>
    
}
{ row.assign_status > 0 &&
    <span className='text-success'>Assigned</span>
    
    
}</td> */}

