import React from 'react';
import { Users } from "./users.js";

// REACT basic Search Function Logic

////////BASIC SEARCH
const basicSearchFunction = () => {
  return (
    <div className="app">
      {/* write in input string/absdc.../ and pass to useState() */}
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {/* logic for filter USERS words by using small symbols end render the result by (query)  */}
        {Users.filter((user) =>
          user.first_name.toLocaleLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default basicSearchFunction;