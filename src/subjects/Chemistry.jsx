import React,{useEffect} from 'react'
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./Chemistry.css";
import { useNavigate, useLocation } from 'react-router-dom';

const Chemistry = () => {
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
    navigate('/AttendanceChemistry', { state: { user } });
  };

  const goKsq = () => {
    navigate('/KsqChemistry', { state: { user } });
  };

  const goBack = () => {
    navigate('/Subject', { state: { user } });
  };



  return (
    <div>
      <header className='header-chemistry'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <h1 className='chemistry-title'>Kimya</h1>
      <main className='chemistry-section'>
        <div className='container-chemistry'>
          <div className='row-chemistry'>
            <div className='attendance-chemistry'>
              <p>Davamiyyət</p>
              <button onClick={goAttendance}>Buraya keçid edin</button>
            </div>
            <div className='ksq-chemistry'>
              <p>KSQ/BSQ</p>
              <button onClick={goKsq}>Buraya keçid edin</button>
            </div>
          <div className="footer-chemistry">
              <button className="exit-chemistry" onClick={goBack}>Çıxış</button>
            </div>
          </div>
          
        </div>
      </main>

    </div>
  )
}

export default Chemistry