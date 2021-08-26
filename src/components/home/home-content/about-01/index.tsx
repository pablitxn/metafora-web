import React, { FunctionComponent } from "react";
import "./style.less";

const About01: FunctionComponent = () => {
	return (
		<div className="about-01">
			<article className="about-01__content">
				<h2 className="about-01__title">
					Seamos la voz que defienda al mundo que habitamos
				</h2>
				<div className="about-01__divider" />
				<button className="about-01__button">Sumate</button>
			</article>
		</div>
	);
};

export default About01;
