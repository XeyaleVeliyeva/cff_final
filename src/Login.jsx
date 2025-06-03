import React from 'react';
import logo from './img/logo.svg';
import logo2 from './img/tehsil.svg';
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='container'>

      <header className='header'>
        <img src={logo} alt="logo" className='logo'/>
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo'/>
      </header>

      <main className='content'>
        <div className='login'>
          <button className='btn student' onClick={()=>navigate("/StudentPage")}>Şagird üçün</button>
          <button className='btn teacher' onClick={()=>navigate("/TeacherPage")}>Müəllim üçün</button>
        </div>
      </main>

    </div>
  );
};

export default Login;
