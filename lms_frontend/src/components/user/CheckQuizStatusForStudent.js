import { Link, NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function CheckQuizinCourse(props){
   const[quizData,setquizData]=useState([]);

   const studentId=localStorage.getItem('studentId');
    // fetch courses
   useEffect(()=>{
    try{
        axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`).then((res)=>{
            setquizData(res.data);
        })
    }
    catch(error){
        console.log(error)
    }
   },[]);


    return (
        
        <td>
            {quizData.bool==true &&
                <span className='text-success'>Attempted</span>
            }

            {quizData.bool==false &&
            <NavLink to={`/take-quiz/${props.quiz}`} className='btn btn-success btn-sm ms-2'>Take Quiz</NavLink>
            }
        </td>      

    )
}
export default CheckQuizinCourse;