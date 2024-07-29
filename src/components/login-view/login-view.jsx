import { useState } from "react";
export const LoginView = (prop) => {
    const handleSubmit = (event) => {
        // this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
    
        const data = {
          Username: username,
          Password: password
        };

        fetch("https://movie-flix-api-7-2024-a1aaa29e3315.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(data)
          }).then((response) => response.json())
            .then((data) => {
            if (data.user) { // if successful login (user will not be undefined)
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                prop.onLoggedIn(data.user, data.token);
            } else {
                alert("No such user");
            }
          })
          .catch((e) => {
            alert("Something went wrong");
          })};

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)}
                 required
            />
        </label>
        <label>
          Password:
          <input type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)} 
                 required
            />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };