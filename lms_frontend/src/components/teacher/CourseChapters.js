import {Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function CourseChapters(){
    const[chapterData,setChapterData]=useState([]);
    const[totalResult,settotalResult]=useState([0]);
    const {course_id}=useParams();

    useEffect(()=>{
     try{
         axios.get(baseUrl+'/course-chapters/'+course_id).then((res)=>{
            setChapterData(res.data);
            settotalResult(res.data.length);
         })
     }
     catch(error){
         console.log(error)
     }
    },[]);

    const Swal = require('sweetalert2')
    const handelDeleteClick = (chapter_id)=>{
        Swal.fire({
            title: 'Confirm',
            text: 'Do you want to delete this data ?',
            icon: 'info',
            confirmButtonText: 'continue',
            showCancelButton : true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/chapter/'+chapter_id)
                    .then((res)=>{
                        Swal.fire('success','data has been deleted');
                        try{
                            axios.get(baseUrl+'/course-chapters/'+course_id).then((res)=>{
                               setChapterData(res.data);
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
        <h5 className='card-header'>All Chapters ({totalResult}) <NavLink className='btn btn-success btn-sm float-end' to={'/add-chapter/'+course_id}>Add Chapter</NavLink></h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Video</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {chapterData.map((chapter,index)=>
                    <tr>
                    <td><Link to={ '/edit-chapter/' + chapter.id } >{chapter.title}</Link></td>
                    <td>
                        <video width="250" controls>
                        <source src={chapter.video} type="video/mp4" />
                        <source src={chapter.video} type="video/ogg" />
                        Your browser does not support the video tag.
                        </video>
                    </td>
                    <td><NavLink to='/'>{chapter.remarks}</NavLink></td>
                    <td><Link to={ '/edit-chapter/' + chapter.id } className='btn btn-sm btn-info'><i class="bi bi-pencil-square"></i></Link>
                        <button  onClick={()=>handelDeleteClick(chapter.id)} className='btn btn-sm btn-danger ms-2'><i class="bi bi-trash"></i></button>
                        
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
export default CourseChapters;
