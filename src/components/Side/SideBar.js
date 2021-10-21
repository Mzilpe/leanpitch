import React from "react";
import classes from "./SideBar.module.css";
import SideButton from "./SideButton";
import { ids } from "../global/button-data";

const SideBar = ({ setShowComponent }) => {
	return (
		<aside className={classes.sideSection}>
			{ids.map((btn) => (
				<SideButton
					key={btn.id}
					id={btn.id}
					value={btn.value}
					setShowComponent={setShowComponent}
				/>
			))}
		</aside>
	);
};

export default SideBar;
