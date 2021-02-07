import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromURL } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, settoken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      settoken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user her", user);
      });
    }
  }, []);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
