import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function PopularCourses(){
  const [courseData,setCourseData]=useState([]);


  useEffect(()=>{
    try{
      axios.get(baseUrl+'/popular-courses/?all=1')
      .then((res)=>{
        setCourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);
    return(
<div className='container mt-3'>
        {/* latest course */}
        <h3 className='pb-1 mb-4 mt-3'>Latest Courses</h3>
        <div className="row">
        {courseData && courseData.map((row,index)=> 
          <div className="col-md-3 mb-4">
            <Card >
            <NavLink to={`/detail/${row.course.id}`}><Card.Img variant="top" src={row.course.featured_img} /></NavLink>
              <Card.Body>
              <Card.Title><NavLink to={`/detail/${row.course.id}`}>{row.course.title}</NavLink></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                <span>Rating: {row.rating}</span>
                  <span className='float-end'>veiws: 2300</span>
                </div>
              </div>
            </Card>
          </div>
        )}
        </div>
        {/*end latest course */}   
        {/* Pagination  */}
        <nav aria-label="Page navigation example mt-5">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
                {/* Pagination  */}

        </div>
    )

}
export default PopularCourses;