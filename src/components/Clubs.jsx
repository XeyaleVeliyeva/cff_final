import React, { useState } from 'react';
import './Clubs.css'; 
import logo from '../img/logo.svg';
import logo2 from '../img/tehsil.svg';
import { useNavigate,useLocation } from 'react-router-dom';

const Clubs = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    club: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/StudentBoard',{ state: { user } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // console.log(formData);
  };

  return (
    <div className="clubs-container">
      <header className='header-clubs'>
        <img src={logo} alt="logo" className='logo' />
        <h1>Təhsildə rəqəmsal gələcək!</h1>
        <img src={logo2} alt="logo" className='logo' />
      </header>
      <main className='club'>

      <h2>Məktəb klublarına Qeydiyyat</h2>
      <p>Klublar məktəblilər üçün pulsuzdur. Qeydiyyatdan keçmək üçün formu doldurun.</p>
      
      <form className="clubs-form" onSubmit={handleSubmit}>
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
          Sinif:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
            />
        </label>

        <label>
          Klub seçin:
          <select
            name="club"
            value={formData.club}
            onChange={handleChange}
            required
            >
            <option value="">Klub seçin</option>
            <option value="Rəqs">Rəqs</option>
            <option value="Musiqi">Musiqi</option>
            <option value="İdman">İdman</option>
            <option value="Rəsm">Rəsm</option>
          </select>
        </label>

        <button type="submit" className="submit-btn">Qeydiyyat</button>
        <button type="button" className="exit-btn" onClick={goBack}>Çıxış</button>

      </form>

      {submitted && (
        <div className="confirmation-message">
          Sorğunuz yerinə yetirildi!
        </div>
      )}
      </main>
    </div>
  );
};

export default Clubs;
