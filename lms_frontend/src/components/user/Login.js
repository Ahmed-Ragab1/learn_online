import {NavLink} from 'react-router-dom';


function Login(){
    return(
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h5 className='card-header'>User Login</h5>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label for='exampleInputEmail' className='form-label'>User Name</label>
                                    <input type='text' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='exampleInputPassword1' className='form-label'>Password</label>
                                    <input type='password' className='form-control' id='exampleInputPassword1'/>
                                </div>

                                <div className='mb-3 form-check'>
                                    <input type='checkbox' className='form-check-input' id='exampleCheck1'/>
                                    <label for='exampleCheck1' className='form-check-label'>Remember Me</label>
                                </div>
                                <button type='submit' className='btn btn-primary'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Login;