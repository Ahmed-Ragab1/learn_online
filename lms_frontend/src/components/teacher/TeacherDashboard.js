
import TeacherSidebar from './TeacherSidebar';
function TeacherDashboard(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                </section>
            </div>
        </div>
            
    )
}

export default TeacherDashboard;