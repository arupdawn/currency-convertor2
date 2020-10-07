import React, { useState } from "react";
import "./App.css";

function App() {
  const [currencyType, setCurrencyType] = useState([
    "SELECT",

    "AUD",

    "BGN",

    "BRL",

    "CAD",

    "CHF",

    "CNY",

    "CZK",

    "DKK",

    "EUR",

    "GBP",

    "HKD",

    "HRK",

    "HUF",

    "IDR",

    "ILS",

    "INR",

    "ISK",

    "JPY",

    "KRW",

    "MXN",

    "MYR",

    "NOK",

    "NZD",

    "PHP",

    "PLN",

    "RON",

    "RUB",

    "SEK",

    "SGD",

    "THB",

    "TRY",

    "USD",

    "ZAR",
  ]);

  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState(0);
  const [inputType, setInputType] = useState(currencyType[0]);
  const [outputType, setOutputType] = useState(currencyType[0]);

  //console.log("input Amount >>", inputAmount);

  const getData = async () => {
    let flag = 1;
    if (inputType == "SELECT" || outputType == "SELECT") {
      flag = 0;
      alert("Please select a valid Input or Output Currency Type");
    }
    if (flag) {
      fetch(
        "https://api.frankfurter.app/latest?amount=" +
          inputAmount +
          "&from=" +
          inputType +
          "&to=" +
          outputType
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setOutputAmount(data.rates[outputType]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="app">
      <h2>Currency-convertor</h2>

      <div className="app__body">
        <div className="app__inputAmount">
          <label><strong>Input Amount</strong></label>
          <input
            type="text"
            value={inputAmount}
            onChange={(e) => setInputAmount(Number(e.target.value))}
          ></input>
          <select
            name="currencytype"
            id=""
            onChange={(e) => setInputType(e.target.value)}
          >
            {currencyType.map((currency) => {
              return <option value={currency}>{currency}</option>;
            })}
          </select>
        </div>

        <button onClick={getData} className="btn btn-primary">Convert</button>

        <div className="app__outputAmount">
          <label><strong>Output Amount</strong></label>
          <input type="text" value={outputAmount}></input>
          <select
            name="currencytype"
            id=""
            onChange={(e) => setOutputType(e.target.value)}
          >
            {currencyType.map((currency) => {
              return <option value={currency}>{currency}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="app__footer"><footer><div className="footer-copyright text-center py-3">All Rights Reserved. © 2020 - Designed By : Arup Chandra Dawn</div></footer></div>
    </div>
  );
}

export default App;
