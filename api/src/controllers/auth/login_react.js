import React, { useState } from 'react';

function LoginReact() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    setToken(data.token);
  }

  const handleProtectedRequest = async () => {
    const response = await fetch('/api/protected', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Aplicación de inicio de sesión con JWT</h1>
      {token ? (
        <div>
          <p>Tu token JWT es: {token}</p>
          <button onClick={handleProtectedRequest}>Solicitar recurso protegido</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Iniciar sesión</button>
        </form>
      )}
    </div>
  );
}

export default LoginReact;

