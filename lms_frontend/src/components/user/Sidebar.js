import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';
function Sidebar(){
    const [notifData,setnotifData]=useState([]);
    const studentId=localStorage.getItem('studentId');
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/student/fetch-all-notifications/'+studentId)
            .then((res)=>{
                console.log(res);
                setnotifData(res.data);
            });
        }catch(error){
            console.log(error);
        }
    },[]);

    return(
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
                        <div className='list-group list-group-flush'>       
                            <NavLink to='/user-dashboard' className='list-group-item list-group-item-action'>Dashboard</NavLink>           
                            <NavLink to='/my-courses' className='list-group-item list-group-item-action'>My Courses</NavLink>
                            <NavLink to='/favorite-courses' className='list-group-item list-group-item-action'>Favorite Courses</NavLink>
                            <NavLink to='/recommended-courses' className='list-group-item list-group-item-action'>Recommended Courses</NavLink>
                            <NavLink to='/my-assignments' className='list-group-item list-group-item-action'>Assignments <span className='float-end badge bg-danger mt-1'>{notifData.length}</span></NavLink>
                            <NavLink to='/profile-setting' className='list-group-item list-group-item-action'> Profile Setting</NavLink>
                            <NavLink to='/change-password' className='list-group-item list-group-item-action'>Change Password</NavLink>
                            <NavLink to='/user-logout' className='list-group-item list-group-item-action text-danger'>Logout</NavLink>
                        </div>
                    </div>
    )
    }
    export default Sidebar;