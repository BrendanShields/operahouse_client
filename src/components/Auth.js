import React from "react";
import axios from 'axios'

export default function Auth() {

//  **Format JSON**
//______________________________________________________________________________
const header = {"headers": {"Authorization": localStorage.Authorization}}
//------------------------------------------------------------------------------
// AXIOS FUNCTIONS
//------------------------------------------------------------------------------
// ** AUTHORIZATION **
const checkAuthOfApi = async (req, res) => {
   const response = await axios
     .get("https://operahouse-server.herokuapp.com/auth", req)
// If response, populate api hook with Auth token and format
    console.log(response)
 }
checkAuthOfApi(header)
//------------------------------------------------------------------------------

return (
  <div>
  <h1>test</h1>
  </div>
)
}
