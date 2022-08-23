import '../login.css';
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
    const [errorData,seterrorData]=useState()

    //   when the element has value
    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }
   
    

    const submitForm=()=>{
        const studentFormData=new FormData();
        if(studentData.full_name.length >= 5){
            studentFormData.append('full_name',studentData.full_name)
        }else{
            seterrorData("name must be greater than 5");
        }
        if(studentData.email.includes("@")){
            studentFormData.append('email',studentData.email)
        }else{
            seterrorData("invalid email");
        }
        if(studentData.password.length >= 5){
            studentFormData.append('password',studentData.password)
        }else{
            seterrorData("password must be greater than 5");
        }
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
            setstudentData({'status':''})
        }
    };


    useEffect(()=>{
        document.title = "student register"
    })

    console.log(studentData.status);
    console.log(errorData);

    return(
        <div className='root py-4'>
        <div className='container'>
        <div className='container mt-5' style={{marginBottom:"80px"}}>
            <div className='row'>
                <div className='col-6 offset-3'>
                    {studentData.status === 'success' && <p className='text-success'>Thanks for Your Registration</p>}
                    {studentData.status === '' && <p className='text-danger'>{errorData}</p>}
                    <div className='card rgcard allcards'  style={{backgroundColor: "rgb(219, 219, 219)"}}>
                        <h5 className='card-header'>Student Register</h5>

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
        </div>
        </div>
            
    )
}

export default Register;