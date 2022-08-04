import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {Link, NavLink} from 'react-router-dom';
import AllCourses from "./AllCourses";
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'Welcome to LMS';
  });
    return (
      <div className="container mt-4" >
        {/* latest course */}
      <h3 className="pb-1 mb-4 mt-5">
        Latest Courses
        <NavLink to="/all-courses" className="float-end">
          See All
        </NavLink>
      </h3>

      <div className="row">
        <div className="col-md-3 mb-4">
          <Card>
            <NavLink to="/detail/1">
              <Card.Img variant="top"src="node.jpg" />
            </NavLink>
            <Card.Body>
              <Card.Title>
                <NavLink to="/detail/1">course Title</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-4">
          <Card>
            <a href="#">
              <Card.Img variant="top" src="flask.jpg"  height="169px"/>
            </a>
            <Card.Body>
              <Card.Title>
              <NavLink to="/detail/1">course Title</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 mb-4">
          <Card>
            <NavLink to="/detail/1">
              <Card.Img variant="top"src="node.jpg" />
            </NavLink>
            <Card.Body>
              <Card.Title>
                <NavLink to="/detail/1">course Title</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card>
            <NavLink to="/detail/1">
              <Card.Img variant="top" src="python.jpg"/>
            </NavLink>
            <Card.Body>
              <Card.Title>
                <NavLink to="/detail/1">course Title</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/*end latest course */}    

        {/* popular course */}
        <h3 className='pb-1 mb-4 mt-5'>popular Courses <Link to='/popular-cources' className='float-end'>see all</Link></h3>
        <div className="row mb-4">
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><a href='#'>course Title</a></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  <span className='float-end'>veiws: 200</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><a href='#'>course Title</a></Card.Title>
              </Card.Body>
                            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  <span className='float-end'>veiws: 200</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><a href='#'>course Title</a></Card.Title>
              </Card.Body>
                            <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  <span className='float-end'>veiws: 200</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><a href='#'>course Title</a></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                  <span className='float-end'>veiws: 200</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/*end popular course */}     

         {/* popular Teachers */}
         <h3 className='pb-1 mb-4 mt-5'>popular Teachers<Link to='/popular-teachers' className='float-end'>see all</Link></h3>
        <div className="row mb-4">
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><NavLink to='/teacher-detail/1'>Teacher Name</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><NavLink to='/teacher-detail/1'>Teacher Name</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><NavLink to='/teacher-detail/1'>Teacher Name</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-3">
            <Card >
              <a href='#'><Card.Img variant="top" src="logo512.png" /></a>
              <Card.Body>
                <Card.Title><NavLink to='/teacher-detail/1'>Teacher Name</NavLink></Card.Title>
              </Card.Body>
              <div className='card-footer'>
                <div className='title'>
                  <span>Rating: 4.5/5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/*end popular Teachers */}  

         {/* student testimonial */}
         <h3 className='pb-1 mb-4 mt-5'>student testimonial </h3>
         <Carousel className='bg-dark text-white py-5 '>
      <Carousel.Item>
      <figure className='text-center'>
      <blockquote className='blockquote '>
          <p> well known person</p>
        </blockquote>
        <figcaption className='blockquote-footer'>
          famouse<cite title='Source Title'>titile</cite>
        </figcaption>
        </figure>
       
      </Carousel.Item>
      <Carousel.Item>
      <figure className='text-center'>
      <blockquote className='blockquote '>
          <p> well known person</p>
        </blockquote>
        <figcaption className='blockquote-footer'>
          famouse<cite title='Source Title'>titile</cite>
        </figcaption>
        </figure>

        
      </Carousel.Item>
      <Carousel.Item>
        <figure className='text-center'>
      <blockquote className='blockquote '>
          <p> well known person</p>
        </blockquote>
        <figcaption className='blockquote-footer'>
          famouse<cite title='Source Title'>titile</cite>
        </figcaption>
        </figure>
       
      </Carousel.Item>
    </Carousel>
        {/* end student testimonial */}
      </div>
    );
  }
  
  export default Home;