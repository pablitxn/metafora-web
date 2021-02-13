import { FC, useState } from "react";
import Hero from "./hero";
import About from "./about";
import Vision from "./vision";
import Footer from "components/_shared/footer";
import Navbar from "components/_shared/navbar";
import BurgerMenu from "components/_shared/burger-menu";
import LastPosts from "./last-posts";
import "./styles.less";

interface IHomeLayout {
	blogData: any;
}

const HomeLayout: FC<IHomeLayout> = ({ blogData }) => {
	const [state] = useState({
		isDesktop: true,
		isMobile: false
	});
	const { isDesktop, isMobile } = state;

	return (
		<div className="home-layout">
			{isDesktop ? <Navbar /> : null}
			{isMobile ? <BurgerMenu /> : null}
			<Hero />
			<About />
			{isDesktop ? <Vision /> : null}
			{isDesktop && blogData.length ? <LastPosts blogData={blogData} /> : null}
			<Footer />
		</div>
	);
};

export default HomeLayout;
