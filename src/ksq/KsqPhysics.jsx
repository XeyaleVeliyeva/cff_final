import React from 'react';
import './KsqPhysics.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { students, studentsWithGrades } from '../fakeData';

const KsqPhysics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate('/StudentPage');
    return null;
  }

  const studentInfo = students.find(s => s.username === user.username);
  const studentGrades = studentsWithGrades.find(s => s.username === user.username);

  if (!studentInfo || !studentGrades) {
    return <div className="grades-container">Məlumat tapılmadı.</div>;
  }

  const physicsGrades = studentGrades.grades['fizika'];

  const average =
    (physicsGrades.KSQ1 + physicsGrades.KSQ2 + physicsGrades.KSQ3 + physicsGrades.BSQ) / 4;

  const goBack = () => {
    navigate('/Physics', { state: { user } });
  };

  return (
    <div className="grades-container">
      <header className='header-ksq-physics'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='physicsGrades'>
        <h2>{user.name} - Fizika Qiymətləri</h2>
        <table className="grades-table-physics">
          <thead>
            <tr>
              <th>Ad Soyad</th>
              <th>Sinif</th>
              <th>KSQ1</th>
              <th>KSQ2</th>
              <th>KSQ3</th>
              <th>BSQ</th>
              <th>Orta Qiymət</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{studentInfo.name}</td>
              <td>{studentInfo.class}</td>
              <td>{physicsGrades.KSQ1}</td>
              <td>{physicsGrades.KSQ2}</td>
              <td>{physicsGrades.KSQ3}</td>
              <td>{physicsGrades.BSQ}</td>
              <td>{average.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </main>
      <div className="footer-ksq">
        <button className="exit-ksq" onClick={goBack}>Çıxış</button>
      </div>
    </div>
  );
};

export default KsqPhysics;
