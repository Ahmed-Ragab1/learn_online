import {NavLink, useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function TakeQuiz(){
    const[questionData,setquestionData]=useState([]);
    const {quiz_id}=useParams();
    const studentId=localStorage.getItem('studentId');
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/1').then((res)=>{
                setquestionData(res.data);
            })
        }
        catch(error){
            console.log(error)
        }
        document.title='Attempt Quiz'
       },[]);

       const submitAnswer = (question_id,right_ans) =>{
        const _formData=new FormData();
        _formData.append('student',studentId)
        _formData.append('question',question_id)
        _formData.append('right_ans',right_ans)

        try {
            axios.post(baseUrl+'/attempt-quiz/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    try{
                        axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/next-question/'+question_id).then((res)=>{
                            setquestionData(res.data);
                        })
                    }
                    catch(error){
                        console.log(error)
                    }
                }
                
            })
        } catch (error) {
            console.log(error);
        }
       }

    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar />
            </aside>
            <section className='col-md-9'>
            <h5 className='mb-3 pb-1 border-bottom' >Quiz Title</h5>
    { questionData.map((row,index)=>
        <div className='card'>
        <h5 className='card-header'>{row.questions}</h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <tbody>
                    <>
                        <tr>
                            <td> <button onClick={()=>submitAnswer(row.id,row.ans1)} className='btn btn-outline-secondary'>{row.ans1}</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={()=>submitAnswer(row.id,row.ans2)} className='btn btn-outline-secondary'>{row.ans2}</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={()=>submitAnswer(row.id,row.ans3)} className='btn btn-outline-secondary'>{row.ans3}</button></td>
                        </tr>
                        <tr>
                            <td> <button onClick={()=>submitAnswer(row.id,row.ans4)} className='btn btn-outline-secondary'>{row.ans4}</button></td>
                        </tr>
                    </>
                
                </tbody>
            </table>
        </div>
        </div>
    )}
            </section>
        </div>
    </div>
       

    )
}
export default TakeQuiz;