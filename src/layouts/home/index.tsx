import { FC } from "react";
import Hero from "./hero";
import About from "./about";
import Video from "./video";
// import Services from "./services";

const Home: FC = () => {
	return (
		<>
			<Hero />
			<About />
			<Video />
			{/* <Services /> */}
		</>
	);
};

export default Home;
