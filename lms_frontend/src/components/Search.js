import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const baseUrl='http://127.0.0.1:8000/api';

function Search(props){
  const [courseData,setCourseData]=useState([]);

  // const [searchstring]=useParams();

  const searchstring=localStorage.getItem('search')

  useEffect(()=>{
    try{
      axios.get(baseUrl+'/search-course/'+searchstring)
      .then((res)=>{
        setCourseData(res.data);
      });
    }catch(error){
      console.log(error);
    }
  },[]);



  useEffect(()=>{
    document.title=`course ${searchstring}`
  });

  

    return(
<div className='container mt-3 searchimg'>
        {/* latest course */}
        <h3 className='pb-1 mb-4 mt-3'>Searched For <span className='text-primary'>{searchstring}</span></h3>
        <div className="row mb-4">
          {courseData && courseData.map((course,index)=>
          
          <div className="col-md-3 mb-4 ">
            <Card >
              < NavLink to={`/detail/${course.id}`}><Card.Img className="card-img" src={course.featured_img} /></NavLink>
              <Card.Body>
                <Card.Title><NavLink className="btn btn-outline-primary w-100" to={`/detail/${course.id}`}><i class='fa fa-sign-in-alt'>{course.title} details</i></NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
       )}
        </div>
        {/*end latest course */}

        </div>
    )

}
export default Search;