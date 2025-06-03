import React,{useEffect}from 'react'
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./Azerbaijani.css";
import { useNavigate, useLocation } from 'react-router-dom';

const Azerbaijani = () => {
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
    navigate('/AttendanceAzerbaijani', { state: { user } });
  };

  const goKsq = () => {
    navigate('/KsqAzerbaijani', { state: { user } });
  };

  const goBack = () => {
    navigate('/Subject', { state: { user } });
  };
  return (
    <div>
      <header className='header-azerbaijani'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <h1 className="azerbaijani-title">Azərbaycan dili</h1>
      <main className='azerbaijani-section'>
        <div className='container-azerbaijani'>
          <div className='row-azerbaijani'>
            <div className='attendance-azerbaijani'>
              <p>Davamiyyət</p>
              <button onClick={goAttendance}>Buraya keçid edin</button>
            </div>
            <div className='ksq-azerbaijani'>
              <p>KSQ/BSQ</p>
              <button onClick={goKsq}>Buraya keçid edin</button>
            </div>
          <div className="footer-azerbaijani">
              <button className="exit-azerbaijani" onClick={goBack}>Çıxış</button>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default Azerbaijani