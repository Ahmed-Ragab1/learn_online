import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import CourseDetail from './CourseDetail';
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";

import {Routes as Switch,Route} from 'react-router-dom';
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



        </Switch>
         <Footer/>
    </div>
  );
}

export default Main;