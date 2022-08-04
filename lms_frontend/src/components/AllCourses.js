import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

function AllCourses(){
    return(
<div className='container mt-3'>
        {/* latest course */}
        <div className="row">
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="node.jpg" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="node.jpg" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="node.jpg" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="node.jpg" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="node.jpg" /></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 mb-4">
            <Card >
              < NavLink to='/detail/1'><Card.Img variant="top" src="python.jpg" height="270px"/></NavLink>
              <Card.Body>
                <Card.Title><NavLink to='/detail/1'>course Title</NavLink></Card.Title>
              </Card.Body>
            </Card>
          </div>
  
                 </div>
        {/*end latest course */}    
        {/* Pagination */}
        <nav aria-label="Page navigation example mt-5">
  <ul class="pagination justify-content-center">
    <li className="page-item"><a class="page-link" href="#">Previous</a></li>
    <li className="page-item"><a class="page-link" href="#">1</a></li>
    <li className="page-item"><a class="page-link" href="#">2</a></li>
    <li className="page-item"><a class="page-link" href="#">3</a></li>
    <li className="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
                {/* Pagination */}

        </div>
    )

}
export default AllCourses;