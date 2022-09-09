import {Link, NavLink} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function StudyMaterials(){
    const[studyData,setstudyData]=useState([]);
    const[totalResult,settotalResult]=useState([0]);
    const {course_id}=useParams();

    useEffect(()=>{
     try{
         axios.get(baseUrl+'/study-materials/'+course_id).then((res)=>{
            setstudyData(res.data);
            settotalResult(res.data.length);
         })
     }
     catch(error){
         console.log(error)
     }
    },[]);

    const Swal = require('sweetalert2')
    const handelDeleteClick = (study_id)=>{
        Swal.fire({
            title: 'Confirm',
            text: 'Do you want to delete this data ?',
            icon: 'info',
            confirmButtonText: 'continue',
            showCancelButton : true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/study-material/'+study_id)
                    .then((res)=>{
                        Swal.fire('success','data has been deleted');
                        try{
                            axios.get(baseUrl+'/study-materials/'+course_id).then((res)=>{
                                setstudyData(res.data);
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


    const downloadfile = (file_url)=>{
        window.location.href=file_url;
    }

    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
            <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
            <div className='card'>
        <h5 className='card-header'>All Study Materials ({totalResult}) <NavLink className='btn btn-success btn-sm float-end' to={'/add-study/'+course_id}>Add Study Material</NavLink></h5>
        <div className='card-body'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>upload</th>
                        <th>Remarks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studyData.map((row,index)=>
                    <tr>
                    <td>{row.title}</td>
                    <td>
                    <button className='btn btn-outline-primary' onClick={()=>downloadfile(row.upload)} downloadfile>Download File</button>
                    </td>
                    <td><span to='#'>{row.remarks}</span></td>
                    <td>
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
export default StudyMaterials;




