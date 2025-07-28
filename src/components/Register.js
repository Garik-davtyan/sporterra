import React, { useState } from "react";

const API_URL = "http://localhost:5000"; // адрес backend Flask

export default function Register() {
  const [isRegister, setIsRegister] = useState(false);
  // Вход
  const [login, setLogin] = useState({ phone: "", password: "" });
  // Регистрация
  const [form, setForm] = useState({ phone: "", name: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Обработка входа
  const handleLoginChange = e => setLogin({ ...login, [e.target.name]: e.target.value });
  const handleLogin = async e => {
    e.preventDefault();
    if (!login.phone || !login.password) {
      setError("Введите телефон и пароль");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(false);
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: login.phone, password: login.password })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setError("");
      } else {
        setError(data.message || "Ошибка входа");
        setSuccess(false);
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
      setSuccess(false);
    }
  };

  // Обработка регистрации
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.phone || !form.name || !form.password || !form.confirm) {
      setError("Заполните все поля");
      setSuccess(false);
      return;
    }
    if (form.password !== form.confirm) {
      setError("Пароли не совпадают");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(false);
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: form.phone, password: form.password })
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setError("");
      } else {
        setError(data.message || "Ошибка регистрации");
        setSuccess(false);
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
      setSuccess(false);
    }
  };

  return (
    <div style={{maxWidth:380,margin:"40px auto",background:"#fff",borderRadius:16,boxShadow:"0 4px 24px #0002",padding:32}}>
      <h2 style={{textAlign:"center",marginBottom:24}}>{isRegister ? "Регистрация" : "Вход"}</h2>
      {error && <div style={{color:"#e74c3c",marginBottom:12,textAlign:"center"}}>{error}</div>}
      {success && <div style={{color:"#27ae60",marginBottom:12,textAlign:"center"}}>{isRegister ? "Регистрация успешна!" : "Вход выполнен!"}</div>}
      {!isRegister ? (
        <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",gap:18}}>
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={login.phone}
            onChange={handleLoginChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="tel"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={login.password}
            onChange={handleLoginChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="current-password"
          />
          <button type="submit" style={{background:'#222',color:'#fff',border:'none',borderRadius:8,padding:'12px 0',fontSize:'1em',marginTop:8,cursor:'pointer'}}>Войти</button>
          <button type="button" onClick={()=>{setIsRegister(true);setError("");setSuccess(false);}} style={{background:"none",border:"none",color:"#222",marginTop:8,cursor:"pointer",textDecoration:"underline"}}>Регистрация</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:16}}>
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="tel"
          />
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="name"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={form.password}
            onChange={handleChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="new-password"
          />
          <input
            type="password"
            name="confirm"
            placeholder="Повторите пароль"
            value={form.confirm}
            onChange={handleChange}
            style={{padding:12,borderRadius:8,border:"1px solid #c4fa08",fontSize:"1em"}}
            autoComplete="new-password"
          />
          <button type="submit" style={{background:'#222',color:'#fff',border:'none',borderRadius:8,padding:'12px 0',fontSize:'1em',marginTop:8,cursor:'pointer'}}>Зарегистрироваться</button>
          <button type="button" onClick={()=>{setIsRegister(false);setError("");setSuccess(false);}} style={{background:"none",border:"none",color:"#222",marginTop:8,cursor:"pointer",textDecoration:"underline"}}>Назад к входу</button>
        </form>
      )}
    </div>
  );
}
