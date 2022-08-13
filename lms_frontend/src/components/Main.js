import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import CourseDetail from './CourseDetail';

// user
import Login from "./user/Login";
import Logout from "./user/StudentLogout";
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
// user study materials
import UserStudyMaterials from "./user/userStudyMaterials";
//Teacher

import TeacherRegister from "./teacher/TeacherRegister";
import TeacherLogin from "./teacher/TeacherLogin";
import TeacherLogout from "./teacher/TeacherLogout";

import TeacherSidebar from "./teacher/TeacherSidebar";
import TeacherCourses from "./teacher/TeacherCourses";
import EnrolledStudents from "./teacher/EnrolledStudents";
import AddCourse from "./teacher/AddCourse";
import EditCourse from "./teacher/EditCourse";
import AddChapter from "./teacher/AddChapter";
import AllChapters from "./teacher/CourseChapters";
import EditChapter from "./teacher/EditChapter";


import TeacherDashboard from './teacher/TeacherDashboard';
import TeacherProfileSetting from './teacher/TeacherProfileSetting';
import TeacherChangePassword from './teacher/TeacherChangePassword';
import UserList from './teacher/UserList';
import AddAssignment from './teacher/AddAssignment';
import ShowAssignment from './teacher/ShowAssignment';
import StudentAssignments from './user/StudentAssignments';
import PopularTeachers from "./popularteachers";


import CategoryCourses from "./CategoryCourses";
import TeacherSkillCourses from "./teacher/TeacherSkillCourses";

import AddQuiz from "./teacher/AddQuiz";
import AllQuiz from "./teacher/AllQuiz";
import EditQuiz from './teacher/EditQuiz';
import CourseQuizList from './user/CourseQuizList';
import TakeQuiz from './user/TakeQuiz';



import QuizQustions from "./teacher/QuizQustions";


import AddQuizeQustion from "./teacher/AddQuizeQustion";

import AssignQuiz from "./teacher/AssignQuiz";
import Search from "./Search";

// course study matirials
import StudyMaterials from "./teacher/StudyMaterials";
import AddStudyMaterial from "./teacher/AddStudyMaterial";




function Main() {
  return (
    <div className="Main">
        <Header/>
        <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:course_id" element={<CourseDetail/>} />
            <Route path="/search-courses/:searchstring" element={<Search/>} />
            <Route path="/user-login" element={<Login/>} />
            <Route path="/user-logout" element={<Logout/>} />
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
            <Route path="/enrolled-students/:course_id" element={<EnrolledStudents/>} />
            <Route path="/teacher-profile-setting" element={<TeacherProfileSetting/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword/>} />
            <Route path="/add-course" element={<AddCourse/>} />
            <Route path="/edit-course/:course_id" element={<EditCourse/>} />

            <Route path="/add-chapter/:course_id" element={<AddChapter/>} />
            
            <Route path="/add-assignment/:teacher_id/:student_id" element={<AddAssignment/>} />

            
            <Route path="/my-assignments/" element={<StudentAssignments/>} />


            <Route path="/show-assignment/:teacher_id/:student_id" element={<ShowAssignment/>} />

            <Route path="/teacher-users" element={<UserList  />} />


            <Route path="/teacher-skill-courses/:skill_name/:teacher_id" element={<TeacherSkillCourses/>} />

            <Route path="/quiz" element={<AllQuiz  />} />
            <Route path="/add-quiz" element={<AddQuiz  />} />
            <Route path="/edit-quiz/:quiz_id" element={<EditQuiz  />} />


            <Route path="/all-questions/:quiz_id" element={<QuizQustions  />} />

            <Route path="/add-quiz-question/:quiz_id" element={<AddQuizeQustion  />} />

            <Route path="/assign-quiz/:course_id" element={<AssignQuiz  />} />

            <Route path="/course-quiz/:course_id" element={<CourseQuizList  />} />

            <Route path="/take-quiz/:quiz_id" element={<TakeQuiz  />} />


            <Route path="/study-materials/:course_id" element={<StudyMaterials/>} />
            <Route path="/add-study/:course_id" element={<AddStudyMaterial/>} />

            <Route path="/user/study-materials/:course_id" element={<UserStudyMaterials/>} />
            

            
            

        </Switch>
         <Footer/>
    </div>
  );
}

export default Main;