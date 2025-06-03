import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { students } from '../fakeData'; 
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import "./StudentPage.css";

const StudentPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    const user = students.find(
      (student) => student.username === username && student.password === password
    );

    if (user) {
      navigate("/StudentBoard", { state: { user } });
    } else {
      setError("İstifadəçi adı və ya parol yanlışdır");
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='container-student'>
        <header className='header-student'>
          <img src={logo} alt="logo" className='logo' />
          <h1>Təhsildə rəqəmsal gələcək!</h1>
          <img src={logo2} alt="logo" className='logo' />
        </header>
        <main className='content-student'>
          <div className='login-student'>
          <h1 >Şagird üçün qeydiyyat</h1>
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
              <div className='studentpage-buttons'>

              <button className='btn-submit' type='submit'>Daxil ol</button>
              <button className="btn-exit" onClick={goBack}>Çıxış</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentPage;
