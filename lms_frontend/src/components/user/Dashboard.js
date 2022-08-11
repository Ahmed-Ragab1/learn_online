import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const baseUrl = "http://127.0.0.1:8000/api";

function Dashboard() {
  const [dashboardData, setdashboardData] = useState([]);
  const studentId = localStorage.getItem("studentId");
  useEffect(() => {
    //fetch current course data
    try {
      axios.get(baseUrl + "/student/dashboard/" + studentId).then((res) => {
        setdashboardData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-primary">
                <h5 className="card-header bg-success text-white">
                  Enrolled Courses
                </h5>
                <div className="card-body">
                  <h3>
                    <NavLink to="/my-courses">
                      {dashboardData.enrolled_courses}
                    </NavLink>
                  </h3>
                </div>
              </div>
            </div>
        
          <div className="col-md-4">
            <div className="card border-success">
              <h5 className="card-header bg-info text-white">
                Favourite Courses
              </h5>
              <div className="card-body">
                <h3>
                  <NavLink to="/favorite-courses">
                    {dashboardData.favourite_courses}
                  </NavLink>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-info">
              <h5 className="card-header bg-danger text-white">
                Assignments
              </h5>
              <div className="card-body">
                <h5>
                <NavLink to="/my-assignments"> Completed: {dashboardData.complete_assignments} ,Pending:   {dashboardData.pending_assignments}</NavLink> 
                </h5>
                
              </div>
            </div>
          </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Dashboard;
