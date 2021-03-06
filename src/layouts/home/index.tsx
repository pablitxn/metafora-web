import { FC } from "react";
import Hero from "./hero";
import About from "./about";
import Vision from "./vision";
import "./styles.less";

const HomeLayout: FC = () => {
	return (
		<div className="home-layout">
			<Hero />
			<About />
			<Vision />
		</div>
	);
};

export default HomeLayout;
