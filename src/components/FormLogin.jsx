import { Link } from 'react-router-dom';
import '../style/formLogin.scss';
export default function FormLogin() {
  return (
    <>
      <body>
        <div className='wrapper'>
          <div className='container main'>
            <div className='row'>
              <div className='col-md-6 side-image'/>
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
                    />
                    <label htmlFor='email'>E-mail</label>
                  </div>
                  <div className='input-field'>
                    <input
                      type='password'
                      className='input'
                      id='pass'
                      required
                    />
                    <label htmlFor='pass'>Senha</label>
                  </div>
                  <div className='input-field'>
                    {/* <input type='submit' className='submit' value='Entrar' /> */}
                    <button className='loginPoha'><Link to="/dashboard">Login</Link></button>
                    {/* <div className='submit'>
                    </div> */}
                  </div>
                  <div className='signin'>
                    <span>
                      Não tem uma conta? <Link href='#'>Inscreva-se</Link>
                    </span>  
                  </div>
                  <div className='backhome'>
                    <Link className="homebtn" to="/">Home</Link>
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
