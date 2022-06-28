/* eslint-disable */
import React, { Component, Button, useEffect } from 'react';
import './bootstrap.min.css';
import './centerdiv.css';
import { useMoralis } from "react-moralis";
import { Web3Auth } from "@web3auth/web3auth";



// so if you hit f12 you can see console.log errors
// the one error that immidietly stands out is button is not defined
// 


function App() {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);


  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({ 

        provider: "web3Auth",
        clientId: "BON5amDs3TtsrzOwRgYuP25eFyR5jsb0XegcAQ9Z2NUX99r07XQe5mrTNo4s2auNxszIbkgmuPg54bXM4ow3U9w", 
        signingMessage: "Log in using Moralis"
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }



  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img src={require("./images/big-diamond.png")} alt="" />
            <div>
              <h2>Cryft Cards</h2>
            </div>
            <div>
              <h3>Welcome to the Moon</h3>
            </div>
            <div>
              <h1></h1>
              {!isAuthenticated && <> buttons </>}
              <button onClick={login}>Dashboard Login</button>
              <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;