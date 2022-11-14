import { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table";
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");

  // set the data from useEffect in the useState([]);
  const [data, setData] = useState([]);



  
  useEffect(() => {
    const fetchUsers = async  () => {
      const res = await axios.get(`http://localhost:5000?query=${query}`);//call(fetch) data Users from API ('http://localhost:5000')
      setData(res.data);// pass res.data in useState
    }
    if (query.length === 0 || query.length > 2) {  // condition (if) to make APi request after the third symbol
      fetchUsers(); //call the function
    } 
  },[query]); // '[query]' is dependency wen is changed make new request for API



  return (
    <div className="app">
      {/* write in input string/abs5dc.../ and pass to useState('') */}
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      {<Table data={data} />}
    </div>
  );
}

export default App;
