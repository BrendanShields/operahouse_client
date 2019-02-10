import React, { useState, useEffect } from "react";
import axios from 'axios'

function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const request = {"auth": {"email": email, "password": password}}

  const handleSubmit = event => {
     event.preventDefault()
     postDataToApi();
   }

  const postDataToApi = async () => {
     const response = await axios
       .post("http://localhost:3000/api/user_token", {request});
     console.log(response)
   }

return (
    <form onSubmit={handleSubmit}>
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
