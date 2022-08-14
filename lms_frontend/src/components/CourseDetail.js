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
    const[ratingStatus,setratingStatus]=useState();
    const[AvgRating,setAvgRating]=useState(0);
    const[favoriteStatus,setfavoriteStatus]=useState();
    const[courseViews,setcourseViews]=useState(0);
    
    let {course_id}=useParams();
    
    
    
    

    

    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/'+course_id).then((res)=>{
                setcourseData(res.data);
                setChapterData(res.data.course_chapters);
                setteacherData(res.data.teacher);
                setrealtedcourseData(JSON.parse(res.data.related_videos));
                settechListData(res.data.tech_list);
                if(res.data.course_rating!='' && res.data.course_rating !=null){
                    setAvgRating(res.data.course_rating)
                }
            });
            axios.get(baseUrl+'/update-view/'+course_id).then((res)=>{
                setcourseViews(res.data.views)
            });
        }
        catch(error){
            console.log(error)
        }



        const studentId=localStorage.getItem('studentId');
        // fetch enroll status
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


        // fetch rating status
        try{
            axios.get(baseUrl+'/fetch-rating-status/'+studentId+'/'+course_id).then((res)=>{
                if(res.data.bool===true){
                    setratingStatus('success')
                }
            })
        }
        catch(error){
            console.log(error)
        }

        // fetch favorite status
        try{
            axios.get(baseUrl+'/fetch-favorite-status/'+studentId+'/'+course_id).then((res)=>{
                if(res.data.bool===true){
                    setfavoriteStatus('success')
                }else{
                    setfavoriteStatus('')
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

    //    console.log(realtedcourseData);



       const enrollCourse = ()=>{
        const _formData=new FormData();
        const studentId=localStorage.getItem('studentId');
        _formData.append('course',course_id)
        _formData.append('student',studentId)

        try {
            console.log('course'+course_id);
            console.log('studentId'+studentId);

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

       // mark as favorite course
       const markasfavorite = () =>{
            const _formData=new FormData();
            _formData.append('course',course_id)
            _formData.append('student',studentId)
            _formData.append('status',true)

        try {
            console.log('course'+course_id);
            console.log('studentId'+studentId);

            axios.post(baseUrl+'/student-add-favorite-course/',_formData,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status===200||res.status===201){
                    Swal.fire({
                        title: 'You have successfully add this course to your wish list',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                    setfavoriteStatus('success')
                }

            })
        } catch (error) {
            console.log(error);
        }
       }

       const removefavorite = (pk) =>{
        const _formData=new FormData();
        _formData.append('course',course_id)
        _formData.append('student',studentId)
        _formData.append('status',false)

        try {
            console.log('course'+course_id);
            console.log('studentId'+studentId);

            axios.get(baseUrl+'/student-remove-favorite-course/'+course_id+'/'+studentId,{
                headers: {
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status===200||res.status===201){
                    Swal.fire({
                        title: 'You have successfully removed this course from wish list',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                    setfavoriteStatus('')
                }

            })
        } catch (error) {
            console.log(error);
        }
       }


       // ## add rating
       const [ratingData,setRatingData] = useState({
        rating       :'',
        review        :'',
       
    });
    
            const handelChange=(event)=>{
                setRatingData({
                    ...ratingData,
                    [event.target.name]:event.target.value
                });
            }
            const studentId=localStorage.getItem('studentId');

    const formsubmit=()=>{
        const _formData=new FormData();
        _formData.append('course',course_id)
        _formData.append('student',studentId)
        _formData.append('rating',ratingData.rating)
        _formData.append('review',ratingData.review)

        try {
            axios.post(baseUrl+'/course-rating/'+course_id,_formData,)
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Rating has benn saved',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar:true,
                        showCancelButton : false,
                    });
                }
                window.location.reload()
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
                    <p className='fw-bold'>total enroled: {courseData.total_enrolled_students} student</p>
                    <p className='fw-bold'>rating: {AvgRating}/5
                    { enrollStatus === 'success' && userLoginStatus === 'success' &&
                    <>                     
                    {ratingStatus!='success' && 
                       <button className='btn btn-success btn-sm ms-2' data-bs-toggle="modal" data-bs-target="#ratingModal" >Rating</button>}
                       {ratingStatus =='success' &&
                       <small className='ms-2 badge bg-info text-dark'>You already rate this course</small>
                       }
                                <div className="modal fade" id="ratingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Rate for {courseData.title}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                            <form>
                                            <div className='mb-3'>
                                                <label for="rating">Rating</label>
                                                <select onChange={handelChange}  className='form-control' name='rating'>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    </select>                                           
                                                    </div>
                                            <div className='mb-3'>
                                                <label for="review">Review</label>
                                                <textarea onChange={handelChange} className='form-control' name='review' rows={10}></textarea>
                                            </div>
                                            <input type="button" onClick={formsubmit} className="btn btn-primary" value="Submit"/>
                                            </form>
                                    </div>
                                 
                                    </div>
                                </div>
                                </div>
                    </>
                    }
                    
                    </p>
                    <p className='fw-bold'>views: {courseViews}</p>
                    { enrollStatus === 'success' && userLoginStatus === 'success' &&
                        <p><span>You are already enrolled in this course</span></p>
                    }

                    { userLoginStatus === 'success' && enrollStatus !== 'success' &&
                        <p><input type='button' className='btn btn-success' onClick={enrollCourse} value="Enroll course"/></p>
                    }

                    { userLoginStatus === 'success' && favoriteStatus !== 'success' &&
                        <p><button type='button' className='btn btn-outline-danger' onClick={markasfavorite} title='add to favorate courses' ><i className="bi bi-heart-fill"></i></button></p>
                    }

                    { userLoginStatus === 'success' && favoriteStatus === 'success' &&
                        <p><button type='button' className='btn btn-outline-danger' onClick={removefavorite} title='remove from favorate courses' ><i className="bi bi-heart-fill"></i></button></p>
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
                        <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                        <iframe src={chapter.video} title={chapter.title} allowFullScreen></iframe>
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