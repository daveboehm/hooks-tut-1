import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function GetUsers() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://api.github.com/users')
        .then( response => {
            return response.json()
        })
        .then( data => {
            setUsers(data);
        })
    }, [])
  

  return (
    <div>
        { users.map(u => (
            <div key={u.id} className="card">
                <h5>{u.login}</h5>
            </div>
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GetUsers />, rootElement);