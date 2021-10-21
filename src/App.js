import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/Side/SideBar";

function App() {
	const [showComponents, setShowComponent] = useState("cc");

	return (
		<>
			<Header />
			<section className='bodySec'>
				<SideBar setShowComponent={setShowComponent} />
				<Main showComponents={showComponents} />
			</section>
		</>
	);
}

export default App;
