import "../styles/globals.css";
import React from "react";

let role = "admin"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.auth && Component.auth.role === "admin" ? (
        <Admin>
          <Component {...pageProps} />
        </Admin>
      ) : (
        <User>
          <Component {...pageProps} />
        </User>
      )}
    </>
  );
}

function Admin({ children }) {
  if (role === "admin") {
    return children;
  }
  else {
     return "404"
  }
}

function User({ children }) {
  if (role === "user") {
    return children;
  }
}

export default MyApp;
