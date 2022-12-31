import { useState } from "react";
import styles from "../styles/Login.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Particle from "../components/Particle";
const Login = () => {
  const [domain, setDomain] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // perform login logic here
  };

  return (
    <>
      <Particle />
      <Header />
      <h1 className="">
        <span className={styles.login}>Login</span>
      </h1>
      <form onSubmit={handleLogin} className={styles.formData}>
        <label htmlFor="domain" className={styles.labelData}>
          Domain:
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className={styles.selectStyle}
          >
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
            <option value="user">User</option>
          </select>
        </label>
        <label htmlFor="username" className={styles.labelData}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.inputStyle}
          />
        </label>
        <label htmlFor="password" className={styles.labelData}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputStyle}
          />
        </label>
        <button className={styles.buttonStyle} type="submit">
          Log In
        </button>
      </form>

      <Footer />
    </>
  );
};

export default Login;
