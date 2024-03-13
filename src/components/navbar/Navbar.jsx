import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<a
							href="#home"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("home")
									.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("about")
									.scrollIntoView({ behavior: "smooth" });
							}}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#portfolio"
							onClick={(e) => {
								e.preventDefault();
								document
									.getElementById("portfolio")
									.scrollIntoView({ behavior: "smooth" });
							}}
						>
							Portfolio
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
