import React,{useEffect} from 'react'
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./Physics.css";
import { useNavigate, useLocation } from 'react-router-dom';
const Physics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  useEffect(() => {
    if (!user) {
      navigate('/StudentPage');
    }
  }, [user, navigate]);

  if (!user) return null;

  const goAttendance = () => {
    navigate('/AttendancePhysics', { state: { user } });
  };

  const goKsq = () => {
    navigate('/KsqPhysics', { state: { user } });
  };

  const goBack = () => {
    navigate('/Subject', { state: { user } });
  };
  return (
    <div>
      <header className='header-physics'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <h1 className="physics-title">Fizika</h1>
      <main className='physics-section'>
        <div className='container-physics'>
          <div className='row-physics'>
            <div className='attendance-physics'>
              <p>Davamiyyət</p>
              <button onClick={goAttendance}>Buraya keçid edin</button>
            </div>
            <div className='ksq-physics'>
              <p>KSQ/BSQ</p>
              <button onClick={goKsq}>Buraya keçid edin</button>
            </div>
          <div className="footer-physics">
              <button className="exit-physics" onClick={goBack}>Çıxış</button>
            </div>
          </div>
          
        </div>
      </main>

    </div>
  )
}

export default Physics