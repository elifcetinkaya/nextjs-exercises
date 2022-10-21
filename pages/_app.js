import "../styles/globals.css";
import { SessionProvider, useSession, signIn } from "next-auth/react";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log(Component.auth.role);
  return (
    <SessionProvider session={session}>
      {Component.auth.role === "admin" ? (
        <Admin>
          <Component {...pageProps} />
        </Admin>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Admin({ children }) {
  let role = "admin";
  if (role === "admin") {
    return children;
  }
}

export default MyApp;
