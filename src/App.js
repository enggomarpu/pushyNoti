import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';  
import Pushy from 'pushy-sdk-web';
import Header from './Header';


function App() {

  useEffect(()=>{
    // if (!("Notification" in window)) {
    //   console.log("This browser does not support desktop notification");
    // } else {
    //   Notification.requestPermission();
    // }
    askUserPermission()
  }, [])

  const askUserPermission = () => {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!");
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
  }
  Pushy.register({ appId: '607d3e9ebe50e00f1b8f55ab' }).then(function (deviceToken) {
    // Print device token to console
    console.log('Pushy device token: ' + deviceToken);
    //setDeviceTokenApp(deviceToken);

    // Succeeded, optionally do something to alert the user
  }).catch(function (err) {
    // Handle registration errors
    console.error(err);
  });
 
  return (
    <div className="App">
      <h1>Notifications</h1>
      <Header />

    </div>
  );
}

export default App;
