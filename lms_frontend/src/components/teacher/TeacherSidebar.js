import {NavLink} from 'react-router-dom';


    function TeacherSidebar(){
    return(
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
                        <div className='list-group list-group-flush'>       
                            <NavLink to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</NavLink>           
                            <NavLink to='/teacher-courses' className='list-group-item list-group-item-action'>My Courses</NavLink>
                            <NavLink to='/add-course' className='list-group-item list-group-item-action'>Add Course</NavLink>
                            <NavLink to='/teacher-users' className='list-group-item list-group-item-action'>My Users</NavLink>
                            <NavLink to='/teacher-profile-setting' className='list-group-item list-group-item-action'> Profile Setting</NavLink>
                            <NavLink to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</NavLink>
                            <NavLink to='/teacher-logout' className='list-group-item list-group-item-action text-danger'>Logout</NavLink>
                        <NavLink to='/quiz' className='list-group-item list-group-item-action'>Quiz</NavLink>
                        <NavLink to='/add-quiz' className='list-group-item list-group-item-action'>Add Quiz</NavLink>



                        </div>
        </div>
    )
    }
    export default TeacherSidebar;
     