import {NavLink} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/student/';

function Register(){
    const [studentData,setstudentData]=useState({
        'full_name':'',
        'email':'',
        'password':'',
        'username':'',
        'interesed_categories':'',
        'status':'',
    });

    //   when the element has value
    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }




    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append('full_name',studentData.full_name)
        studentFormData.append('email',studentData.email)
        studentFormData.append('password',studentData.password)
        studentFormData.append('username',studentData.username)
        studentFormData.append('interesed_categories',studentData.interesed_categories)

        // after submiting the data empty the student Data
        try{
            axios.post(baseUrl,studentFormData).then((response)=>{
                console.log(response.data);
                setstudentData({
                    'full_name':'',
                    'email':'',
                    'password':'',
                    'username':'',
                    'interesed_categories':'',
                    'status':'success',
                });
            });
        }catch(error){
            setstudentData({'status':'error'})
        }
    };


    useEffect(()=>{
        document.title = "student register"
    })


    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    {studentData.status === 'success' && <p className='text-success'>Thanks for Your Registration</p>}
                    {studentData.status === 'error' && <p className='text-danger'>Somthing Wrong Happened!</p>}
                    <div className='card'>
                        <h5 className='card-header'>User Register</h5>
                        <div className='card-body'>
                            <div className='mb-3'>
                                <label for='exampleInputEmail' className='form-label'>Full Name</label>
                                <input value={studentData.full_name} type='text' name='full_name' onChange={handleChange} className='form-control'/>
                            </div>

                            <div className='mb-3'>
                                <label for='exampleInputEmail' className='form-label'>Email</label>
                                <input value={studentData.email} type='email' name='email' onChange={handleChange} className='form-control'/>
                            </div>


                            <div className='mb-3'>
                                <label for='exampleInputEmail' className='form-label'>User Name</label>
                                <input value={studentData.username} type='text' name='username' onChange={handleChange} className='form-control'/>
                            </div>

                            <div className='mb-3'>
                                <label for='exampleInputPassword1' className='form-label'>Password</label>
                                <input value={studentData.password} type='password' name='password' onChange={handleChange} className='form-control' id='exampleInputPassword1'/>
                            </div>
                            <div className='mb-3'>
                                <label for='exampleInputPassword1' className='form-label'>Interests</label>
                                <textarea value={studentData.interesed_categories} name='interesed_categories' onChange={handleChange} className='form-control'></textarea>
                                <div className='form-text'>html, css, js, etc</div>
                            </div>

                            <button type='submit' onClick={submitForm} className='btn btn-primary'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Register;