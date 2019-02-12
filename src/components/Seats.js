import React, { useState } from 'react'
import axios from 'axios'

function seats() {

  const URL = props.match.params.genre.replace(/_/g, ' ');

  // Hook for seats
  [seats, setSeats] = useState([])

  // Hook for Axios to retrieve data.
  useEffect(() => {
    getDataFromApi();
  }, [])
  // Function that returns data to seats
  const getDataFromApi = async () => {
    const response = await axios
      .get(`http://localhost:3000/seats.json`);
    setSeats(response.data)
  }

return (
  <div>
    <div className="seat-list">
      <h2>Select your seat</h2>
      <ul>
        {categories.map((category) =>
          <li className="grid-item"><Link to={URL + '/' + seats.id}>{category.genre}</Link></li>)}
      </ul>
    </div>
  </div>
  )
}
