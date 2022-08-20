
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api";

function TeacherLogin() {
  const [teacherLoginData, setteacherLoginData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg,setErrorMsg]=useState('');

  const handleChange = (event) => {
    setteacherLoginData({
      ...teacherLoginData,
      [event.target.name]:event.target.value,
    });
  };

  const submitForm = () => {
    console.log(teacherLoginData)
    const teacherFormData=new FormData();
    teacherFormData.append('email',teacherLoginData.email)
    teacherFormData.append('password',teacherLoginData.password)
    try{
        axios.post(baseUrl+'/teacher-login',teacherFormData)
        .then((res)=>{
            console.log(res.data)
            if(res.data.bool===true){
                localStorage.setItem('teacherLoginStatus',true)
                localStorage.setItem('teacherId',res.data.teacher_id)
                localStorage.setItem('teacherName',res.data.full_name)
                window.location.href='/teacher-dashboard'
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
  
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus');
  if(teacherLoginStatus==='true')
  {
    window.location.href='/teacher-dashboard'
  }
  useEffect(() => {
    document.title = "Teacher Login";
  });





  return (
    <div className="container" style={{margin:"220px"}}>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h5 className="card-header">Teacher Login</h5>
            <div className="card-body">
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
              <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={teacherLoginData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={teacherLoginData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={submitForm}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
