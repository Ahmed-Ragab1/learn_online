import '../login.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";


function Login(){
    const [studentLoginData, setstudentLoginData] = useState({
        email: "",
        password: "",
      });



    const [errorMsg,setErrorMsg]=useState('');

    const handleChange = (event) => {
        setstudentLoginData({
            ...studentLoginData,
        [event.target.name]:event.target.value,
        });
    };




    const submitForm = () => {
        const studentFormData=new FormData();
        studentFormData.append('email',studentLoginData.email)
        studentFormData.append('password',studentLoginData.password)
        try{
            axios.post(baseUrl+'/student-login',studentFormData)
            .then((res)=>{
                console.log(res.data)
                if(res.data.bool===true){
                    localStorage.setItem('studentLoginStatus',true)
                    localStorage.setItem('studentId',res.data.student_id)
                    localStorage.setItem('studentName',res.data.full_name)
                    window.location.href='/user-dashboard'
                }
                else{
                  setErrorMsg('inavalid Email or Password !!');
                 
                }
            })
    
        }catch(error)
        {
            console.log(error)
        }
    
      };



      const studentLoginStatus=localStorage.getItem('studentLoginStatus');
      if(studentLoginStatus==='true')
      {
        window.location.href='/user-dashboard'
      }


      useEffect(() => {
        document.title = "Student Login";
      });

    

    return(
        <div className='root py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card lgcard allcards'  style={{backgroundColor: "rgb(219, 219, 219)",border:"0px solid white"}}>
                        <h5 className='card-header'>Student Login</h5>
                        <div className='card-body' >
                            {errorMsg && <p className="text-danger">{errorMsg}</p>}
                            <div className='mb-3'>
                                <label for='exampleInputEmail' className='form-label'>Email</label>
                                <input onChange={handleChange} name="email" value={studentLoginData.email} type='email' className='form-control'/>
                            </div>

                            <div className='mb-3'>
                                <label for='exampleInputPassword1' className='form-label'>Password</label>
                                <input onChange={handleChange} name="password" value={studentLoginData.password} type='password' className='form-control' id='exampleInputPassword1'/>
                            </div>

                            {/* <div className='mb-3 form-check'>
                                <input type='checkbox' className='form-check-input' id='exampleCheck1'/>
                                <label for='exampleCheck1' className='form-check-label'>Remember Me</label>
                            </div> */}
                            <button type='submit' onClick={submitForm} className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    )
}

export default Login;