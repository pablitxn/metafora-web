import React, { FunctionComponent } from "react";
import useHomeNavigation from "hooks/useHomeNavigation";
import Background from "components/home/background";
import Header from "components/home/header";
import Navigation from "components/home/navigation";
import HomeContent from "components/home/home-content";
import "./style.less";

const NewHome: FunctionComponent = () => {
	const { currentPage, handleNavigation } = useHomeNavigation();

	return (
		<div className="home-layout">
			<Header />
			<Navigation onPageChange={handleNavigation} pageSelected={currentPage} />
			<Background />
			<HomeContent selected={currentPage} />
		</div>
	);
};

export default NewHome;
