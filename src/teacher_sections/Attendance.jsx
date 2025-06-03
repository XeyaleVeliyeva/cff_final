import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { students } from '../fakeData';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import './Attendance.css';

const Attendance = () => {
  const location = useLocation();
  const teacher = location.state?.user;
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedClass, setSelectedClass] = useState('');
  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('attendance')) || {};
    setAttendanceData(stored);
  }, []);

  const handleStatusChange = (studentId, value) => {
    const updated = { ...attendanceData };

    if (!updated[selectedDate]) updated[selectedDate] = {};
    if (!updated[selectedDate][teacher.subject]) updated[selectedDate][teacher.subject] = {};
    if (!updated[selectedDate][teacher.subject][selectedClass])
      updated[selectedDate][teacher.subject][selectedClass] = {};

    // value: '', 'present', 'absent'
    updated[selectedDate][teacher.subject][selectedClass][studentId] = value;

    setAttendanceData(updated);
    localStorage.setItem('attendance', JSON.stringify(updated));
  };

  const classList = [...new Set(students.map((s) => s.class))];
  const filteredStudents = students.filter((s) => s.class === selectedClass);
  const selectedDateAttendance =
    attendanceData?.[selectedDate]?.[teacher.subject]?.[selectedClass] || {};

  if (!teacher) return <div>İcazəsiz giriş</div>;

  const goBack = () => {
    navigate('/Classes',{ state: { user: teacher } });
  };

  return (
    <div className="attendance-container">
      <header className='header-attendance'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='main-attendance'>


      <h2>{teacher.subject} dərsinin davamiyyəti</h2>
      

      <div className="date-picker">
        <label>Tarixi seçin: </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          />
      </div>

      <div className="class-buttons">
        {classList.map((cls) => (
          <button
          key={cls}
          onClick={() => setSelectedClass(cls)}
          className={cls === selectedClass ? 'active' : ''}
          >
            {cls}
          </button>
        ))}
        <button className="exit-attendance" onClick={(goBack)}>Çıxış</button>
      </div>

      {selectedClass && (
        <div class="attendance-table-wrapper">

        <table className="attendance-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Ad</th>
              <th>Sinif</th>
              <th>Davamiyyət</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => {
              const status = selectedDateAttendance[student.id] || '';
              
              return (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>
                    <select
                      value={status}
                      onChange={(e) => handleStatusChange(student.id, e.target.value)}
                      className={`select-status ${status}`}
                      >
                      <option value="">Daxil edilməyib</option>
                      <option value="present">Gəldi</option>
                      <option value="absent">Gəlmədi</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      )}
      </main>
    </div>
  );
};

export default Attendance;
