import {NavLink} from 'react-router-dom';

function Register(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h5 className='card-header'>User Register</h5>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>Full Name</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>Email</label>
                                    <input type='email' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>Password</label>
                                    <input type='password' className='form-control' id='exampleInputPassword1'/>
                                </div>
                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>Interests</label>
                                    <textarea className='form-control'></textarea>
                                    <div className='form-text'>html, css, js, etc</div>
                                </div>

                                <button type='submit' className='btn btn-primary'>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Register;