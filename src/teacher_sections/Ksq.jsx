import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { students } from '../fakeData';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import './Ksq.css'; 

const Ksq = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const teacher = location.state?.user;

  const [selectedClass, setSelectedClass] = useState('');
  const [grades, setGrades] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!teacher) return <div>İcazəsiz giriş</div>;

  const classList = [...new Set(students.map((s) => s.class))];
  const filteredStudents = students.filter((s) => s.class === selectedClass);

  const handleGradeChange = (studentId, type, value) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [type]: value,
      },
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleChange = () => {
    setIsSubmitted(false);
  };

  const handleExit = () => {
    navigate('/Classes',{ state: { user: teacher } });
  };

  return (
    <div className="ksq-container">
      <header className='header-ksq'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='grades'>

        <h1>Xoş gəlmisiniz, {teacher.name} müəllim!</h1>
        <p>Fənn: {teacher.subject}</p>

        <div className="class-buttons">
          {classList.map((cls) => (
            <button
              key={cls}
              onClick={() => {
                setSelectedClass(cls);
                setIsSubmitted(false);
              }}
              className={cls === selectedClass ? 'active' : ''}
            >
              {cls}
            </button>
            
          ))}
          <button className='exit-ksq' onClick={handleExit}>Çıxış</button>
        </div>

        {selectedClass && (
          <>
            <div className="table-responsive">
              <table className="grades-table">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Ad</th>
                    <th>Sinif</th>
                    <th>KSQ1</th>
                    <th>KSQ2</th>
                    <th>KSQ3</th>
                    <th>BSQ</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => {
                    const grade = grades[student.id] || { ksq1: '', ksq2: '', ksq3: '', bsq: '' };

                    return (
                      <tr key={student.id}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grade.ksq1}
                            onChange={(e) => handleGradeChange(student.id, 'ksq1', e.target.value)}
                            readOnly={isSubmitted}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grade.ksq2}
                            onChange={(e) => handleGradeChange(student.id, 'ksq2', e.target.value)}
                            readOnly={isSubmitted}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grade.ksq3}
                            onChange={(e) => handleGradeChange(student.id, 'ksq3', e.target.value)}
                            readOnly={isSubmitted}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grade.bsq}
                            onChange={(e) => handleGradeChange(student.id, 'bsq', e.target.value)}
                            readOnly={isSubmitted}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="ksq-buttons">
              {!isSubmitted && (
                <button onClick={handleSubmit} className="submit-ksq">
                  Submit
                </button>
              )}
              {isSubmitted && (
                <button onClick={handleChange} className="change-btn">
                  Change
                </button>
              )}
              <button onClick={handleExit} className="exit-ksq">
                Exit
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Ksq;