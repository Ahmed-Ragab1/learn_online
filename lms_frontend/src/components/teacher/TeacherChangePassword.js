
import TeacherSidebar from './TeacherSidebar';
import { useEffect,useState } from 'react';
import { Card } from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function TeacherChangePassword(){

    const [teacherData,setteacherData]=useState({
        'password':''

    });

    const teacherId=localStorage.getItem('teacherId');


    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }


    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append('password',teacherData.password)

        try{
            axios.post(baseUrl+'/teacher/change-password/'+teacherId+'/',teacherFormData).then((response)=>{
                if (response.status==200){
                    window.location.href='/teacher-logout';
                }else{
                    alert('some error occured');
                }
                
                });
            
        }catch(error){
            console.log(error);
            setteacherData({'status':'error'})
        }
    };


    useEffect(()=>{
        document.title='teacher change password'
    });

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus!='true'){
        window.location.href='/teacher-login';
    };

    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="text"  class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" name='password' value={teacherData.password} onChange={handleChange} />
                        </div>
                        </div> 
                       <button className='btn btn-primary' onClick={submitForm}>Update</button>
                       
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default TeacherChangePassword;