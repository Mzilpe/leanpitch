import React from "react";
import classes from "./SideButton.module.css";

const SideButton = (props) => {
	const { id, value, setShowComponent } = props;

	return (
		<button
			className={classes.sideButtons}
			id={id}
			onMouseOver={(event) => {
				setShowComponent(event.target.attributes.id.value);
			}}
			onMouseLeave={() => setShowComponent("")}
		>
			{value}
		</button>
	);
};

export default SideButton;
