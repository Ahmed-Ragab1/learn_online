function TeacherLogout(){
    localStorage.removeItem('teacherLoginStatus')
    localStorage.setItem('teacherName','Teacher')
    window.location.href='/teacher-login'
    
return(
    <div></div>
)
}
export default TeacherLogout