import React from 'react';
import './KsqAzerbaijani.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { students, studentsWithGrades } from '../fakeData';

const KsqAzerbaijani = () => {
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

  const azerbaijaniGrades = studentGrades.grades['azərbaycan dili'];

  const average =
    (azerbaijaniGrades.KSQ1 + azerbaijaniGrades.KSQ2 + azerbaijaniGrades.KSQ3 + azerbaijaniGrades.BSQ) / 4;

  const goBack = () => {
    navigate('/Azerbaijani', { state: { user } });
  };

  return (
    <div className="grades-container">
      <header className='header-ksq-azerbaijani'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='azerbaijaniGrades'>
        <h2>{user.name} - Azərbaycan dili Qiymətləri</h2>
        <table className="grades-table-azerbaijani">
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
              <td>{azerbaijaniGrades.KSQ1}</td>
              <td>{azerbaijaniGrades.KSQ2}</td>
              <td>{azerbaijaniGrades.KSQ3}</td>
              <td>{azerbaijaniGrades.BSQ}</td>
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

export default KsqAzerbaijani;
