
import { Card } from 'react-bootstrap/Card';
import TeacherSidebar from './TeacherSidebar';
function AddCourse(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                        <div class="mb-3 row">
                        <label for="title" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="title" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="description"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="course_video" class="col-sm-2 col-form-label">Course Video</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control" id="course_video" />
                        </div>
                        </div>
                        <div class="mb-3 row">
                        <label for="technologies" class="col-sm-2 col-form-label">Technologies</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" id="technologies"/>
                        </div>
                        </div>
                       <button className='btn btn-primary'>Submit</button>
                       
                        </div>
                    </div>
                
                </section>
            </div>
        </div>
            
    )
}

export default AddCourse;