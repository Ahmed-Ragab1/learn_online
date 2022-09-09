import TeacherSidebar from "./TeacherSidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const baseUrl = "http://127.0.0.1:8000/api";

function TeacherDashboard() {
  const [dashboardData, setdashboardData] = useState([]);
  const teacherId = localStorage.getItem("teacherId");
  useEffect(() => {
    //fetch current course data
    try {
      axios.get(baseUrl + "/teacher/dashboard/" + teacherId).then((res) => {
        setdashboardData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(()=>{
    document.title='teacher dashboard'
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">
                  Total Courses
                </h5>
                <div className="card-body">
                  <h3>
                    <NavLink to="/teacher-courses">
                      {dashboardData.total_teacher_courses}
                    </NavLink>
                  </h3>
                </div>
              </div>
            </div>
        
          <div className="col-md-4">
            <div className="card border-success">
              <h5 className="card-header bg-info text-white">
                Total Students
              </h5>
              <div className="card-body">
                <h3>
                  <NavLink to="/teacher-users">
                    {dashboardData.total_teacher_students}
                  </NavLink>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-info">
              <h5 className="card-header bg-danger text-white">
                Total Chapters
              </h5>
              <div className="card-body">
                <h3>
                  <span className="text-primary">
                    {dashboardData.total_teacher_chapters}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default TeacherDashboard;
