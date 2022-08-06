import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import CourseDetail from './CourseDetail';
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import PopularCourses from "./popularcourses";


import {Routes as Switch,Route} from 'react-router-dom';
import TeacherDetail from "./teacher/TeacherDetail";
import AllCourses from './AllCourses'
import MyCourses from './user/MyCourses';
import FavouriteCourses from "./user/FavouriteCourses";
import RecommendedCourses from './user/RecommendedCourses';
import ProfileSetting from './user/ProfileSetting';
import ChangePassword from "./user/ChangePassword";

//Teacher

import TeacherRegister from "./teacher/TeacherRegister";
import TeacherLogin from "./teacher/TeacherLogin";
import TeacherLogout from "./teacher/TeacherLogout";

import TeacherSidebar from "./teacher/TeacherSidebar";
import TeacherCourses from "./teacher/TeacherCourses";
import AddCourse from "./teacher/AddCourse";
import AddChapter from "./teacher/AddChapter";
import AllChapters from "./teacher/CourseChapters";
import EditChapter from "./teacher/EditChapter";


import TeacherDashboard from './teacher/TeacherDashboard';
import TeacherProfileSetting from './teacher/TeacherProfileSetting';
import TeacherChangePassword from './teacher/TeacherChangePassword';
import UserList from './teacher/UserList';
import PopularTeachers from "./popularteachers";


import CategoryCourses from "./CategoryCourses";




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

            <Route path="/popular-cources" element={<PopularCourses/>} />
            <Route path="/popular-teachers" element={<PopularTeachers/>} />
            <Route path="/category/:category_slug" element={<CategoryCourses/>} />
            <Route path="/edit-chapter/:chapter_id" element={<EditChapter/>} />

            <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail/>} />
            <Route path="/all-courses" element={<AllCourses/>} />
            <Route path="/all-chapters/:course_id" element={<AllChapters/>} />
            <Route path="/my-courses" element={<MyCourses/>} />
            <Route path="/favorite-courses" element={<FavouriteCourses/>} />
            <Route path="/recommended-courses" element={<RecommendedCourses/>} />
            <Route path="/profile-setting" element={<ProfileSetting/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/teacher-login" element={<TeacherLogin/>} />
            <Route path="/teacher-logout" element={<TeacherLogout/>} />

            <Route path="/teacher-register" element={<TeacherRegister/>} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
            <Route path="/teacher-courses" element={<TeacherCourses/>} />
            <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/add-chapter/:course_id" element={<AddChapter/>} />

            <Route path="/my-users" element={<UserList  />} />

            


            

            

            




            


        </Switch>
         <Footer/>
    </div>
  );
}

export default Main;