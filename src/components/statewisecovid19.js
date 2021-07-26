import React, { useState, useEffect } from "react";
import "../styling/statewisecovid19.css";

export default function Statewisecovid19() {
  const [data, setData] = useState();
  const getStatewiseData = async () => {
    const response = "https://api.covid19india.org/data.json";
    const res = await fetch(response);
    const finalData = await res.json();
    console.log("data", finalData.statewise);
    setData(finalData.statewise);
  };

  useEffect(() => {
    getStatewiseData();
  }, []);
  return (
    <>
      <div>
        <h1> india covid-19 statewise tracker </h1>
      </div>
      <div></div>
      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table-hover">
            <thead className="thead-dark">
              <tr>
                <th>state</th>
                <th>confirmed</th>
                <th>recovered</th>
                <th>deaths</th>
                <th>active</th>
                <th>last updated</th>
              </tr>
            </thead>

            {data?.map((ele, index) => {
              return (
                <tr key={index}>
                  <th>{ele.state}</th>
                  <td>{ele.confirmed}</td>
                  <td>{ele.recovered}</td>
                  <td>{ele.deaths}</td>
                  <td>{ele.active}</td>
                  <td>{ele.lastupdatedtime}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
