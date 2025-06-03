import React from 'react';
import './KsqMath.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { students, studentsWithGrades } from '../fakeData';

const KsqMath = () => {
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

  const mathGrades = studentGrades.grades['riyaziyyat'];

  const average =
    (mathGrades.KSQ1 + mathGrades.KSQ2 + mathGrades.KSQ3 + mathGrades.BSQ) / 4;

  const goBack = () => {
    navigate('/Math', { state: { user } });
  };

  return (
    <div className="grades-container">
      <header className='header-ksq-math'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='mathGrades'>
        <h2>{user.name} - Riyaziyyat Qiymətləri</h2>
        <table className="grades-table-math">
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
              <td>{mathGrades.KSQ1}</td>
              <td>{mathGrades.KSQ2}</td>
              <td>{mathGrades.KSQ3}</td>
              <td>{mathGrades.BSQ}</td>
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

export default KsqMath;
