import React, { FunctionComponent } from "react";
import "./style.less";

const Navigation: FunctionComponent = () => {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="mocked">01</li>
				<li>02</li>
				<li>03</li>
			</ul>
		</nav>
	);
};

export default Navigation;
