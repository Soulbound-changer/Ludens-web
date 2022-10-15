import logo from './logo.svg';
import './App.css';

function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ludens
        </h1>
        <h2>
          A Brand-New Learnfi is HERE!!!!!!
        </h2>
      </header>
      <button onClick={sayHello}>問題を作る</button>
      <button onClick={sayHello}>問題を解く</button>
      <button onClick={sayHello}>採点する</button>
    </div>
  );
}

export default App;
