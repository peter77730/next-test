"use client";

import React, { useEffect, useState } from "react";
// import { useClient } from "next/data-client";
import "../src/app/globals.css";
import { fetchBaseURL } from "../lib/api";

const Login = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { baseURL } = await fetchBaseURL();
        const response = await fetch(`${baseURL.customUrlV1}/login`);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        // 可以根據需要處理錯誤
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      <div>{data.login}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Login;
