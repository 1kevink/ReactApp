import React, { useEffect } from "react";
const API_KEY = '6EFF78E0-36F7-4B95-92D0-83985A2C8974';

const App = () => {
  let socket = new WebSocket("wss://ws.coinapi.io/v1/");
  console.log('socket', socket)
  console.log(111)
  socket.onopen = (e) => {
    console.log("OPEN")
    socket.send(
      {
        "type": "hello",
        "apikey": "73034021-THIS-IS-SAMPLE-KEY",
        "heartbeat": false,
      }
    )
  }
  socket.onmessage = (e) => {
    console.log(e)
  }
  useEffect(() => {
    console.log(222)
  })
  return (
    <div>
      Workin
    </div>
  );
};

export default App;