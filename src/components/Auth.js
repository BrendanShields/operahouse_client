import React from "react";
import axios from 'axios'

export default function Auth() {
const header = {"headers": {"Authorization": localStorage.Authorization}}

const checkAuthOfApi = async (req, res) => {
   const response = await axios
     .get("http://localhost:3000/auth", req)
// If response, populate api hook with Auth token and format
    console.log(response)
 }
checkAuthOfApi(header)


return (
  <div>
  <h1>test</h1>
  </div>
)
}
