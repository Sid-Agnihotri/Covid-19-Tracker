import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import "./App.css";

const App = () => {
  const [countries, setcountries] = useState([]);

  useEffect(() => {
    //async - sending request to a server and wait for the data then work on the info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const _countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setcountries(_countries);
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="App">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* Loop through all the countries to show in the dropdown */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default App;
