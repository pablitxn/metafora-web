import React, { FunctionComponent } from "react";
import Header from "components/new-home/header";
import Navigation from "components/new-home/navigation";
import "./style.less";

const NewHome: FunctionComponent = () => {
	return (
		<div className="home-layout">
			<Header />
			<Navigation />
		</div>
	);
};

export default NewHome;
