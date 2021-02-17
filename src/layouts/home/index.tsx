import { FC, useState } from "react";
import Hero from "./hero";
import About from "./about";
import Vision from "./vision";
import Footer from "components/_shared/footer";
import LastPosts from "./last-posts";
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
			{isDesktop && blogData.length ? <LastPosts blogData={blogData} /> : null}
		</div>
	);
};

export default HomeLayout;
