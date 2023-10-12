import { Link } from 'react-router-dom';
import '../style/formLogin.scss';
export default function Formlogin() {
  return (
    <>
      <body>
        <div className='wrapper'>
          <div className='container main'>
            <div className='row'>
              <div className='col-md-6 side-image'/>
              <div className='col-md-6 right'>
                <div className='input-box'>
                  <header>Crie uma conta</header>
                  <div className='input-field'>
                    <input
                      type='text'
                      className='input'
                      id='email'
                      required
                      autoComplete='off'
                    />
                    <label htmlFor='email'>Email</label>
                  </div>
                  <div className='input-field'>
                    <input
                      type='password'
                      className='input'
                      id='pass'
                      required
                    />
                    <label htmlFor='pass'>Password</label>
                  </div>
                  <div className='input-field'>
                    <input type='submit' className='submit' value='Sign Up' />
                  </div>
                  <div className='signin'>
                    <span>
                      Já tem uma conta? <Link href='#'>Logue aqui!</Link>
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
