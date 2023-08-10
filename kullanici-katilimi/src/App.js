import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormMaker from "./components/Form";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(userData) {
    setUsers([...users, userData]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Form Example</h1>
          <FormMaker addUser={addUser} />
          {users.map((user, i) => {
            return (
              <ul>
                <li key={i}>{`${user.password} buraya ${user.email}`}</li>
              </ul>
            );
          })}
        </div>
      </header>
    </div>
  );
}

/* ğer bir kullanıcı waffle@syrup.com mail adresini girerse, mevcut doğrulayıcınıza, 
bu email adresinin daha önce eklendiği uyarısını verecek bir handling ekleyin. */

export default App;
