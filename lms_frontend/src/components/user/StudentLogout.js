function StudentLogout(){
    localStorage.removeItem('studentLoginStatus')
    localStorage.setItem('studentName','Student')
    window.location.href='/user-login'
    
return(
    <div></div>
)
}
export default StudentLogout;