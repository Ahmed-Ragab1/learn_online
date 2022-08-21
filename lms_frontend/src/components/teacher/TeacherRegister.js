import '../login.css';
// import {NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/teacher/';

function TeacherRegister(){
    const [teacherData,setteacherData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'mobile_no':'',
        'qualification':'',
        'skills':'',
        'status':'',
    });


    //   when the element has value and put it in teacherData
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }

    
    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append('full_name',teacherData.full_name)
        teacherFormData.append('email',teacherData.email)
        teacherFormData.append('password',teacherData.password)
        teacherFormData.append('mobile_no',teacherData.mobile_no)
        teacherFormData.append('qualification',teacherData.qualification)
        teacherFormData.append('skills',teacherData.skills)

        

        try{
            axios.post(baseUrl,teacherFormData).then((response)=>{
                console.log(response.data);
                setteacherData({
                    'full_name':'',
                    'email':'',
                    'password':'',
                    'mobile_no':'',
                    'qualification':'',
                    'skills':'',
                    'status':'success',
                });
            });
        }catch(error){
            setteacherData({'status':'error'})
        }
    };




    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus=='true')
    {
      window.location.href='/teacher-dashboard'
    }
  
    return(
        <div className='root py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    {teacherData.status === 'success' && <p className='text-success'>Thanks for Your Registration</p>}
                    {teacherData.status === 'error' && <p className='text-danger'>Somthing Wrong Happened!</p>}
                    <div className='card rgscard allcards' style={{backgroundColor: "#5a5b5b88"}}>
                        <h5 className='card-header'>Teacher Register</h5>
                        <div className='card-body'>
                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>Full Name</label>
                                    <input onChange={handleChange} value={teacherData.full_name} name='full_name' type='text' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>Email</label>
                                    <input onChange={handleChange} value={teacherData.email} name='email' type='email' className='form-control' placeholder="name@example.com"/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>Password</label>
                                    <input onChange={handleChange} value={teacherData.password} name='password' type='password' className='form-control' id='exampleInputPassword1'/>
                                </div>


                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>mobile number</label>
                                    <input onChange={handleChange} value={teacherData.mobile_no} name='mobile_no' type='number' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>qualifications</label>
                                    <input onChange={handleChange} value={teacherData.qualification} name='qualification' type='text' className='form-control'/>
                                </div>
                                
                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>Skills</label>
                                    <textarea onChange={handleChange} value={teacherData.skills} className='form-control' name='skills'></textarea>
                                    <div className='form-text'>html, css, js, etc</div>
                                </div>

                                <button onClick={submitForm} type='submit' className='btn btn-primary'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    )
}

export default TeacherRegister;