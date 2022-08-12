import {Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function QuizQustions(){
    const[questionData,setquestionData]=useState([]);
    const[totalResult,settotalResult]=useState([0]);
    const {quiz_id}=useParams();

    useEffect(()=>{
     try{
         axios.get(baseUrl+'/quiz-questions/'+quiz_id).then((res)=>{
            setquestionData(res.data);
            settotalResult(res.data.length);
         })
     }
     catch(error){
         console.log(error)
     }
    },[]);

    const Swal = require('sweetalert2')
    const handelDeleteClick = (question_id)=>{
        Swal.fire({
            title: 'Confirm',
            text: 'Do you want to delete this data ?',
            icon: 'info',
            confirmButtonText: 'continue',
            showCancelButton : true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/question/'+question_id)
                    .then((res)=>{
                        Swal.fire('success','data has been deleted');
                        try{
                            axios.get(baseUrl+'/quiz-questions/'+quiz_id).then((res)=>{
                                setquestionData(res.data);
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


    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>All Questions ({totalResult}) <NavLink className='btn btn-success btn-sm float-end' to={'/add-quiz-question/'+quiz_id}>Add Question</NavLink></h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {questionData.map((row,index)=>
                    <tr>
                    <td><Link to={ '/edit-question/' + row.id } >{row.questions}</Link></td>
                    <td>
                        <Link to={ '/edit-question/' + row.id } className='btn btn-sm btn-info'><i class="bi bi-pencil-square"></i></Link>
                        <button  onClick={()=>handelDeleteClick(row.id)} className='btn btn-sm btn-danger ms-2'><i class="bi bi-trash"></i></button>
                        
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
export default QuizQustions;
