import {NavLink} from 'react-router-dom';


    function Sidebar(){
    return(
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
                        <div className='list-group list-group-flush'>       
                            <NavLink to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</NavLink>           
                            <NavLink to='/my-courses' className='list-group-item list-group-item-action'>My Courses</NavLink>
                            <NavLink to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</NavLink>
                            <NavLink to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</NavLink>
                            <NavLink to='/profile-setting' className='list-group-item list-group-item-action'> Profile Setting</NavLink>
                            <NavLink to='/change-password' className='list-group-item list-group-item-action'>Change Password</NavLink>
                            <NavLink to='/logout' className='list-group-item list-group-item-action text-danger'>Logout</NavLink>
                        </div>
                    </div>
    )
    }
    export default Sidebar;
     