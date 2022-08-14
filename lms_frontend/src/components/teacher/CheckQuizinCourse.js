import { Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function CheckQuizinCourse(props){
   const[quizData,setquizData]=useState([]);

   const teacherId=localStorage.getItem('teacherId');



    // fetch courses
   useEffect(()=>{
    try{
        axios.get(`${baseUrl}/fetch-quiz-assign-status/${props.quiz}/${props.course}`).then((res)=>{
            setquizData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);


   console.log(quizData);



   // assign quiz to the course
   const assignQuiz = (quiz_id)=>{
    const _formData=new FormData();
    _formData.append('teacher',teacherId)
    _formData.append('course',props.course)
    _formData.append('quiz',props.quiz)

    try {
        axios.post(baseUrl+'/quiz-assign-course/',_formData,{
            headers: {
                'content-type':'multipart/form-data'
            }
        })
        .then((res)=>{
            if(res.status===200||res.status===201){
                window.location.reload();
            }

        })
    } catch (error) {
        console.log(error);
    }
   }


    return (
        
        <td>
            {quizData.bool == false &&
            <button onClick={()=>assignQuiz()} className='btn btn-success ms-2'>Assign</button>

            }
            {quizData.bool == true &&
            <>
            <span className='btn btn-success me-3'>Assigned</span>
            <Link className='btn btn-info ms-3' to={'/attempted-students/'+props.quiz} >Attempted Students</Link>
            </>
            }

        </td>
                        
       

    )
}
export default CheckQuizinCourse;