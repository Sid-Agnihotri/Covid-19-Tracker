import React from "react";
import "../components/Table.css";
const Table = ({ countries }) => {
  return (
    <div>
      <div className="table">
        {countries.map((country) => (
          <tr>
            <td>{country.country}</td>
            <td>
              <strong>{country.cases}</strong>
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Table;
