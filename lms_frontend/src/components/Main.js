import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import CourseDetail from './CourseDetail';
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import {Routes as Switch,Route} from 'react-router-dom';
import MyCourses from './user/MyCourses';
import FavouriteCourses from "./user/FavouriteCourses";
import RecommendedCourses from './user/RecommendedCourses';
import ProfileSetting from './user/ProfileSetting';
import ChangePassword from "./user/ChangePassword";

//Teacher

import TeacherRegister from "./teacher/TeacherRegister";
import TeacherLogin from "./teacher/TeacherLogin";
import TeacherSidebar from "./teacher/TeacherSidebar";
import TeacherCourses from "./teacher/TeacherCourses";
import TeacherDashboard from './teacher/TeacherDashboard';
import TeacherProfileSetting from './teacher/TeacherProfileSetting';
import TeacherChangePassword from './teacher/TeacherChangePassword';
import AddCourse from './teacher/AddCourse';
import UserList from './teacher/UserList';
import TeacherDetail from "./teacher/TeacherDetail";




function Main() {
  return (
    <div className="Main">
        <Header/>
        <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:course_id" element={<CourseDetail/>} />
            <Route path="/user-login" element={<Login/>} />
            <Route path="/user-register" element={<Register/>} />
            <Route path="/user-dashboard" element={<Dashboard/>} />
            <Route path="/my-courses" element={<MyCourses/>} />
            <Route path="/favorite-courses" element={<FavouriteCourses/>} />
            <Route path="/recommended-courses" element={<RecommendedCourses/>} />
            <Route path="/profile-setting" element={<ProfileSetting/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/teacher-login" element={<TeacherLogin/>} />
            <Route path="/teacher-register" element={<TeacherRegister/>} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
            <Route path="/teacher-courses" element={<TeacherCourses/>} />
            <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail/>} />

            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/my-users" element={<UserList  />} />

            


            

            

            




            


        </Switch>
         <Footer/>
    </div>
  );
}

export default Main;