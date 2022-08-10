import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

function RecommendedCourses(){
    const[courseData,setcourseData]=useState([]);
    const studentId=localStorage.getItem('studentId');
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-recommened-courses/'+studentId).then((res)=>{
                setcourseData(res.data);
            })
        }
        catch(error){
            console.log(error)
        }
       },[]);


    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>My Courses</h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technologies</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                {courseData.map((row,index)=>

                    <tr>

                    <td><NavLink to={`/detail/`+row.id}>{row.title}</NavLink></td>
                    <td>{row.techs}</td>
                    {/* <td><button className='btn btn-danger btn-sm active'>Remove Enrollment</button></td> */}
                    </tr>)}

                </tbody>
            </table>
        </div>
    </div>
            </section>
        </div>
    </div>
       

    )
}
export default RecommendedCourses;



