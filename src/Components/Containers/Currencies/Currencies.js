import React, { useEffect } from "react";
import "./Currencies.css";
import { useDispatch, useSelector } from "react-redux";
import { showCurrencies } from "../../../features/user/userSlice";

function Currencies() {
  const currencies = useSelector((state) => state.currencies);
  const { loading } = useSelector((state) => state.currencies);
  const dispatch = useDispatch();
  const data = [];

  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * currencies.length);
    if (currencies[random] !== undefined) {
      if (data.includes(currencies[random]) === true) {
        data.push(currencies[random - 1]);
      } else {
        data.push(currencies[random]);
      }
    }
  }

  useEffect(() => {
    dispatch(showCurrencies());
  }, []);

  if (loading) {
    return (
      <div className="CurrenciesContainer">
        <h1>All Country Currency</h1>
        <div className="CurrenciesArea">
          <h1>loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="CurrenciesContainer">
      <h1>All Country Currency</h1>
      <div className="CurrenciesArea">
        <div id="Currencies">
          {data.map((user) => (
            <ul>
              <ul key={user.id}>
                <li> {user.id}</li>
                <li> {user.name}</li>
                <li> {user.min_size}</li>
              </ul>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Currencies;
