import { io } from "socket.io-client";
import './App.css';


const socket = io(`http://localhost:8000`);

function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
