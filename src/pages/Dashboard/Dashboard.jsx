import React from "react";
import { Header } from "./components/Header";
import { ForecastDetails } from "./components/ForecastDetails";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div>
        <ul>
          <li>
            <ForecastDetails />
          </li>
          <li>
            <ForecastDetails />
          </li>
          <li>
            <ForecastDetails />
          </li>
          <li>
            <ForecastDetails />
          </li>
          <li>
            <ForecastDetails />
          </li>
          <li>
            <ForecastDetails />
          </li>
        </ul>
      </div>
    </>
  );
};
