import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("");
	const [autoChange, setAutochange] = useState(true);

	const changeColor = () => {
		setSelectedColor((prevColor) => {
			if (prevColor === "red") {
				return "green";
			} else if (prevColor === "green") {
				return "yellow";
			} else {
				return "red"
			}
		});
	};
	useEffect(() => {
		let interval;
		if (autoChange) {
			interval = setInterval(() => {
				changeColor();						
		}, 2000);
	}
		return () => clearInterval(interval);
	}, [autoChange]);

	const botonPulsePeaton = () => {
		changeColor();
	};

		return (
		<div className= "container">
			<div className="estrellafugaz"></div>
			<div className="estrellafugaz"></div>
			<div className="estrellafugaz"></div>
			<div className="estrellafugaz"></div>
			<div className="asta"></div>
			<div className="traffic-light">
				<div
					onClick={ () => setSelectedColor("red")}
					class={"light red" + ((selectedColor === "red") ? " glowRed" : "")}></div>
				<div
					onClick={ () => setSelectedColor("yellow")} 
					class={"light yellow" + ((selectedColor === "yellow") ? " glowYellow" : "")}></div>
				<div 
					onClick={ () => setSelectedColor("green")}
					class={"light green" + ((selectedColor === "green") ? " glowGreen" : "")}></div>
			</div>
			<button onClick={botonPulsePeaton} className="pulsePeaton">Pulse Peaton</button>
		</div>
	);
};

export default Home;