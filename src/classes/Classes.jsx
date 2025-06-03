import React,{useEffect} from 'react'
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./Classes.css";
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  useEffect(() => {
    if (!user) {
      navigate("/TeacherPage");
    }
  }, [user, navigate]);

  if (!user) return null;

  const logout = () =>{
    navigate("/TeacherBoard", {state:{user}});
  };

  const goAttendance = () =>{
    navigate("/Attendance",{state:{user}});
  };
  
  const goKsq = () =>{
    navigate("/Ksq",{state:{user}});
  };

  
  
  return (
    <div>
      <header className="header-class">
        <img src={logo}  alt="logo" className="logo" />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className="logo" />
      </header>

      <main className="class-teacher">
        <div className="teacher_info">
          <h1>{user.name} — {user.subject}</h1>
          <button className="class-exit" onClick={logout}>Çıxış</button>
        </div>

        <div className="class">
          <div className="class-row">
            <div className="box">
              <p>Davamiyyət</p>
              <button className="btn-class" onClick={goAttendance}>Buradan keçid edin</button>
            </div>
            <div className="box">
              <p>KSQ/BSQ</p>
              <button className="btn-class" onClick={goKsq}>Buradan keçid edin</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Classes