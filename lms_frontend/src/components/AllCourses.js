import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function AllCourses(){
  const [courseData,setCourseData]=useState([]);

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/course/')
      .then((res)=>{
        setCourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);

    return(

<div className='container mt-3 allcourses'>
        {/* latest course */}
        <h3 className='pb-1 mb-4 mt-3'>All Courses</h3>
        <div className="row mb-4">
          {courseData && courseData.map((course,index)=>
          
          <div className="col-md-3 mb-4 cardcontainer">
            <Card className='cardhome'>
              < NavLink to={`/detail/${course.id}`}><Card.Img variant="top" src={course.featured_img} height='150px' /></NavLink>
              <Card.Body className='cardhomebody' >
                <Card.Title><NavLink to={`/detail/${course.id}`} style={{textDecoration: 'none'}}>{course.title}</NavLink></Card.Title>
                <div className='card-footer mt-4'>
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

        </div>
    )

}
export default AllCourses;