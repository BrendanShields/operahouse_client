import React, { useState, useEffect } from "react";
import axios from 'axios'

function Form() {

// Hooks for different variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setAPI] = useState()
  const request = {"auth": {"email": email, "password": password}}

// on Form submit
  const handleSubmit = event => {
     event.preventDefault()
     postDataToApi(request, []);
   }

// Post to axios the Form input
  const postDataToApi = async (req, res) => {
     const response = await axios
       .post("http://localhost:3000/user_token", req)

// If response, populate api hook with Auth token and format
       if (response.data != undefined) {
         setAPI('Bearer ' + response.data.jwt)
     }
   }

// Commit formated Auth token to local storage
   if (api != undefined){
     localStorage.setItem('Authorization', api);
  }



console.log('api token', api)

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
