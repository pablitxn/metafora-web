import React, { FunctionComponent } from "react";
import Background from "components/home/background";
import Header from "components/home/header";
import Navigation from "components/home/navigation";
import HomeContent from "components/home/home-content";
import "./style.less";

const NewHome: FunctionComponent = () => {
	const MENU_SELECTED_MOCKED = "01";

	return (
		<div className="home-layout">
			<Header />
			<Navigation />
			<Background />
			<HomeContent selected={MENU_SELECTED_MOCKED} />
		</div>
	);
};

export default NewHome;
