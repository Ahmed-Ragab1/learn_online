import React from "react";
import { NavLink,Link } from "react-router-dom";

export default function TeacherDetail() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img
            src="/logo512.png"
            className="img-thumbnail"
            alt="Teacher image"
          />
        </div>
        <div className="col-8">
          <h3>Ahmed Shebl</h3>
          <p>
            Cards include a few options for working with images. Choose from
            appending “image caps” at either end of a card, overlaying images
            with card content, or simply embedding the image in a card.
          </p>
          <p className="fw-bold">
            Skills<NavLink to="/teacher-detail/1"> Php</NavLink>,
            <NavLink to="/teacher-detail/1"> Php</NavLink>,
            <NavLink to="/teacher-detail/1"> Php</NavLink>
          </p>
          <p className="fw-bold">Recent Courses: <NavLink to="/teacher-detail/1"> node js</NavLink></p>
          <p className="fw-bold">rating: 3/5</p>
        </div>
      </div>

      {/* course video */}
      <div className="card mt-4">
        <h5 className="card-header">Course List</h5>
        <div className="list-group list-group-flush">
<Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course1</Link>
<Link to="/detail/1"className="list-group-item list-group-item-action">PHP Course2</Link>

        </div>
      </div>
    </div>
  );
}
