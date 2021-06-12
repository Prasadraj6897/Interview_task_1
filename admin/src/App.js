import { io } from "socket.io-client";
import logo from "./assets/chat.png";




import './App.css';


const socket = io(`http://localhost:8000`);

function App() {
	return (
		<div className="App">
			<header className="app-header">
				<img src={logo} alt="" />
				<div className="app-name b-500 primaryColor">My Chat</div>
			</header>
		</div>
	);
}

export default App;
