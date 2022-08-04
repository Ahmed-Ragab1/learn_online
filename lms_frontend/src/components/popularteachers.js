import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios'


const baseurl = 'http://localhost:8000/api/'
function PopularTeachers(){
    const [teacher,setteacher] = useState();

    useEffect(()=>{
      axios.get(baseurl+'teacher/').then((response)=>{
        setteacher(response.data);
      })
    },[])

    console.log(teacher);


    return(
<div className='container mt-3'>
        {/* latest course */}
        <h3 className='pb-1 mb-4 mt-3'>Popular Teachers</h3>
        <div className="row">
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="teacher.png" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/teacher-detail/1'>teacher name</NavLink></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              <a href='#'><Card.Img variant="top" src="teacher.png"  /></a>
              <Card.Body>
                <Card.Title><a href='#'>teacher name</a></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              <a href='#'><Card.Img variant="top" src="teacher.png"  /></a>
              <Card.Body>
                <Card.Title><a href='#'>teacher name</a></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              <a href='#'><Card.Img variant="top" src="teacher.png"  /></a>
              <Card.Body>
                <Card.Title><a href='#'>teacher name</a></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="teacher.png"  /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>teacher name</NavLink></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="teacher.png" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>teacher name</NavLink></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="teacher.png" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>teacher name</NavLink></Card.Title>
              </Card.Body>
            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  
                </div>
              </div>
            </Card>
          </div>
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
export default PopularTeachers;