import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth action using localized data wrapper
    const finalName = isLogin ? (email.split('@')[0] || 'User') : name;
    login(finalName, email);
    navigate('/');
  };

  return (
    <div style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', backgroundColor: '#f9f9f9' }}>
      <div style={{ backgroundColor: '#fff', padding: '50px', width: '100%', maxWidth: '500px', border: '1px solid #eaeaea', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '30px', textAlign: 'center', fontWeight: 700 }}>
          {isLogin ? 'Log In to Your Account' : 'Create an Account'}
        </h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {!isLogin && (
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Full Name</label>
              <input required type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
            </div>
          )}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Email Address</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Password</label>
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
          </div>
          
          <button type="submit" style={{ width: '100%', padding: '18px', backgroundColor: '#000', color: '#fff', border: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', marginTop: '10px' }}>
            {isLogin ? 'Sign In' : 'Register'}
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
            <span style={{ padding: '0 15px', color: '#888', fontSize: '14px', fontWeight: 600 }}>OR</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
          </div>

          <button 
            type="button" 
            onClick={() => { login('Google User', 'user@gmail.com'); navigate('/'); }}
            style={{ width: '100%', padding: '15px', backgroundColor: '#fff', color: '#444', border: '1px solid #ddd', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', borderRadius: '4px' }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: '20px', height: '20px' }} />
            Sign in with Google
          </button>
        </form>

        <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px' }}>
          {isLogin ? (
            <p>New customer? <button onClick={() => setIsLogin(false)} style={{ background: 'none', border: 'none', color: '#f17e16', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}>Create an account</button></p>
          ) : (
            <p>Already have an account? <button onClick={() => setIsLogin(true)} style={{ background: 'none', border: 'none', color: '#f17e16', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}>Log in</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
