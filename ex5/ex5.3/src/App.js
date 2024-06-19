import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form method="post" action="http://localhost:3000">
          <input type="text" name="username" placeholder="Username "/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default App;
