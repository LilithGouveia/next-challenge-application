import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/formLogin.scss';

export default function FormLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Use useEffect to retrieve data from sessionStorage when the component mounts
  useEffect(() => {
    const storedData = sessionStorage.getItem('loginFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    const newFormData = { ...formData, [id]: value };
    setFormData(newFormData);

    // Store the form data in sessionStorage
    sessionStorage.setItem('loginFormData', JSON.stringify(newFormData));
  };

  return (
    <>
      <body>
        <div className='wrapper'>
          <div className='container main'>
            <div className='row'>
              <div className='col-md-6 side-image' />
              <div className='col-md-6 right'>
                <div className='input-box'>
                  <header>Logue aqui</header>
                  <div className='input-field'>
                    <input
                      type='text'
                      className='input'
                      id='email'
                      required
                      autoComplete='off'
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                    <label htmlFor='email'>E-mail</label>
                  </div>
                  <div className='input-field'>
                    <input
                      type='password'
                      className='input'
                      id='password'
                      required
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                    <label htmlFor='password'>Senha</label>
                  </div>
                  <div className='input-field'>
                    <Link className="submit"to="/dashboard">
                    <input type='submit' className='submit' value='Entrar' />
                    </Link>
                  </div>
                  <div className='signin'>
                    <span>
                      Não tem uma conta? <Link to='#'>Inscreva-se</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}