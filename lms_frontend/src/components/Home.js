import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {Link, NavLink} from 'react-router-dom';
import AllCourses from "./AllCourses";
import {useEffect,useState} from 'react'
import axios from 'axios';
import Slider from './Slider';

const baseUrl='http://127.0.0.1:8000/api';

function Home() {
  const [courseData,setCourseData]=useState([]);
  const [popularcourseData,setpopularcourseData]=useState([]);
  const [popularteachersData,setpopularteachersData]=useState([]);
  const [testimonialData,settestimonialData]=useState([]);

  



  useEffect(()=>{
    try{
      axios.get(baseUrl+'/course/?result=4')
      .then((res)=>{
        setCourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
        // popular course Data
    try{
      axios.get(baseUrl+'/popular-courses/?popular=1')
      .then((res)=>{
        setpopularcourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
    // popular teacher
    try{
      axios.get(baseUrl+'/popular-teachers/?popular=1')
      .then((res)=>{
        setpopularteachersData(res.data);
      });
    }catch(error){
      console.log(error);
    }
    // student testimonial
     try{
      axios.get(baseUrl+'/student-testimonial/')
      .then((res)=>{
        settestimonialData(res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);



  console.log(courseData);
  
    return (
      <>
        <Slider/>
      <div className="container mt-4" >
        {/* latest course */}
      <h3 className="pb-1 mb-4 mt-5">
        Latest Courses
        <NavLink to="/all-courses" className="float-end">
          See All
        </NavLink>
      </h3>

      
      <div className="row mb-4 cardmain">
      {courseData && courseData.map((course,index)=>
          
          <div className="col-md-3 mb-4 cardcontainer">
            <Card className='cardhome'>
              < NavLink to={`/detail/${course.id}`}><Card.Img variant="top" src={course.featured_img} /></NavLink>
              <Card.Body className='cardhomebody'>
                <p></p>
                <Card.Title><NavLink to={`/detail/${course.id}`}>{course.title}</NavLink></Card.Title>
              <div className='card-footer mt-1'>
                <div className='title'>
                  <span>Rating: {course.course_rating}</span>
                  <span className='float-end'>techs: {course.techs}</span>
                </div>
              </div>
              </Card.Body>
            </Card>
          </div>
       )}
      </div>
      {/*end latest course */}    

        {/* popular course */}
        <h3 className='pb-1 mb-4 mt-5'>popular Courses <NavLink to='/popular-cources' className='float-end'>see all</NavLink></h3>
        <div className="row mb-4">
        {popularcourseData && popularcourseData.map((row,index)=> 
          <div className="col-md-3">
            <Card >
            < NavLink to={`/detail/${row.course.id}`}><Card.Img variant="top" src={row.course.featured_img} /></NavLink>
              <Card.Body>
              <Card.Title><NavLink to={`/detail/${row.course.id}`}>{row.course.title}</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: {row.rating}</span>
                  <span className='float-end'>veiws: {row.course.course_views}</span>
                </div>
              </div>
            </Card>
          </div>
        )}
        </div>
        {/*end popular course */}     

         {/* popular Teachers */}
         <h3 className='pb-1 mb-4 mt-5'>Teachers<NavLink to='/popular-teachers' className='float-end'>see all</NavLink></h3>
        <div className="row mb-4">
        {popularteachersData && popularteachersData.map((teacher,index)=> 
          <div className="col-md-3">
            <Card >
              <Card.Img variant="top" src={teacher.profile_img} />
              <Card.Body>
                <Card.Title><NavLink to={`/teacher-detail/${teacher.id}`}>{teacher.full_name}</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Total Courses: {teacher.total_teacher_courses}</span>
                </div>
              </div>
            </Card>
          </div>
      )}
      </div>
        {/*end popular Teachers */}  

         {/* student testimonial */}
         {/* <h3 className='pb-1 mb-4 mt-5'>student testimonial </h3>
         <div id="carouselexmapleindicator" className='carousel slid bg-dark text-white py-5' data-bs-ride="carousel">
          <div className='carousel-indicators'>
          {testimonialData & testimonialData.map((row,index)=>
                <button type='button' data-bs-target="#carouselexmapleindicator" data-bs-slid-to={index} className={index===0? "active" :"" } ></button>
                )}
          </div>
          <div className='carousel-inner'>
          {testimonialData & testimonialData.map((row,i)=>
          <div className= {i===0?"carousel-item text-center active":"carousel-item text-center"} >
            <figure className='text-center'>
            <blockquote className='blockquote '>
            <p> {row.reviews}</p>
            </blockquote>
            <figcaption className='blockquote-footer'>
          {row.course.title} <cite title='Source Title'>{row.student.full_name}</cite>
             </figcaption>
             </figure>
          </div>
                )}
          </div>
          <button className='carousel-control-prev' type="button" data-bs-target="#carouselexmapleindicator" data-bs-slid="prev">
            <span className='carousel-control-prev-icon' aria-hidden="true"></span>
            <span className='visually-hidden' >Previous</span>
            </button>
            <button className='carousel-control-next' type="button" data-bs-target="#carouselexmapleindicator" data-bs-slid="next">
            <span className='carousel-control-next-icon' aria-hidden="true"></span>
            <span className='visually-hidden' >Next</span>
            </button>
          </div>  */}
        {/* end student testimonial */}
      </div>
      </>

    );
  }
  
  export default Home;