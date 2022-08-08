import {Link, NavLink, useParams} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

const siteUrl='http://127.0.0.1:8000/';
const baseUrl='http://127.0.0.1:8000/api';


function CourseDetail(){
    const[courseData,setcourseData]=useState([]);
    const[chapterData,setChapterData]=useState([]);
    const[teacherData,setteacherData]=useState([]);
    const[realtedcourseData,setrealtedcourseData]=useState([]);
    const[techListData,settechListData]=useState([]);
    const[userLoginStatus,setuserLoginStatus]=useState();
    const[enrollStatus,setenrollStatus]=useState();


    let {course_id}=useParams();




    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/'+course_id).then((res)=>{
                setcourseData(res.data);
                setChapterData(res.data.course_chapters);
                setteacherData(res.data.teacher);
                setrealtedcourseData(JSON.parse(res.data.related_videos));
                settechListData(res.data.tech_list);
            })
        }
        catch(error){
            console.log(error)
        }




        const studentId=localStorage.getItem('studentId');
        try{
            axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id).then((res)=>{
                if(res.data.bool===true){
                    setenrollStatus('success')
                }
            })
        }
        catch(error){
            console.log(error)
        }


        const studentLoginStatus=localStorage.getItem('studentLoginStatus');
        if(studentLoginStatus==='true')
        {
            setuserLoginStatus('success')
        }
    },[]);

       console.log(realtedcourseData);



       const enrollCourse = ()=>{
        const _formData=new FormData();
        const studentId=localStorage.getItem('studentId');
        _formData.append('course',course_id)
        _formData.append('student',studentId)

        try {
            axios.post(baseUrl+'/student-enroll-course/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status===200||res.status===201){
                    Swal.fire({
                        title: 'You have successfully in this course',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                    setenrollStatus('success')
                }

            })
        } catch (error) {
            console.log(error);
        }
       }



    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src={courseData.featured_img} className='img-thumbnail' alt='course'/>
                </div>
                <div className='col-8'>
                    <h3>{courseData.title}</h3>
                    <p>{courseData.describtion}</p>
                    <p className='fw-bold'>course by: <Link to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                    <p className='fw-bold'>Techs:&nbsp;
                    {techListData.map((tech,index)=>
                    <>
<NavLink to={`/category/${tech.trim()}`} className='badge badge-pill bg-warning text-dark'> {tech.trim()}</NavLink>&nbsp;
</>
                    )}
                    </p>
                    <p className='fw-bold'>duration: 30 minutes</p>
                    <p className='fw-bold'>total enroled: 304 student</p>
                    <p className='fw-bold'>rating: 3/5</p>

                    { enrollStatus === 'success' && userLoginStatus === 'success' &&
                        <p><span>You are already enrolled in this course</span></p>
                    }

                    { userLoginStatus === 'success' && enrollStatus !== 'success' &&
                        <p><button type='button' className='btn btn-success' onClick={enrollCourse} >Enroll course</button></p>
                    }

                    { userLoginStatus !== 'success' &&
                        <p><Link type='button' className='btn btn-success' to='/user-login' >Please Login to enroll in this course</Link></p>
                    }
                    
                </div>
            </div>

            {/* course video */}
            <div className='card mt-4'>
                <h5 className='card-header'>
                    The Capters of this course
                </h5>
                <ul className='list-group list-group-flush'>
                {chapterData.map((chapter,index)=>
                    <li className='list-group-item'>{chapter.title}
                        <span className='float-end'>
                            <span className='me-5'> 1 Hour 30 Minutes</span>
                            { enrollStatus === 'success' && userLoginStatus === 'success' &&
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1"><i className="bi-youtube"></i></button>
                            }
                                </span>
                        {/* Modal starts here */}
                        <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div class="ratio ratio-16x9">
                        <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe>
                        </div>
                            </div>
                        
                            </div>
                        </div>
                        </div>
                    </li>
                )}
                </ul>
            </div>



{/* related course */}
        <h3 className='pb-1 mb-4 mt-5'>Related Courses </h3>
        <div className="row mb-4">
        {realtedcourseData?.map((rcourse,index)=>
          <div className="col-md-3">
          <div className='card'>
              <Link target="_blank" to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.featured_img}`} className='card-img-top' />
              </Link>
                <div className='card-body'>
                    <h5 className='card-title'><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                    </div>
                </div>
            </div>)}
            </div>         
          </div>

    );
}

export default CourseDetail;