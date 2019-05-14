import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default function CelebrityDetails(props) {
  let country = axios.find( results => results.cca3 === props.match.params.cca3)
  return (
    <div className="CelebrityDetails">
      <h2>Celebrity Details</h2>
      <strong>Celebrity name:</strong>{country.name.common}<br />
      <strong>Capital:</strong>{country.capital.join(", ")}<br />
      <strong>Area:</strong>{country.area} km<sup>2</sup><br />
      <strong>Borders:</strong>{country.borders.map(cca3=><li key={cca3}>
        <Link to={"/"+cca3}>{jsonCountries.find(c=>c.cca3=== cca3).name.common}</Link>
      </li>)}<br />
    </div>
  )
}