import logo from './logo.svg';
import './App.css';
import Pushy from 'pushy-sdk-web';


function App() {

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

    </div>
  );
}

export default App;
