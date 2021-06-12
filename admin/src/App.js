import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import logo from "./assets/chat.png";
import CreateUser from "./components/CreateUser";
import OnlineUsers from "./components/OnlineUsers";
import MessagesControl from "./components/MessagesControl";



import './App.css';



const socket = io(`http://localhost:8000`);

function App() {
	const [step, setStep] = useState(0);
	const [username, setUsername] = useState("");


	const onCreateUser = () => {
		console.log(username);
	
		// socket.emit("new_user", username);
		// const a = parseInt(Math.floor(Math.random() * 8) + 1) + ".png";
		// setAvatar(a);
	
		setStep((prevStep) => prevStep + 1);
	  };


	return (
		<div className="App">
			<header className="app-header">
				<img src={logo} alt="" />
				<div className="app-name b-500 primaryColor">My Chat</div>
			</header>


			<div className="chat-system">
        		<div className="chat-box">
					{/* step 0:  ask username ro email */}
					{step === 0 ? (
							<CreateUser 
								onCreateUser={onCreateUser}
								value={username}
								onChange={(e) => setUsername(e.target.value)}	
							/>
					): null}

					{/* Step 1: show all available users */}
					{step === 1 ? (
						<OnlineUsers
							// onUserSelect={onUserSelect}
							// users={users}
							// username={username}
							// checkUnseenMessages={checkUnseenMessages}
						/>
					) : null}

					

				</div>
			</div>
		</div>
	);
}

export default App;
