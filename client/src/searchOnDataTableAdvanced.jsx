import React from 'react'
import { useState } from "react";
import "./App.css";
import { Users } from "./users.js";
import Table from "./Table";


const searchOnDataTableAdvanced = () => {

    const [query, setQuery] = useState("");

    //console.log(Users[0]['email']);
  

    const keyFieldsTable = ["first_name", "last_name", "email"];
  
    //filter 'users' when Search... will take 'data' end return filtered 'data' 
    const search = (data) =>{
      //search in all colons --> first_name, last_name, email...
      return (
        data.filter( (item) => keyFieldsTable.some((allProps) => item[allProps].toLowerCase().includes(query)) )
      )
    }
  
  
    return (
      <div className="app">
        {/* write in input string/abs5dc.../ and pass to useState('') */}
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
  
        {/* passing { Users } from "./users.js" to ({data}) end render 'Table'! */}
        {/* <Table data={Users}/> */}
  
        {/* implementing search function where Table  prop-->'data' === 'Users' */}
        <Table data = {search(Users)}/>
      </div>
    );
  }

export default searchOnDataTableAdvanced;