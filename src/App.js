import React from 'react';
import RegistrantsChart from "./RegistrantsChart"
import './App.css'

/*
 * TODO
 * - total registrants
 * - unique registrants
 * - UChicago
 * - per class? 
 * ...ugh I need a database
 */

const App = () => {
  return (
    <div className="App">
      <section className="ChartOptions">
        <h2 className="OptionsTitle">Chart Options</h2>
      </section>
      <section className="Chart">
        <h1 className="ChartTitle">All Registrations</h1>
        <RegistrantsChart />
      </section>
    </div>
  );
}

export default App;
