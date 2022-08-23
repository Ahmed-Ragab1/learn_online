import { useEffect,useState } from 'react';
import { Card } from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import TeacherSidebar from './TeacherSidebar';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';


function ProfileSetting(){

    const [teacherData,setteacherData]=useState({
        'full_name':'',
        'email':'',
        'qualification':'',
        'mobile_no':'',
        'skills':'',
        'status':'',
        'profile_img':'',
        'p_img':''

    });

    const teacherId=localStorage.getItem('teacherId');    

    

    useEffect(()=>{
        //fetch current course data
        try{
            axios.get(baseUrl+'/teacher/'+teacherId)
            .then((res)=>{
                setteacherData({
                    full_name:res.data.full_name,
                    email:res.data.email,
                    qualification:res.data.qualification,
                    mobile_no:res.data.mobile_no,
                    skills:res.data.skills,
                    profile_img:res.data.profile_img,
                    p_img:'',
                });
            });
        }catch(error){
            console.log(error);
        }

    },[]);




    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }


    const handleFileChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.files[0]
        });
    }

    console.log(teacherData);

    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append('full_name',teacherData.full_name)
        teacherFormData.append('email',teacherData.email)
        teacherFormData.append('qualification',teacherData.qualification)
        teacherFormData.append('mobile_no',teacherData.mobile_no)
        teacherFormData.append('skills',teacherData.skills)

        if(teacherData.p_img!==''){
            teacherFormData.append('profile_img',teacherData.p_img);
        }

        try{
            axios.put(baseUrl+'/teacher/'+teacherId+'/',teacherFormData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            }).then((response)=>{
                if (response.status==200){
                    Swal.fire({
                        title:'Data has been updated',
                        icon:'success',
                        toast:true,
                        timer:3000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                }
                
                });
            
        }catch(error){
            console.log(error);
            setteacherData({'status':'error'})
        }
    };


    useEffect(()=>{
        document.title='teacher Profile'
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
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">Teacher Name</label>
                        <div class="col-sm-10">
                            <input type="text" name='full_name' value={teacherData.full_name} onChange={handleChange} class="form-control" id="username" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" name='email' value={teacherData.email} onChange={handleChange} class="form-control" id="staticEmail"  />
                        </div>
                        </div>

                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Profile Image</label>
                        <div class="col-sm-10">
                            <input type="file"  onChange={handleFileChange} name="p_img" className='form-control' id="course_video" />
                            {teacherData.profile_img &&
                               <p className='mt-2'><img src={teacherData.profile_img} width='300'/></p> 
                            }
                        </div>
                        </div>
                         
                        <div class="mb-3 row">
                        <label for="skills" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                            <input type="textarea" name='skills' value={teacherData.skills} onChange={handleChange} class="form-control" id="skills" />
                        </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="skills" name='qualification' class="col-sm-2 col-form-label">Qualification</label>
                            <div class="col-sm-10">
                                <input type="textarea" value={teacherData.qualification} onChange={handleChange}  name='qualification'  class="form-control" id="skills" />
                            </div>
                        </div>
                        <hr/>

                       <button className='btn btn-primary' onClick={submitForm}>Update</button>
                       
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default ProfileSetting;