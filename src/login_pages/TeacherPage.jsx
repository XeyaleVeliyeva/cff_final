import React from 'react'
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./TeacherPage.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { teachers } from '../fakeData';
const TeacherPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    const user = teachers.find(
      (teacher) => teacher.username === username && teacher.password === password
    );

    if (user) {
      navigate("/TeacherBoard", { state: { user } });
    } else {
      setError("İstifadəçi adı və ya parol yanlışdır");
    }
  };
const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='container-teacher'>
        <header className='header-teacher'>
          <img src={logo} alt="logo" className='logo' />
          <h1>Təhsildə rəqəmsal gələcək!</h1>
          <img src={logo2} alt="logo" className='logo' />
        </header>
        <main className='content-teacher'>
          <div className='login-teacher'>
          <h1>Müəllim üçün qeydiyyat</h1>
            <form onSubmit={login}>
              <p>İstifadəçi adınızı qeyd edin</p>
              <input
                type="text"
                placeholder='Enter username...'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <p>Parolunuzu qeyd edin</p>
              <input
                type="password"
                placeholder='Enter password...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className='teacherpage-buttons'>
              <button className='btn-submit' type='submit'>Daxil ol</button>
              <button className="btn-exit" onClick={goBack}>Çıxış</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
    )
}

export default TeacherPage