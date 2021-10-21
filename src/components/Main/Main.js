import React from "react";
import classes from "./Main.module.css";
import Trainings from "../Screens/Trainings";
import Conference from "../Screens/Conference";
import Meetups from "../Screens/Meetups";
import Webinars from "../Screens/Webinars";
import Videos from "../Screens/Videos";
import SpeakSeries from "../Screens/SpeakSeries";
import Blogs from "../Screens/Blogs";
import Podcast from "../Screens/Podcast";
import Speaker from "../Screens/Speaker";
import Volunteer from "../Screens/Volunteer";
import Aboutus from "../Screens/Aboutus";

const Main = (props) => {
	const { showComponents } = props;

	const renderSwitch = (showComponent) => {
		switch (showComponent) {
			case "trainings":
				return <Trainings />;
			case "meetups":
				return <Meetups />;
			case "webinars":
				return <Webinars />;
			case "conference":
				return <Conference />;
			case "videos":
				return <Videos />;
			case "speakSeries":
				return <SpeakSeries />;
			case "blogs":
				return <Blogs />;
			case "podcast":
				return <Podcast />;
			case "speaker":
				return <Speaker />;
			case "volunteer":
				return <Volunteer />;
			case "aboutus":
				return <Aboutus />;
			default:
				return "";
		}
	};

	return (
		<>
			{showComponents !== "" ? (
				<main className={classes.mainBody}>{renderSwitch(showComponents)}</main>
			) : (
				""
			)}
		</>
	);
};

export default Main;
