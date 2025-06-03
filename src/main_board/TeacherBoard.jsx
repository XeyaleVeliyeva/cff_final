import React, { useRef } from 'react';
import './TeacherBoard.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const TeacherBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const user = location.state?.user;

  if (!user) {
    navigate("/TeacherPage");  
    return null; 
  }

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logout = () => {
  navigate("/");
};

  const goClass = ()=>{
    navigate("/Classes", {state:{user}})
  }


  return (
    <div className="teacherboard-container">
      <div className='content-teacherboard'>

      <header className='header-teacherboard'>
        <img src={logo} alt="logo" className='logo'/>
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo'/>
      </header>
      <main className='welcome-teacherboard'>
      <h1>Xoş gəlmisiniz, {user.name}!</h1>
      <div className='teacherboard-buttons'>

          <button onClick={scrollToDetails} className="teacherboard-button">
            Ətraflı
          </button>
          <button onClick={logout} className='exit'>Çıxış</button>
          </div>
      </main>
      </div>

      <div className="teacherboard-spacer"></div>

      <div ref={detailsRef} className="teacherboard-details">
        <h2>Müəllim haqqında ümumi məlumat</h2>
        <ul>
          <li>Müəllimin adı və soyadı: {user.name}</li>
          <li>Tədris etdiyi fənn: {user.subject}</li>
          <li>Müəllim ID: {user.id}</li>
          <li>Əlaqə nömrəsi: {user.phone}</li>
        </ul>
        <div className='teacherboard-categories'>
          <button onClick={goClass} className='btn-st'>Siniflər</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherBoard;
