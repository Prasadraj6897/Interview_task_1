import React, { useState, useRef, useEffect  } from 'react'
import './style.css'
/**
* @author
* @function Counter
**/

const Counter = (props) => {
	const [timer, setTimer] = useState(0);
	const increment = useRef(null)
	const rgb = [255, 0, 0];

	const [backgroundcolour, setbackgroundcolour] = useState('');
	const [textColour, settextColour] = useState('');


	useEffect(()=>{
		setContrast()
	},[timer])

	const setContrast = () =>{
		
		rgb[0] = Math.round(Math.random() * 255);
		rgb[1] = Math.round(Math.random() * 255);
		rgb[2] = Math.round(Math.random() * 255);

		// http://www.w3.org/TR/AERT#color-contrast
		const brightness = Math.round(((parseInt(rgb[0]) * 299) +
							(parseInt(rgb[1]) * 587) +
							(parseInt(rgb[2]) * 114)) / 1000);
		
		settextColour((brightness > 125) ? 'black' : 'white');
		setbackgroundcolour('rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')');
		console.log(backgroundcolour)
	}

	const handleStart = () =>{
		increment.current = setInterval(() => {
			setTimer((timer) => timer + 1)
			
		  }, 1000);
	}

	const handleStop =() =>{
		clearInterval(increment.current)
	}
  return(
		<div id="cont">
			<div className="card text-center" >
				
				<div className="card-header text-dark">
					<h4 className="card-title">Counter</h4>
				</div>
				<div className="card-body text-dark" style={{margin:"60px",textColour: textColour,backgroundColor:`${backgroundcolour}`}}>
					{timer}
				</div>
				<div className="card-footer text-dark butn" >
					<button className="btn btn-outline-success" onClick={handleStart}>Start</button>
					<button className="btn btn-outline-warning" onClick={handleStop}>Stop</button>
				</div>
			</div>
		</div>
   )

 }

export default Counter