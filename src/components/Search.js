import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {

  const [query, setQuery] = useState('');
  const [event, setEvent] = useState([]);
  const [result, setResult] = useState('');

  // Hook for Axios to retrieve data.
  useEffect(() => {
    getDataFromApi();
  }, [])
  const getDataFromApi = async () => {
    const response = await axios
      .get(`http://localhost:3000/events.json`);
    setEvent(response.data)
  }

  const handleSubmit = event => {
    event.preventDefault()
    search();
  }

  const search = () => {
    const result = event.filter((prop) => {
      if (query === prop.name) {
        setResult(prop);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for..."
          type="query"
        />
        <button type="submit">Search</button>
      </form>

      <p>{result.name}</p>
    </div>
  );
}
