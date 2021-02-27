import { FC, useState } from "react";
import Hero from "./hero";
import About from "./about";
import Vision from "./vision";
import "./styles.less";

interface IHomeLayout {
	blogData: any;
}

const HomeLayout: FC<IHomeLayout> = ({ blogData }) => {
	const [state] = useState({
		isDesktop: true
	});
	const { isDesktop } = state;

	return (
		<div className="home-layout">
			<Hero />
			<About />
			{isDesktop ? <Vision /> : null}
		</div>
	);
};

export default HomeLayout;
