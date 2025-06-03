import React from 'react';
import './AttendanceMath.css';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { attendanceData } from '../fakeData'; 

const AttendanceMath = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate('/StudentPage');
    return null;
  }

  const dates = ['01.06.2025', '02.06.2025', '03.06.2025'];

  const student = attendanceData.find(s => s.name === user.name);

  if (!student) {
    return <div className="attendance-container">Məlumat tapılmadı.</div>;
  }

  const goBack = () => {
    navigate('/Physics', { state: { user } });
  };

  return (
    <div className="attendance-container">
      <header className='header-attendance'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='mathAttendance'>
        <h2>Fizika Davamiyyəti</h2>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Ad Soyad</th>
              <th>Sinif</th>
              {dates.map((date) => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.name}</td>
              <td>{student.class}</td>
              {dates.map((date) => {
                const status = student.attendance[date] || '-';
                const statusClass =
                  status === '✓' ? 'present' :
                    status === '✗' ? 'absent' : 'unknown';

                return (
                  <td key={date} className={statusClass}>
                    {status}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </main>
      <div className="footer-attendance">
        <button className="exit-attendance" onClick={goBack}>Çıxış</button>
      </div>
    </div>
  );
};

export default AttendanceMath;
