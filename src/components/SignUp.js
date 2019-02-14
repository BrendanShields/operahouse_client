import React, { useState } from "react";
import axios from 'axios'

function Form() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const request = {"user": {"email": email, "password": password, "username": username}}

  // on Form submit
    const handleSubmit = event => {
       event.preventDefault()
       postDataToApi(request, []);
     }

  // Post to axios the Form input
    const postDataToApi = async (req, res) => {
       const response = await axios
         .post("https://operahouse-server.herokuapp.com/create", req)

  // If response, populate api hook with Auth token and format
         if (response.data !== undefined) {
           window.location.reload()
       }
     }

return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={e => setUserName(e.target.value)}
        placeholder="User name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
<button type="submit">Submit</button>
    </form>
  );
}
export default Form;
