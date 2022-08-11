
import Sidebar from './Sidebar';
import { useEffect,useState } from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function StudentChangePassword(){

    const [studentData,setstudentData]=useState({
        'password':''

    });

    const studentId=localStorage.getItem('studentId');


    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }


    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append('password',studentData.password)

        try{
            axios.post(baseUrl+'/student/change-password/'+studentId+'/',studentFormData).then((response)=>{
                if (response.status==200){
                    window.location.href='/user-logout';
                }else{
                    alert('some error occured');
                }
                
                });
            
        }catch(error){
            console.log(error);
            setstudentData({'status':'error'})
        }
    };


    useEffect(()=>{
        document.title='student change password'
    });

    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if(studentLoginStatus!='true'){
        window.location.href='/user-login';
    };

    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    < Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="text"  class="col-sm-2 col-form-label"> New Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" name='password' value={studentData.password} onChange={handleChange} />
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

export default StudentChangePassword;