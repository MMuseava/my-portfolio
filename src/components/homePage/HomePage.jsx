import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "../portfolio/Portfolio";
import Navbar from "../navbar/Navbar";

const HomePage = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div id="home">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTCtx2w5KuPMeLNATOcy058HV24Al5jMs4Q&usqp=CAU"
					alt="Meerim Musaeva"
				/>
				<h1>I am Meerim Musaeva</h1>
			</div>
			<div id="about" style={{ marginTop: "1000px" }}>
				<AboutMe />
			</div>
			<div id="portfolio" style={{ marginTop: "1000px" }}>
				<Portfolio />
			</div>
		</div>
	);
};

export default HomePage;
