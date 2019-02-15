import React, { useState } from "react";
import axios from 'axios'

function Form() {


//     **Hooks**
//----------------------------------------------------------------------------
/* |    SEAT ID    | */  const [email, setEmail] = useState("");
/* |    SEAT ID    | */  const [password, setPassword] = useState("");
/* |    SEAT ID    | */  const [api, setAPI] = useState()
//  **Format JSON**
//____________________________________________________________________________
  const request = {"auth": {"email": email, "password": password}}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// AXIOS FUNCTIONS
//----------------------------------------------------------------------------
// **  LOGIN **
  const handleSubmit = event => {
     event.preventDefault()
     postDataToApi(request, []);
   }
//----------------------------------------------------------------------------
// ** Post to axios the Form input **
  const postDataToApi = async (req, res) => {
     const response = await axios
       .post("https://operahouse-server.herokuapp.com/user_token", req)
//----------------------------------------------------------------------------
// If response, populate api hook with Auth token and format
       if (response.data !== undefined) {
         setAPI('Bearer ' + response.data.jwt)
        window.location.reload()
     }
   }
//----------------------------------------------------------------------------
// Commit formated Auth token to local storage
   if (api !== undefined){
     localStorage.setItem('Authorization', api);
  }
//----------------------------------------------------------------------------
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
