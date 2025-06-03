import React from 'react';
import './KsqChemistry.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { students, studentsWithGrades } from '../fakeData';

const KsqChemistry = () => {
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

  const chemistryGrades = studentGrades.grades['kimya'];

  const average =
    (chemistryGrades.KSQ1 + chemistryGrades.KSQ2 + chemistryGrades.KSQ3 + chemistryGrades.BSQ) / 4;

  const goBack = () => {
    navigate('/Chemistry', { state: { user } });
  };

  return (
    <div className="grades-container">
      <header className='header-ksq-chemistry'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='chemistryGrades'>
        <h2>{user.name} - Kimya Qiymətləri</h2>
        <table className="grades-table-chemistry">
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
              <td>{chemistryGrades.KSQ1}</td>
              <td>{chemistryGrades.KSQ2}</td>
              <td>{chemistryGrades.KSQ3}</td>
              <td>{chemistryGrades.BSQ}</td>
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

export default KsqChemistry ;
