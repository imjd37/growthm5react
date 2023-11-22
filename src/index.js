import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./App/store";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import GrowthEnquiry from "./Components/GrowthEnquiry/GrowthEnquiry";
import Layout from "./Layout";
import MyModal from "./Components/MyModal/MyModal";

const router= createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />}/>
      <Route path="submit" element={<MyModal />}/> 
      <Route path='enquiry' element={<GrowthEnquiry/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
