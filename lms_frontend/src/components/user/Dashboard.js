import {NavLink} from 'react-router-dom';


function Dashboard(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <div className='card'>
                        <h5 className='card-header'>Dashboard</h5>
                        <div className='list-group list-group-flush'>               
                            <NavLink to='/' className='list-group-item list-group-item-action'>My Courses</NavLink>
                            <NavLink to='/' className='list-group-item list-group-item-action'>Favorite Courses</NavLink>
                            <NavLink to='/' className='list-group-item list-group-item-action'>Recommended Courses</NavLink>
                            <NavLink to='/' className='list-group-item list-group-item-action'> Profile Setting</NavLink>
                            <NavLink to='/' className='list-group-item list-group-item-action'>Change Password</NavLink>
                            <NavLink to='/' className='list-group-item list-group-item-action text-danger'>Logout</NavLink>
                        </div>
                    </div>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>python development</td>
                                    <td><NavLink to='/'>Ahmed</NavLink></td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
            
    )
}

export default Dashboard;