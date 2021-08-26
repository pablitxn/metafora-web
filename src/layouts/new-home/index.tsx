import React, { FunctionComponent } from "react";
import Background from "components/new-home/background";
import Header from "components/new-home/header";
import Navigation from "components/new-home/navigation";
import HomeContent from "components/new-home/home-content";
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
