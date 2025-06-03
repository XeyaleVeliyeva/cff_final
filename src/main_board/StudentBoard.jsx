import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StudentBoard.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useEffect } from 'react';

const StudentBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const detailsRef = useRef(null);

  const user = location.state?.user;

  useEffect(() => {
      if (!user) {
        navigate("/StudentPage");
      }
    }, [user, navigate])
    if (!user) {
    return null; 
  }

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logout = () =>{
    navigate("/");
  }

  const goSubject = () =>{
    navigate("/Subject", { state: { user } });
  };

  const goExam = () =>{
    navigate("/Exam", { state: { user } });
  };
  const goClubs = () =>{
    navigate("/Clubs", { state: { user } });
  };

  return (
    <div className="studentboard-container">
      <div className='content-studentboard'>
        <header className='header-studentboard'>
          <img src={logo} alt="logo" className='logo' />
          <h1>Təhsildə rəqəmsal gələcək!</h1>
          <img src={logo2} alt="logo" className='logo' />
        </header>
        <main className='welcome-studentboard'>
          <h1>Xoş gəlmisiniz, {user.name}!</h1>
          <div className='studentboard-buttons'>

          <button onClick={scrollToDetails} className="studentboard-button">
            Ətraflı
          </button>
          <button onClick={logout} className='exit'>Çıxış</button>
          </div>
        </main>
      </div>

      <div className="studentboard-spacer"></div>

      <div ref={detailsRef} className="studentboard-details">
        <h2>Şagird haqqında ümumi məlumat</h2>
        <ul>
          <li>Şagirdin adı və soyadı: {user.name}</li>
          <li>Sinif: {user.class}</li>
          <li>Şagird ID: {user.id}</li>
          <li>Əlaqə nömrəsi: {user.phone}</li>
        </ul>
        <div className='studentboard-categories'>
          <button onClick={goSubject} className='btn-st'>Fənnlər</button>
          <button className='btn-st exam' onClick={goExam}>Sınaq</button>
          <button className='btn-st clubs' onClick={goClubs}>Klublar</button>
        </div>
      </div>
    </div>
  );
};

export default StudentBoard;
