import { useState } from "react";
import "./styles.css";

export default function Login() {
  //const login_value = document.getElementById("input_login").value;
  //const password_value = document.getElementById("input_password").value;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const log_values = () => {
    console.log("Login:", login);
    console.log("Password:", password);
  };

  return (
    <div className="Login">
      <div className="form-group">
        <div className="form-label">
          <label className="field-label">Login</label>
        </div>
        <div className="form-field">
          <input
            type="text"
            id="input_login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-label">
          <label className="field-label">Password</label>
        </div>
        <div className="form-field">
          <input
            type="password"
            id="input_password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <input
            type="button"
            id="input_enter"
            value="Enter"
            onClick={log_values}
          />
        </div>
      </div>
    </div>
  );
}
