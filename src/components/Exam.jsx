import React, { useState } from 'react';
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import './Exam.css';
import { useNavigate,useLocation} from 'react-router-dom';


const Exam = () => {
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/StudentBoard',{ state: { user } });
  };
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    grade: '',
    date: '',
    subject: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // console.log(formData);
  };

  return (
    <div className="exam-container">
      <header className='header-exam'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>

      <main className="exam-content">
        <h2>Şagird məlumatları</h2>
        <form className="exam-form" onSubmit={handleSubmit}>
          <label>
            Ad Soyad:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Şagird ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Oxuduğunuz sinif:
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Ayın neçəsində sınağa qatılmaq istəyirsiniz?
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Hansı fəndən sınağa qatılmaq istəyirsiniz?
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Fənni seçin</option>
              <option value="Riyaziyyat">Riyaziyyat</option>
              <option value="Azərbaycan dili">Azərbaycan dili</option>
              <option value="İngilis dili">İngilis dili</option>
              <option value="Tarix">Tarix</option>
              <option value="Fizika">Fizika</option>
            </select>
          </label>

          <label>
            Sınağın qiyməti:
            <input
              type="text"
              value="10 AZN"
              readOnly
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
            />
          </label>

          <label>
            Əlavə qeydlər:
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Əgər əlavə etmək istədiyiniz bir şey varsa..."
            ></textarea>
          </label>

          <button type="submit" className="submit-btn">Göndər</button>
          <button type="button" className="exit-btn" onClick={handleExit}>Çıxış</button>

        </form>

        {submitted && (
          <div className="confirmation-message">
            Sorğunuz qeydə alındı!
          </div>
        )}
      </main>
    </div>
  );
};

export default Exam;
