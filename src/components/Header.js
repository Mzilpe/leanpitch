import React from "react";
import classes from "./Header.module.css";
import Icon from "../productwhite.png";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<nav className={classes.iconHeading}>
				<img src={Icon} alt='Header Icon' height='50px' />
				<h1>Leanpitch</h1>
			</nav>
			<nav className={classes.navButtonSection}>
				<button className={classes.navButtons}>Subscribe</button>
				<button className={classes.navButtons}>Contact us</button>
			</nav>
		</header>
	);
};

export default Header;
