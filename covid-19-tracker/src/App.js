import React, { useState, useEffect } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import { sortData } from "./util";
import "leaflet/dist/leaflet.css";
import "./App.css";

const App = () => {
  const [countries, setcountries] = useState([]);
  const [country, setcountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, settableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  //On website reload
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  //OnCountry Change
  const onCountryChange = (e) => {
    const countryCode = e.target.value;

    setcountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

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
          const sortedData = sortData(data);
          settableData(sortedData);
          setMapCountries(data);
          setcountries(_countries);
        });
    };
    getCountriesData();
  }, []);
  return (
    <div className="App">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
              {/* Loop through all the countries to show in the dropdown */}
            </Select>
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox
            title="COVID-19 Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          ></InfoBox>
          <InfoBox
            title="Recoverd"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          ></InfoBox>
          <InfoBox
            title="Death"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          ></InfoBox>
        </div>
        <Map countries={mapCountries} center={mapCenter} zoom={mapZoom}></Map>
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by countries </h3>
          {/* Table */}

          <Table countries={tableData}></Table>
          <h3>WorldWide new cases</h3>
          <LineGraph />
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
