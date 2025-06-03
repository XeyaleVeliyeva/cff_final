import React, { useEffect } from 'react'
import logo from './img/logo.svg';
import logo2 from './img/tehsil.svg';
import "./Subject.css"
import { useLocation, useNavigate } from 'react-router-dom';

const Subject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  useEffect(() => {
    if (!user) {
      navigate("/StudentPage");
    }
  }, [user, navigate]);

  if (!user) return null;

  const logout = () =>{
    navigate("/StudentBoard", {state:{user}});
  };

  const goMath = () =>{
    navigate("/Math",{state:{user}});
  };
  const goChemistry = () =>{
    navigate("/Chemistry",{state:{user}});
  };
  const goPhysics = () =>{
    navigate("/Physics",{state:{user}});
  };
  const goAzerbaijani = () =>{
    navigate("/Azerbaijani",{state:{user}});
  };

  return (
    <div className='subject-container'>
      <header className='header-subject'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='subjects'>
        <div className='user_info'>
        <h1>{user.name}, {user.class}</h1>
        <button className='subject-exit' onClick={logout}>Çıxış</button>
        </div>
        <div className='subject'>
          <div className='subject-row'>
            <div className='box'>
              <p>Riyaziyyat</p>
              <button className='btn-subject' onClick={goMath}>Buradan keçid edin</button>
            </div>
            <div className='box'>
              <p>Fizika</p>
              <button className='btn-subject' onClick={goPhysics}>Buradan keçid edin</button>
            </div>
          </div>
          <div className='subject-row'>
            <div className='box'>
              <p>Kimya</p>
              <button className='btn-subject' onClick={goChemistry}>Buradan keçid edin</button>
            </div>
            <div className='box'>
              <p>Azərbaycan dili</p>
              <button className='btn-subject' onClick={goAzerbaijani}>Buradan keçid edin</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Subject