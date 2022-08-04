import { useParams, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function CourseDetail(){
    let {course_id}=useParams();
    return(
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src='/logo512.png' className='img-thumbnail' alt='course image'/>
                </div>
                <div className='col-8'>
                    <h3>Course Title</h3>
                    <p>Cards include a few options for working with images. Choose from appending 
                        “image caps” at either end of a card, overlaying images with card content, 
                        or simply embedding the image in a card.
                    </p>
                    <p className='fw-bold'>course by: <NavLink to='/teacher-detail/1'>teacher 1</NavLink></p>
                    <p className='fw-bold'>duration: 30 minutes</p>
                    <p className='fw-bold'>total enroled: 304 student</p>
                    <p className='fw-bold'>rating: 3/5</p>
                </div>
            </div>

            {/* course video */}
            <div className='card mt-4'>
                <h5 className='card-header'>
                    course videos
                </h5>
                <ul className='list-group list-group-flush'>

                    <li className='list-group-item'>introduction
                        <span className='float-end'>
                            <span className='me-5'> 1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>introduction
                        <span className='float-end'>
                            <span className='me-5'> 1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>introduction
                        <span className='float-end'>
                            <span className='me-5'> 1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className='list-group-item'>introduction
                        <span className='float-end'>
                            <span className='me-5'> 1 Hour 30 Minutes</span>
                            <button className='btn btn-sm btn-danger'><i class="bi-youtube"></i></button>
                        </span>
                    </li>
                
                </ul>
            </div>
{/* related course */}
            <h3 className='pb-1 mb-4 mt-5'>related Courses <a href='#' className='float-end'>see all</a></h3>
        <div className="row">
          <div className="col-md-3">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="/logo512.png" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="/logo512.png" /></a>
              <Card.Body>
                <Card.Title><a href='#'>course Title</a></Card.Title>
              </Card.Body>
            </Card>
          </div>
          </div>

        </div>
    );
}

export default CourseDetail;