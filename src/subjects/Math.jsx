import React, { useEffect } from 'react';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import './Math.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Math = () => {
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
    navigate('/AttendanceMath', { state: { user } });
  };

  const goKsq = () => {
    navigate('/KsqMath', { state: { user } });
  };

  const goBack = () => {
    navigate('/Subject', { state: { user } });
  };

  return (
    <div>
      <header className="header-math">
        <img src={logo} alt="logo" className="logo" />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className="logo" />
      </header>
      <h1 className="math-title">Riyaziyyat</h1>
      <main className="math-section">
        <div className="container-math">
          <div className="row-math">
            <div className="attendance-math">
              <p>Davamiyyət</p>
              <button onClick={goAttendance}>Buraya keçid edin</button>
            </div>
            <div className="ksq-math">
              <p>KSQ/BSQ</p>
              <button onClick={goKsq}>Buraya keçid edin</button>
            </div>
            <div className="footer-math">
              <button className="exit-math" onClick={goBack}>Çıxış</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Math;
