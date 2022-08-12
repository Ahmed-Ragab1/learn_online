import { useEffect,useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';


function ProfileSetting(){

    const [studentData,setstudentData]=useState({
        'full_name':'',
        'email':'',
        'username':'',
        'interesed_categories':'',
        'profile_img':'',
        'p_img':''

    });

    const studentId=localStorage.getItem('studentId');    

    

    useEffect(()=>{
        //fetch current course data
        try{
            axios.get(baseUrl+'/student/'+studentId)
            .then((res)=>{
                setstudentData({
                    full_name:res.data.full_name,
                    email:res.data.email,
                    username:res.data.username,
                    interesed_categories:res.data.interesed_categories,
                    profile_img:res.data.profile_img,
                    p_img:'',
                });
            });
        }catch(error){
            console.log(error);
        }

    },[]);




    const handleChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.value
        });
    }


    const handleFileChange=(event)=>{
        setstudentData({
            ...studentData,
            [event.target.name]:event.target.files[0]
        });
    }



    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append('full_name',studentData.full_name)
        studentFormData.append('email',studentData.email)
        studentFormData.append('username',studentData.username)
        studentFormData.append('interesed_categories',studentData.interesed_categories)
        if(studentData.p_img!==''){
            studentFormData.append('profile_img',studentData.p_img.name);
        }

        try{
            axios.put(baseUrl+'/student/'+studentId+'/',studentFormData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            }).then((response)=>{
                if (response.status === 200){
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
            setstudentData({'status':'error'})
        }
    };


    useEffect(()=>{
        document.title='My Profile'
    });

    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if(studentLoginStatus!='true'){
        window.location.href='/user-login';
    };

    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">Teacher Name</label>
                        <div class="col-sm-10">
                            <input type="text" name='full_name' value={studentData.full_name} onChange={handleChange} class="form-control" id="username" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" name='email' value={studentData.email} onChange={handleChange} class="form-control" id="staticEmail"  />
                        </div>
                        </div>

                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Profile Image</label>
                        <div class="col-sm-10">
                            <input type="file"  onChange={handleFileChange} name="p_img" className='form-control' id="course_video" />
                            {studentData.profile_img &&
                               <p className='mt-2'><img src={studentData.profile_img} width='300'/></p> 
                            }
                        </div>
                        </div>
                         
                        <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">User Name</label>
                        <div class="col-sm-10">
                            <input type="text" name='username' value={studentData.username} onChange={handleChange} class="form-control" id="username" />
                        </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="interesed_categories" name='interesed_categories' class="col-sm-2 col-form-label">Interesed Categories</label>
                            <div class="col-sm-10">
                                <input type="textarea" value={studentData.interesed_categories} onChange={handleChange}  name='interesed_categories'  class="form-control" id="interesed_categories" />
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