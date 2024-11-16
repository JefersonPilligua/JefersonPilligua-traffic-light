import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [trafficColor, setTrafficColor] = useState("green");

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light</h1>
			<div className="traffic">
				<div onClick={() => setTrafficColor("red")} className={"red" + (trafficColor === "red" ? " glow" : "")}></div>
				<div onClick={() => setTrafficColor("yellow")} className={"yellow" + (trafficColor === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setTrafficColor("green")} className={"green" + (trafficColor === "green" ? " glow" : "")}></div>
			</div>
		</div>
	);
};

export default Home;