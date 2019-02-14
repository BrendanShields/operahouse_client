
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SeatMap() {


  const egg = function(param){
    console.log(param)

        const [seats, setSeat] = useState([]);

        // Hook for Axios to retrieve data.
        useEffect(() => {
            getDataFromApi();
        }, [])
        const getDataFromApi = async () => {
            const response = await axios
                .get(`http://localhost:3000/seats.json`);
            setSeat(response.data)

        }


return (

<div>
</div>

  )
}
}
