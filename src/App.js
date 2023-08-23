
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather App</h1>
      <Weather/>
      <footer>
        This project was created by Bukola Agunbiade and it is {" "}
      <a href="https://github.com/atinsbukol/react-weather-app" target='_blank' rel='noreferrer'>open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

